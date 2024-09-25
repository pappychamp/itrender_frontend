// アクションの型定義
export type Action =
  | { type: 'ADD_WORD'; payload: string }
  | { type: 'REMOVE_WORD'; payload: string }
  | { type: 'SET_PAGE'; payload: number }; // ページを設定するアクション
// 初期状態
export const initialState = {
  words: [] as string[], // 単語のリスト
  page: 1, // 初期ページ番号
};
// Reducer 関数
export const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return { ...state, words: [...state.words, action.payload] };
    case 'REMOVE_WORD':
      return {
        ...state,
        words: state.words.filter((word) => word !== action.payload),
      };
    case 'SET_PAGE':
      return { ...state, page: action.payload }; // ページを指定する
    default:
      return state;
  }
};
