import type { Tag } from "./tag.interface";

export interface Project {
  name: string;
  description: string[];
  tags?: Tag[];
  imageUrl?: string;
  repositoryUrl?: string;
  demoUrl?: string;
}
