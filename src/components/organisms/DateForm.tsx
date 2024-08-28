import { Select } from '@mantine/core';

type props = {
  date: string[];
  defaultValue: string;
};
const DateForm = ({ date, defaultValue }: props) => {
  return (
    <>
      <Select
        label="日付"
        placeholder="Pick value"
        defaultValue={defaultValue}
        data={date}
        size="md"
      />
    </>
  );
};

export default DateForm;
