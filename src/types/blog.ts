/**
 * Blog-related types
 */

export interface BlogPost {
  title: string;
  description: string;
  pubDate: Date;
  topics: string[];
  draft?: boolean;
}

export interface TopicWithCount {
  name: string;
  slug: string;
  description: string;
  icon: string;
  isEmoji: boolean;
  postCount: number;
}
