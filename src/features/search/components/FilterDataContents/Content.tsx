import { Grid } from '@mantine/core';
import CardContent from '@/src/components/organisms/CardContent';
import { SiteItem } from '@/src/types/trendData';

type props = {
  data: SiteItem[];
  mobile: boolean | undefined;
};
const Content = ({ data, mobile }: props) => {
  return (
    <>
      <Grid>
        {data.map((item, index) => {
          return (
            <Grid.Col
              key={index}
              span={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
            >
              <CardContent data={item} mobile={mobile} isRanking={false} />
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};
export default Content;
