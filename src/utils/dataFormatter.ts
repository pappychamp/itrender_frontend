import { SiteData, SiteItem, SiteKey } from '../types/trendApi';

const trendDataFormat = (data: SiteData) => {
  const formattedData: { [key in SiteKey]: SiteItem[] } = {
    yahoo: data.yahoo || [],
    youtube: data.youtube || [],
    qiita: data.qiita || [],
    zenn: data.zenn || [],
  };
  // 値が空のキーを削除
  Object.keys(formattedData).forEach((key) => {
    const siteKey = key as SiteKey;
    if (formattedData[siteKey].length === 0) {
      delete formattedData[siteKey];
    }
  });

  return formattedData;
};

export { trendDataFormat };
