import { SiteKey } from '../types/trendApi';
import { SiteFormOption } from '../types/trendform';

type SiteOptions = {
  value: SiteKey;
  label: SiteFormOption;
};

const siteOptions: SiteOptions[] = [
  { value: 'yahoo', label: 'Yahoo' },
  { value: 'youtube', label: 'Youtube' },
  { value: 'qiita', label: 'Qiita' },
  { value: 'zenn', label: 'Zenn' },
];

export { siteOptions };
