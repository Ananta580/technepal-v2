import { Component, Input } from '@angular/core';
import { BlogCardBE } from 'src/app/admin/news-admin-portal/shared/model/blog';
import { AUTHORS } from '../../model/author.constant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() item?: BlogCardBE;

  @Input() size: 'big' | 'small' = 'big';

  authors = AUTHORS;

  getAuthor(id: string) {
    return this.authors.find((x) => x.id === id);
  }
}
