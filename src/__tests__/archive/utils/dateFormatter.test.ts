import { getPastDates } from '../../../features/archive/utils/date/dateFormatter';

describe('replaceText 関数のテスト', () => {
  beforeEach(() => {
    // 日時のモックを有効化
    vi.useFakeTimers();
  });

  afterEach(() => {
    // 実際の日時に戻す
    vi.useRealTimers();
  });
  it('過去の日付が正しくフォーマットされて返されること', () => {
    vi.setSystemTime(new Date('2024/01/01 00:00:00'));
    const result = getPastDates(0, 2);
    // 固定された日付を基準に計算
    expect(result).toEqual(['2024-01-01', '2023-12-31']);
  });
});
