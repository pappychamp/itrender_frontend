import { SiteKey } from '@/src/types/trendData';

const siteItemData = {
  title: 'test',
  ranking: 1,
  category: 'test',
  published_at: '2024-01-01',
  url: 'https://test.com',
  embed_html: '<>test</>',
  image_url: 'https://test-image.com',
  tags: [{ name: 'test1' }, { name: 'test2' }],
  site: { name: 'qiita' as SiteKey, content: 'article' },
};

export { siteItemData };
