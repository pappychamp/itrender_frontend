import { SiteItem } from '../../../types/trendData';
import CustomAlert from '../../../components/atoms/CustomAlert';
import {
  IconCircleX,
  IconInfoCircle,
  IconCircleCheck,
} from '@tabler/icons-react';
import LoadingCircle from '../../../components/atoms/LoadingCircle';
import CardContent from '../../../components/organisms/CardContent';
import { Grid } from '@mantine/core';
import theme from '../../../constants/theme';
import { useMediaQuery } from '@mantine/hooks';

type props = {
  items: SiteItem[];
  hasSearched: boolean;
  loading: boolean;
  error: Error | null;
};
const TrendContents = ({ items, hasSearched, loading, error }: props) => {
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

  // 初期画面
  if (!hasSearched)
    return (
      <CustomAlert
        icon={<IconCircleCheck />}
        message="過去のトレンド記事を検索できます。"
        color="green"
      />
    );
  // ローディング画面
  if (loading) return <LoadingCircle />;
  // 検索したがデータが無いときの画面
  if (hasSearched && !items.length)
    return (
      <CustomAlert
        icon={<IconInfoCircle />}
        message="一致するものが見つかりませんでした"
        color="orange"
      />
    );
  // エラー画面
  if (error)
    return (
      <CustomAlert
        icon={<IconCircleX />}
        title="エラー"
        message={error.message}
        color="red"
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
