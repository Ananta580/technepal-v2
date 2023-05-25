import { CategoryBE } from './category';

export interface BlogBE {
  id?: string;
  title: string;
  combinedTitle: string;
  subTitle: string;
  coverImage: string;
  description: string;
  authorId: string;
  publishedDate: string;
  viewCount: number;
  categoryId: string;
  category?: CategoryBE;
}
