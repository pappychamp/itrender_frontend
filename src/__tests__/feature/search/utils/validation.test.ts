import { validateInput } from '@/src/features/search/utils/validation/validation';

describe('trendDataFormat 関数のテスト', () => {
  it('正常なinputがされること', () => {
    const result = validateInput('test', [], 3);
    expect(result).toBeNull();
  });
  it('空の単語がinputの場合「単語を検索してください」と返されること', () => {
    const result = validateInput(' ', [], 3);
    expect(result).toEqual('単語を検索してください');
  });
  it('重複する単語がinputの場合「すでにその単語は検索されています」と返されること', () => {
    const result = validateInput('test', ['Test'], 3);
    expect(result).toEqual('すでにその単語は検索されています');
  });
  it('単語数の上限を超えたがinputの場合「単語以上は検索できません」と返されること', () => {
    const maxWords = 3;
    const result = validateInput(
      'test4',
      ['test1', 'test2', 'test3'],
      maxWords,
    );
    expect(result).toEqual(`${maxWords}単語以上は検索できません`);
  });
});
