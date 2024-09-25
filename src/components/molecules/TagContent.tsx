import { Tag } from '../../types/trendData';
import { Text, HoverCard, ScrollArea } from '@mantine/core';
import classes from '../../styles/TagContent.module.css';

type props = {
  tags: Tag[];
};

const TagContent = ({ tags }: props) => {
  const formattedTags = tags.map((tag) => `#${tag.name}`).join(', ');
  return (
    <>
      <HoverCard position="top" width={200}>
        <HoverCard.Target>
          <Text size="sm" lineClamp={1}>
            {formattedTags}
          </Text>
        </HoverCard.Target>
        <HoverCard.Dropdown className={`${classes['hover-card']}`}>
          <ScrollArea.Autosize offsetScrollbars type="hover" mah={200}>
            {tags.map((tag, index) => (
              <Text key={index} c="white" size="sm">
                #{tag.name}
              </Text>
            ))}
          </ScrollArea.Autosize>
        </HoverCard.Dropdown>
      </HoverCard>
    </>
  );
};

export default TagContent;
