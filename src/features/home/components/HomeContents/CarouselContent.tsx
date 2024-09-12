import { Carousel } from '@mantine/carousel';
import CardContent from './CardContent.tsx';
import classes from '../../styles/CarouselContent.module.css';
import { SiteItem } from '../../../../types/trendData.ts';
import theme from '../../../../constants/theme.ts';
import { useMediaQuery } from '@mantine/hooks';

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
        slideSize={mobile ? '50%' : '20%'}
        slideGap="xs"
        align="start"
        slidesToScroll={mobile ? 2 : 5}
        controlSize={40}
        classNames={{
          controls: `${classes['carousel-controls']}`, // カスタムクラスを適用
          container: `${classes['carousel-container']}`, // カスタムクラスを適用
        }}
      >
        {data.slice(0, 10).map((item, index) => {
          return (
            <Carousel.Slide key={index}>
              <CardContent data={item} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
};
export default CarouselContent;
