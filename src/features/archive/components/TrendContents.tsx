import { SiteItem } from '../../../types/trendData';
import CustomAlert from '../../../components/atoms/CustomAlert';
import { IconCircleX, IconInfoCircle } from '@tabler/icons-react';
import LoadingCircle from '../../../components/atoms/LoadingCircle';
import CardContent from '../../../components/molecules/CardContent';
import { Grid } from '@mantine/core';
import theme from '../../../constants/theme';
import { useMediaQuery } from '@mantine/hooks';

type props = {
  items: SiteItem[];
  loading: boolean;
  error: Error | null;
};
const TrendContents = ({ items, loading, error }: props) => {
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

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
    <>
      <Grid>
        {items.map((item, index) => {
          return (
            <Grid.Col
              key={index}
              span={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            >
              <CardContent data={item} mobile={mobile} />
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};
export default TrendContents;
