import { Select } from '@mantine/core';
import { SiteFormOption } from '../../types/trendform';
import { useTrend } from '../../context/TrendContext';
type props = {
  site: SiteFormOption[];
};

const SiteForm = ({ site }: props) => {
  const { state, dispatch } = useTrend();

  const handleSelectChange = (value: string | null) => {
    if (value) {
      dispatch({ type: 'SET_SITE', payload: value });
    } else {
      // null の場合の処理をここに追加する
      dispatch({ type: 'SET_SITE', payload: '' });
    }
  };
  return (
    <>
      <Select
        label="サイト"
        placeholder="Pick value"
        data={site}
        size="md"
        value={state.site}
        onChange={handleSelectChange}
      />
    </>
  );
};

export default SiteForm;
