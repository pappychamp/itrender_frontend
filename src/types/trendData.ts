type SiteKey = 'qiita' | 'youtube' | 'zenn' | 'techplus' | 'thinkit';
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
  image_url: string | null;
  tags: Tag[] | [];
  site: Site;
};

type SiteData = {
  [key in SiteKey]?: SiteItem[];
};

export type { SiteData, SiteItem, SiteKey, Tag };
