import { Pagination } from '@mantine/core';
import { useFilterWords } from '../../context/FilterWordsContext';
type props = {
  activePage: number;
  totalPage: number;
  size: string;
  siblings: number;
  className?: string; // カスタムCSSクラス
};

const CustomPagination = ({
  totalPage,
  activePage,
  size,
  siblings,
  className,
}: props) => {
  const { dispatch } = useFilterWords();
  const handleChange = (_value: number) => {
    dispatch({ type: 'SET_PAGE', payload: _value });
  };
  return (
    <>
      <Pagination
        size={size}
        total={totalPage}
        boundaries={1}
        siblings={siblings}
        value={activePage}
        onChange={handleChange}
        className={className}
      />
    </>
  );
};
export default CustomPagination;
