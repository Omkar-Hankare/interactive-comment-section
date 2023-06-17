export interface ICommentInfo {
  content: string;
  userName: string;
  lastModified: any;
  children: any[];
  votes: number;
  id: any;
  user: {
    image: {
      png: string;
      webp: string;
    };
  };
}
