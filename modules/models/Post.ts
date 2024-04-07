import { Model } from "./Model";

export type PostJson = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  content: string;
  updatedAt: string;
};

export type PostConstructorOptions = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  content: string;
  /**
   * @description Unix timestamp
   */
  updatedAt: number;
};

export class Post implements Model<PostJson> {
  readonly id: string;
  readonly title: string;
  readonly thumbnail: string;
  readonly description: string;
  readonly content: string;
  readonly updatedAt: Date;

  constructor(options: PostConstructorOptions) {
    this.id = options.id;
    this.title = options.title;
    this.thumbnail = options.thumbnail;
    this.description = options.description;
    this.content = options.content;
    this.updatedAt = new Date(options.updatedAt);
  }

  toJson(): PostJson {
    return {
      id: this.id,
      title: this.title,
      thumbnail: this.thumbnail,
      description: this.description,
      content: this.content,
      updatedAt: this.updatedAt.toLocaleDateString(),
    };
  }
}
