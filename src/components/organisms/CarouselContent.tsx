import { Carousel } from '@mantine/carousel';
import CardContent from '../molecules/CardContent.tsx';
import classes from '../../styles/home/CarouselContent.module.css';
import { useState, useEffect } from 'react';
import { SiteItem } from '../../types/trendData.ts';

type props = {
  data: SiteItem[];
};

const CarouselContent = ({ data }: props) => {
  const [slidesToScroll, setSlidesToScroll] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSlidesToScroll(1);
      } else {
        setSlidesToScroll(3);
      }
    };

    window.addEventListener('resize', handleResize);

    // 初期サイズを設定
    handleResize();

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Carousel
        // withIndicators
        height="100%"
        className={classes.carousel}
        controlsOffset="xs"
        slideSize="33.333333%"
        slideGap="xs"
        align="start"
        slidesToScroll={slidesToScroll}
        controlSize={40}
        classNames={{
          controls: `${classes['carousel-controls']}`, // カスタムクラスを適用
          container: `${classes['carousel-container']}`, // カスタムクラスを適用
        }}
      >
        {data.slice(0, 10).map((item, index) => {
          return (
            <Carousel.Slide
              key={index}
              className={`${classes['carousel-slide']}`}
            >
              <CardContent data={item} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
};
export default CarouselContent;
