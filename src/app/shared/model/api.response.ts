export interface ApiResonse<T> {
  statusCode: number;
  message: string;
  detailMessage: string;
  data: T;
}
