import { SiteKey } from '../types/trendData';
import { SiteFormOption } from '../types/trendForm';

type SiteOptions = {
  value: SiteKey;
  label: SiteFormOption;
};

const siteOptions: SiteOptions[] = [
  // { value: 'yahoo', label: 'Yahoo' },
  { value: 'youtube', label: 'Youtube' },
  { value: 'qiita', label: 'Qiita' },
  { value: 'zenn', label: 'Zenn' },
  { value: 'techplus', label: 'TechPlus' },
  { value: 'thinkit', label: 'ThinkIT' },
];

export { siteOptions };
