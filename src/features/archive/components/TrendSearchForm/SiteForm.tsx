import { Select } from '@mantine/core';
import { SiteFormOption } from '@/src/types/trendForm';
import { useTrend } from '../../hooks/useTrend';
import { SiteKey } from '@/src/types/trendData';

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
        placeholder="サイト選択"
        data={siteOptions}
        size="lg"
        value={state.site ? state.site : null}
        onChange={handleSelectChange}
      />
    </>
  );
};

export default SiteForm;
