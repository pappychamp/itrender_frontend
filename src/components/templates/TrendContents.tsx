import { Table } from '@mantine/core';

const elements = [
  { position: 6, symbol: 'C', name: 'Carbon' },
  { position: 7, symbol: 'N', name: 'Nitrogen' },
  { position: 39, symbol: 'Y', name: 'Yttrium' },
  { position: 56, symbol: 'Ba', name: 'Barium' },
  { position: 58, symbol: 'Ce', name: 'Cerium' },
];

const TrendContents = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
    </Table.Tr>
  ));
  return (
    <Table stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th style={{ width: '10%' }}>ランキング</Table.Th>
          <Table.Th style={{ width: '45%' }}>タイトル</Table.Th>
          <Table.Th style={{ width: '45%' }}>タグ</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};
export default TrendContents;
