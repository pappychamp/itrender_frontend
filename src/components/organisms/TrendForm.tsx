import { Select } from '@mantine/core';
import { SiteForm } from '../../types/trendform';

type props = {
  site: SiteForm[];
};

const TrendForm = ({ site }: props) => {
  return (
    <>
      <Select
        label="サイト"
        placeholder="Pick value"
        defaultValue="Yahoo"
        data={site}
        size="md"
      />
    </>
  );
};

export default TrendForm;
