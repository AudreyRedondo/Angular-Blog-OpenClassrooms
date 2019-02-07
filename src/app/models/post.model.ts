export class Post {
  
  public loveIts: number;
  public created_at: Date;

  constructor(public title: string, public content: string)
  {
    this.created_at = new Date();
    this.loveIts = 0;
  }

}
