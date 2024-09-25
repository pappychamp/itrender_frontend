import { SiteItem } from '../../../types/trendData';

type ApiData = {
  items: SiteItem[];
  total: number;
  page: number;
  size: number;
  pages: number;
};

export type { ApiData };
