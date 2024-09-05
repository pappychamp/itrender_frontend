import { SiteKey } from '../types/trendApi';

// 状態の型定義
export type State = {
  date: string;
  site: SiteKey | '';
};

// アクションの型定義
export type Action =
  | { type: 'SET_DATE'; payload: string }
  | { type: 'SET_SITE'; payload: SiteKey | '' };

// 初期状態
export const initialState: State = {
  date: '',
  site: '',
};

// Reducer 関数
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'SET_SITE':
      return { ...state, site: action.payload };
    default:
      return state;
  }
};
