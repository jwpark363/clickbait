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
  summary_content: string,
}

export async function fetchNewsList(){
  const url = 'https://raw.githubusercontent.com/jwpark363/clickbait/refs/heads/main/src/assets/news_list.json';
  const response = await fetch(url);
  const dataset : IData[] = await response.json();
  return dataset;
}

export async function fetchNews(id:string){
  const url = 'https://raw.githubusercontent.com/jwpark363/clickbait/refs/heads/main/src/assets/news_list.json';
  const response = await fetch(url);
  const dataset : IData[] = await response.json();
  const news = dataset.filter(data => data.id === id);
  return news.length >= 1 ? news[0] : undefined
}