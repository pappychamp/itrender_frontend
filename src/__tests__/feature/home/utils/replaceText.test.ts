import replaceText from '../../../../utils/format/replaceText';
import { SiteKey } from '../../../../types/trendData';

describe('replaceText 関数のテスト', () => {
  it('該当するサイト名は、正しくフォーマットされること', () => {
    const replaceYahoo = replaceText('yahoo');
    expect(replaceYahoo).toEqual('Yahoo');
    const replaceYoutube = replaceText('youtube');
    expect(replaceYoutube).toEqual('Youtube');
    const replaceQiita = replaceText('qiita');
    expect(replaceQiita).toEqual('Qiita');
    const replaceZenn = replaceText('zenn');
    expect(replaceZenn).toEqual('Zenn');
    const replaceTechPlus = replaceText('techplus');
    expect(replaceTechPlus).toEqual('TechPlus');
    const replaceThinkIT = replaceText('thinkit');
    expect(replaceThinkIT).toEqual('ThinkIT');
  });
  it('該当しないサイト名は、元のテキストがそのまま返されること', () => {
    const unknownSite = replaceText('unknownSite' as SiteKey); // 例外的な値を渡す
    expect(unknownSite).toEqual('unknownSite');
  });
});
