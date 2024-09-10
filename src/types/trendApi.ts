type SiteKey = 'qiita' | 'youtube' | 'zenn' | 'yahoo';
type Site = {
  name: SiteKey;
  content: string;
};
type Tag = {
  name: string;
};

type SiteItem = {
  title: string;
  ranking: number | null;
  category: string | null;
  published_at: string;
  url: string | null;
  embed_html: string | null;
  tags: Tag[] | [];
  site: Site;
};

type SiteData = {
  [key in SiteKey]?: SiteItem[];
};

type ApiData = {
  [key: string]: SiteData;
};

export type { ApiData, SiteData, SiteItem, SiteKey };
