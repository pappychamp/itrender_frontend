import { Table } from '@mantine/core';
import { SiteItem } from '../../types/trendApi';
import CustomBadge from '../atoms/CustomBadge';

type props = {
  items: SiteItem[];
};
const TrendContents = ({ items }: props) => {
  const rows = items.map((item) => (
    <Table.Tr key={item.ranking}>
      <Table.Td>{item.ranking}</Table.Td>
      <Table.Td>
        {item.url ? (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        ) : (
          <>{item.title}</>
        )}
      </Table.Td>
      <Table.Td>
        {item.tags.map((tag, index) => {
          return <CustomBadge name={tag.name} key={index} size="xs" />;
        })}
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Table stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th style={{ width: '10%' }}></Table.Th>
          <Table.Th style={{ width: '60%' }}>タイトル</Table.Th>
          <Table.Th style={{ width: '30%' }}>タグ</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
export default TrendContents;
