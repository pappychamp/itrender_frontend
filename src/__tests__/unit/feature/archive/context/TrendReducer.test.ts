import {
  reducer,
  Action,
  State,
} from '@/src/features/archive/context/TrendReducer';
describe('reducerのテスト', () => {
  it('SET_DATEで日付が更新されること', () => {
    const state: State = { date: '', site: '' };
    const action: Action = { type: 'SET_DATE', payload: '2024-01-01' };
    const newState = reducer(state, action);
    expect(newState.date).toEqual('2024-01-01');
  });
  it('SET_SITEでサイトが更新されること', () => {
    const state: State = { date: '', site: '' };
    const action: Action = { type: 'SET_SITE', payload: 'qiita' };
    const newState = reducer(state, action);
    expect(newState.site).toEqual('qiita');
  });
});
