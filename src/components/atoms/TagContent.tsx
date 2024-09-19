import { Tag } from '../../types/trendData';
import { Text } from '@mantine/core';

type props = {
  tags: Tag[];
};

const TagContent = ({ tags }: props) => {
  const formattedTags = tags.map((tag) => `#${tag.name}`).join(', ');
  return (
    <>
      <Text size="sm" lineClamp={1}>
        {formattedTags}
      </Text>
    </>
  );
};

export default TagContent;
