import { SiteKey } from '../types/trendApi';
const replaceText = (text: SiteKey): string => {
  // 変換ルールを定義
  const replacements = {
    qiita: 'Qiita',
    youtube: 'Youtube',
    zenn: 'Zenn',
    yahoo: 'Yahoo',
  };

  // 変換処理
  return replacements[text] || text;
};

export default replaceText;
