import { List } from '@mantine/core';
import classes from '../../styles/ListContent.module.css';
import { SiteItem } from '../../../../types/trendData';

type props = {
  data: SiteItem[];
};
const ListContent = ({ data }: props) => {
  return (
    <List
      spacing="xl"
      size="md"
      center
      type="ordered"
      // withPadding
      className={`${classes['list']}`}
    >
      {data.slice(0, 10).map((item, index) => {
        return (
          <List.Item key={index}>
            <a
              href={item.url ?? '#'}
              className={`${classes['a']}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          </List.Item>
        );
      })}
    </List>
  );
};
export default ListContent;
