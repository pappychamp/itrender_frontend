import { Carousel } from '@mantine/carousel';
import classes from '../../styles/CarouselContent.module.css';
import { SiteItem } from '../../../../types/trendData.ts';
import theme from '../../../../constants/theme.ts';
import { useMediaQuery } from '@mantine/hooks';
import CardContent from '../../../../components/molecules/CardContent.tsx';

type props = {
  data: SiteItem[];
};

const CarouselContent = ({ data }: props) => {
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
  return (
    <>
      <Carousel
        // withIndicators
        height="100%"
        className={classes.carousel}
        controlsOffset="xs"
        slideSize={mobile ? '100%' : '50%'}
        slideGap="xs"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        controlSize={40}
        classNames={{
          controls: `${classes['carousel-controls']}`, // カスタムクラスを適用
          container: `${classes['carousel-container']}`, // カスタムクラスを適用
        }}
      >
        {data.slice(0, 10).map((item, index) => {
          return (
            <Carousel.Slide key={index}>
              <CardContent data={item} mobile={mobile} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
};
export default CarouselContent;
