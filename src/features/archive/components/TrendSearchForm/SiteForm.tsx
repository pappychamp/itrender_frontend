import { Select } from '@mantine/core';
import { SiteFormOption } from '../../../../types/trendForm';
import { useTrend } from '../../context/TrendContext';
import { SiteKey } from '../../../../types/trendData';

type SiteOptions = {
  value: SiteKey;
  label: SiteFormOption;
};
type props = {
  siteOptions: SiteOptions[];
};

const SiteForm = ({ siteOptions }: props) => {
  const { state, dispatch } = useTrend();

  const handleSelectChange = (_value: string | null) => {
    if (_value) {
      const payloadValue = _value as SiteKey;
      dispatch({ type: 'SET_SITE', payload: payloadValue });
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
        data={siteOptions}
        size="md"
        value={state.site ? state.site : null}
        onChange={handleSelectChange}
      />
    </>
  );
};

export default SiteForm;
