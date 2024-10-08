import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../shared/services/category.service';
import { ApiResonse } from 'src/app/shared/model/api.response';
import { CategoryBE } from '../../shared/model/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogBE } from '../../shared/model/blog';
import { BlogService } from '../../shared/services/blog.service';
import { HotTopicBE } from '../../shared/model/hot-topic';
import { HotTopicService } from '../../shared/services/hot-topic.service';
import { AUTHORS } from 'src/app/shared/model/author.constant';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface FileHandle {
  file: File;
  url: SafeUrl;
}

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
})
export class NewsCreateComponent implements OnInit {
  blogId: string = '';
  categoryId: string = '';
  hotTopicId: string = '';
  edit = false;

  categories: { key: CategoryBE; value: string }[] = [];
  hotTopics: { key: HotTopicBE; value: string }[] = [];

  selectedCategory: { key: CategoryBE; value: string } | null = null;
  selectedHotTopic: { key: HotTopicBE; value: string } | null = null;

  blogForm!: FormGroup;

  coverImage!: FileHandle;

  constructor(
    private sanitizer: DomSanitizer,
    private _route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private blogService: BlogService,
    private categoryService: CategoryService,
    private hotTopicService: HotTopicService
  ) {
    this.blogId = this._route.snapshot.paramMap.get('id') ?? '';
    this.edit = this.blogId !== '';
  }

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      id: [],
      title: ['', Validators.required],
      subTitle: ['', Validators.required],
      description: ['', Validators.required],
      coverImage: [''],
    });
    if (this.edit) {
      this.patchForm();
    } else {
      this.loadCategory();
      this.loadHotTopic();
    }
  }

  get title() {
    return this.blogForm.get('title');
  }

  get coverImageURL() {
    return this.blogForm.get('coverImage');
  }

  patchForm() {
    this.blogService.getBlogById(this.blogId).subscribe({
      next: (res) => {
        this.blogForm.patchValue(res.data);
        this.categoryId = res.data.categoryId;
        this.hotTopicId = res.data.hotTopicId;
        this.loadCategory();
        this.loadHotTopic();
      },
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const url = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      );
      this.coverImage = {
        file,
        url,
      };
    }
  }

  loadCategory() {
    this.categoryService.getAllCategorys().subscribe({
      next: (res: ApiResonse<CategoryBE[]>) => {
        this.categories = res.data.map((x) => {
          return { key: x, value: x.code };
        });
        if (this.categoryId) {
          this.selectedCategory = this.categories.find(
            (x) => x.key.id === this.categoryId
          )!;
        }
      },
    });
  }

  loadHotTopic() {
    this.hotTopicService.getAllHotTopics().subscribe({
      next: (res: ApiResonse<HotTopicBE[]>) => {
        this.hotTopics = res.data.map((x) => {
          return { key: x, value: x.code };
        });
        if (this.hotTopicId) {
          this.selectedHotTopic = this.hotTopics.find(
            (x) => x.key.id === this.hotTopicId
          )!;
        }
      },
    });
  }

  categoryChanged(select: { key: CategoryBE; value: string } | null) {
    this.selectedCategory = select;
  }

  hotTopicChanged(select: { key: HotTopicBE; value: string } | null) {
    this.selectedHotTopic = select;
  }

  saveBlog() {
    const payload = this.createPayload();
    if (!payload.id) {
      delete payload.id;
      this.blogService
        .createBlog(payload, this.coverImage?.file ?? null)
        .subscribe({
          next: (res) => {
            this.router.navigate(['news-admin']);
          },
        });
    } else {
      this.blogService
        .editBlog(payload, this.coverImage?.file ?? null)
        .subscribe({
          next: (res) => {
            this.router.navigate(['news-admin']);
          },
        });
    }
  }

  createPayload(): BlogBE {
    return {
      ...this.blogForm.value,
      categoryId: this.selectedCategory?.key.id ?? null,
      hotTopicId: this.selectedHotTopic?.key.id ?? null,
      combinedTitle: this.title?.value
        .toLowerCase()
        .replaceAll(/([^\w]+|\s+)/g, '-'),
      publishedDate: new Date(),
      authorId: AUTHORS[0].id,
    };
  }
}
