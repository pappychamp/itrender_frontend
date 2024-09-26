import { SiteData, SiteItem, SiteKey } from '@/src/types/trendData';

// home画面で上から表示したい順番
const trendDataFormat = (data: SiteData) => {
  const formattedData: { [key in SiteKey]: SiteItem[] } = {
    yahoo: data.yahoo || [],
    youtube: data.youtube || [],
    qiita: data.qiita || [],
    zenn: data.zenn || [],
    techplus: data.techplus || [],
    thinkit: data.thinkit || [],
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
