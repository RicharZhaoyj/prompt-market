export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  sales: number;
  author_id: string;
  author_name: string;
  image_url: string;
  tags?: string[];
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  prompt_count: number;
  description: string;
}
