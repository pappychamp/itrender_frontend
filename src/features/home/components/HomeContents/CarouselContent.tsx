import { Carousel } from '@mantine/carousel';
import classes from '../../styles/CarouselContent.module.css';
import { SiteItem } from '@/src/types/trendData.ts';
import theme from '@/src/constants/theme.ts';
import { useMediaQuery } from '@mantine/hooks';
import CardContent from '@/src/components/organisms/CardContent.tsx';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

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
        slideSize={mobile ? '100%' : '50%'}
        slideGap="xs"
        align="start"
        draggable={mobile}
        dragFree
        slidesToScroll={2}
        withControls={!mobile}
        controlSize={40}
        nextControlIcon={
          <IconChevronRight style={{ width: '40px', height: '40px' }} />
        }
        previousControlIcon={
          <IconChevronLeft style={{ width: '40px', height: '40px' }} />
        }
        classNames={{
          controls: `${classes['carousel-controls']}`, // カスタムクラスを適用
          container: `${classes['carousel-container']}`, // カスタムクラスを適用
          control: `${classes['carousel-control']}`, // カスタムクラスを適用
          viewport: `${classes['carousel-viewport']}`, // カスタムクラスを適用
        }}
        data-testid="carousel"
      >
        {data.slice(0, 10).map((item, index) => {
          return (
            <Carousel.Slide key={index} data-testid="carousel-slide">
              <CardContent data={item} mobile={mobile} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
};
export default CarouselContent;
