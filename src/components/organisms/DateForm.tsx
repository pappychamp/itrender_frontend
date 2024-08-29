import { Select } from '@mantine/core';
import { useTrend } from '../../context/TrendContext';

type props = {
  date: string[];
  defaultValue: string;
};
const DateForm = ({ date, defaultValue }: props) => {
  const { state, dispatch } = useTrend();
  const handleSelectChange = (value: string | null) => {
    if (value) {
      dispatch({ type: 'SET_DATE', payload: value });
    } else {
      // null の場合の処理をここに追加する
      dispatch({ type: 'SET_DATE', payload: '' });
    }
  };
  return (
    <>
      <Select
        label="日付"
        placeholder="Pick value"
        data={date}
        size="md"
        value={state.date}
        onChange={handleSelectChange}
      />
    </>
  );
};

export default DateForm;
