import { siteOptions } from '../../../../constants/selectOptions';
import { SiteKey } from '../../../../types/trendData';

const replaceText = (text: SiteKey): string => {
  // 変換ルールを定義
  const replacements = siteOptions.reduce(
    (acc, option) => {
      acc[option.value] = option.label;
      return acc;
    },
    {} as Record<string, string>,
  );

  // 変換処理
  return replacements[text] || text;
};

export default replaceText;
