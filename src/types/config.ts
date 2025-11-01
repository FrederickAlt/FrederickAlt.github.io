/**
 * Configuration types
 */

export interface TopicConfig {
  name: string;
  slug: string;
  description: string;
  icon: string;
  isEmoji: boolean;
}

export interface SiteMetadata {
  name: string;
  author: string;
  url: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}
