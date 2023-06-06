import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotTopicBE } from 'src/app/news-admin-portal/shared/model/hot-topic';
import { HotTopicService } from 'src/app/news-admin-portal/shared/services/hot-topic.service';
import { ApiResonse } from 'src/app/shared/model/api.response';

@Component({
  selector: 'app-news-hot-topic-create',
  templateUrl: './news-hot-topic-create.component.html',
})
export class NewsHotTopicCreateComponent implements OnChanges {
  @Output() onCancelClicked = new EventEmitter<boolean>();
  @Output() onSaved = new EventEmitter<boolean>();

  @Input() hotTopic: HotTopicBE | null = null;

  hotTopicForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private hotTopicService: HotTopicService
  ) {
    this.hotTopicForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      code: ['', Validators.required],
      priority: [0, Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hotTopic']) {
      if (this.hotTopic) {
        this.hotTopicForm.patchValue(this.hotTopic);
      }
    }
  }

  saveHotTopic() {
    const { value } = this.hotTopicForm;
    if (!value.id) {
      delete value.id;
    }
    if (this.hotTopic) {
      this.hotTopicService.editHotTopic(value).subscribe({
        next: (res: ApiResonse<HotTopicBE>) => {
          this.onSaved.emit();
          this.cancel();
        },
      });
    } else {
      this.hotTopicService.createHotTopic(value).subscribe({
        next: (res: ApiResonse<HotTopicBE>) => {
          this.onSaved.emit();
          this.cancel();
        },
      });
    }
  }

  cancel() {
    this.hotTopic = null;
    this.onCancelClicked.emit();
  }
}
