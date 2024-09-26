import {
  reducer,
  Action,
} from '@/src/features/search/context/FilterWordsReducer';
describe('reducerのテスト', () => {
  it('ADD_WORDで単語が追加されること', () => {
    const state = { words: [], page: 1 };
    const action: Action = { type: 'ADD_WORD', payload: 'test' };
    const newState = reducer(state, action);
    expect(newState.words).toEqual(['test']);
  });
  it('REMOVE_WORDで単語が削除されること', () => {
    const state = { words: ['test'], page: 1 };
    const action: Action = { type: 'REMOVE_WORD', payload: 'test' };
    const newState = reducer(state, action);
    expect(newState.words).toEqual([]);
  });
  it('SET_PAGEでページが更新されること', () => {
    const state = { words: [], page: 1 };
    const action: Action = { type: 'SET_PAGE', payload: 2 };
    const newState = reducer(state, action);
    expect(newState.page).toEqual(2);
  });
});
