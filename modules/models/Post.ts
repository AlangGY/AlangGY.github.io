import { Model } from "./Model";

export type PostJson = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  /**
   * @description 포스트의 태그 목록
   */
  tags: string[];
  /**
   * @description 가독성 점수 min 0 max 100
   */
  readability: number;
  /**
   * @description 난이도 점수 min 0 max 100
   */
  difficulty: number;
  updatedAt: string;
};

export type PostConstructorOptions = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  /**
   * @description 포스트의 태그 목록
   */
  tags: string[];
  /**
   * @description 가독성 점수 min 0 max 100
   */
  readability: number;
  /**
   * @description 난이도 점수 min 0 max 100
   */
  difficulty: number;
  updatedAt: number;
};

export class Post implements Model<PostJson> {
  readonly id: string;
  readonly title: string;
  readonly thumbnail: string;
  readonly description: string;
  /**
   * @description 포스트의 태그 목록
   */
  readonly tags: string[];
  /**
   * @description 가독성 점수 min 0 max 100
   */
  readonly readability: number;
  /**
   * @description 난이도 점수 min 0 max 100
   */
  readonly difficulty: number;
  readonly updatedAt: Date;

  constructor(options: PostConstructorOptions) {
    this.id = options.id;
    this.title = options.title;
    this.thumbnail = options.thumbnail;
    this.description = options.description;
    this.tags = options.tags;
    this.readability = options.readability;
    this.difficulty = options.difficulty;
    this.updatedAt = new Date(options.updatedAt);
  }

  toJson(): PostJson {
    return {
      id: this.id,
      title: this.title,
      thumbnail: this.thumbnail,
      description: this.description,
      tags: this.tags,
      readability: this.readability,
      difficulty: this.difficulty,
      updatedAt: this.updatedAt.toLocaleDateString(),
    };
  }
}
