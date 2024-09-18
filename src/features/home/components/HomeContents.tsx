import classes from '../styles/HomeContents.module.css';
import { Box, Text } from '@mantine/core';
import CarouselContent from './HomeContents/CarouselContent.tsx';
import YoutubeContent from './HomeContents/YoutubeContent.tsx';
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
            <Box key={index} className={`${classes['main-box']}`}>
              <Text className={`${classes['site-text']}`}>
                {replaceText(siteKey)}
              </Text>
              <YoutubeContent data={value} />
            </Box>
          );
        }
        return (
          <Box key={index} className={`${classes['main-box']}`}>
            <Text className={`${classes['site-text']}`}>
              {replaceText(siteKey)}
            </Text>
            <CarouselContent data={value} />
          </Box>
        );
      })}
    </>
  );
};
export default HomeContents;
