import { Table } from '@mantine/core';
import { SiteItem } from '../../../types/trendApi';
import CustomBadge from '../../../components/atoms/CustomBadge';
import CustomAlert from '../../../components/atoms/CustomAlert';
import { IconCircleX, IconInfoCircle } from '@tabler/icons-react';
import LoadingCircle from '../../../components/atoms/LoadingCircle';
type props = {
  items: SiteItem[];
  loading: boolean;
  error: Error | null;
};
const TrendContents = ({ items, loading, error }: props) => {
  if (loading) return <LoadingCircle />;
  if (error)
    return (
      <CustomAlert
        icon={<IconCircleX />}
        title="エラー"
        message={error.message}
        color="red"
      />
    );
  if (!items.length)
    return (
      <CustomAlert
        icon={<IconInfoCircle />}
        title="一致するものが見つかりませんでした"
        message="探しているものが見つかりません。サイトまたは日付を調整してみてください。"
        color="orange"
      />
    );
  return (
    <Table stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th style={{ width: '10%' }}></Table.Th>
          <Table.Th style={{ width: '60%' }}>タイトル</Table.Th>
          <Table.Th style={{ width: '30%' }}>タグ</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {items.map((item) => (
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
        ))}
      </Table.Tbody>
    </Table>
  );
};
export default TrendContents;
