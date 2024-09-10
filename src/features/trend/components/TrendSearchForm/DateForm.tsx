import { Select } from '@mantine/core';
import { useTrend } from '../../context/TrendContext';

type props = {
  date: string[];
};
const DateForm = ({ date }: props) => {
  const { state, dispatch } = useTrend();
  const handleSelectChange = (_value: string | null) => {
    if (_value) {
      dispatch({ type: 'SET_DATE', payload: _value });
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
        value={state.date ? state.date : null}
        onChange={handleSelectChange}
      />
    </>
  );
};

export default DateForm;
