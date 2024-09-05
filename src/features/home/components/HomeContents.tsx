import classes from '../styles/Contents.module.css';
import { Container, Text } from '@mantine/core';
import CarouselContent from '../../../components/organisms/CarouselContent.tsx';
import YoutubeContent from '../../../components/organisms/YoutubeContent.tsx';
import ListContent from '../../../components/organisms/ListContent.tsx';
import replaceText from '../../../utils/format/replaceText.ts';
import { SiteData, SiteItem, SiteKey } from '../../../types/trendApi.ts';

type props = {
  data: SiteData;
};

const HomeContents = ({ data }: props) => {
  return (
    <>
      {Object.entries(data).map(([key, value]: [string, SiteItem[]], index) => {
        const siteKey = key as SiteKey;
        if (siteKey === 'youtube') {
          return (
            <div key={index} className={`${classes['main-container']}`}>
              <Container className={`${classes['site-text-container']}`}>
                <Text className={`${classes['site-text']}`}>
                  {replaceText(siteKey)}
                </Text>
              </Container>
              <YoutubeContent data={value} />
            </div>
          );
        } else if (siteKey === 'yahoo') {
          return (
            <div key={index} className={`${classes['main-container']}`}>
              <Container className={`${classes['site-text-container']}`}>
                <Text className={`${classes['site-text']}`}>
                  {replaceText(siteKey)}
                </Text>
              </Container>
              <ListContent data={value} />
            </div>
          );
        }
        return (
          <div key={index} className={`${classes['main-container']}`}>
            <Container className={`${classes['site-text-container']}`}>
              <Text className={`${classes['site-text']}`}>
                {replaceText(siteKey)}
              </Text>
            </Container>
            <CarouselContent data={value} />
          </div>
        );
      })}
    </>
  );
};
export default HomeContents;