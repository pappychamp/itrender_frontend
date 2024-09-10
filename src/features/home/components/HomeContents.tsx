import classes from '../styles/Contents.module.css';
import { Container, Text } from '@mantine/core';
import CarouselContent from '../../../components/organisms/CarouselContent.tsx';
import YoutubeContent from '../../../components/organisms/YoutubeContent.tsx';
import ListContent from '../../../components/organisms/ListContent.tsx';
import replaceText from '../utils/format/replaceText.ts';
import { SiteData, SiteItem, SiteKey } from '../../../types/trendData.ts';
import LoadingCircle from '../../../components/atoms/LoadingCircle.tsx';
import CustomAlert from '../../../components/atoms/CustomAlert.tsx';
import { IconCircleX } from '@tabler/icons-react';

type props = {
  data: SiteData | null;
  loading: boolean;
  error: Error | null;
};

const HomeContents = ({ data, loading, error }: props) => {
  if (loading) return <LoadingCircle />;
  if (error || !data)
    return (
      <CustomAlert
        icon={<IconCircleX />}
        title="エラー"
        message={error ? error.message : 'データがありません'}
        color="red"
      />
    );
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
