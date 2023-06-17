export interface ICommentInfo {
  content: string;
  userName: string;
  lastModified: any;
  children: ICommentInfo[];
  votes: number;
}
