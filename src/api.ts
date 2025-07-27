export interface IData{
  id: string,
  title: string,
  content: string,
  image_url?: string,
  author_name?: string,
  source_name: string,
  published_at: string,
  category?: string,
  fact_score: number,
  base_trust?: string,
  detailed_trust?: string,
  content_type: string,
  is_subscribed: boolean,
}

export async function fetchNews(){
  const url = 'https://raw.githubusercontent.com/jwpark363/clickbait/refs/heads/main/src/assets/news_list.json';
  const response = await fetch(url);
  const dataset : IData[] = await response.json();
  return dataset;
}
