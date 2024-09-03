import { getSiteTrendData } from '../../api/dataFetcher';
import { SiteItem } from '../../types/trendApi';

type SetTrendData = (value: SiteItem[]) => void;

const fetchSiteTrendData = async (
  site: string,
  date: string,
  setTrendData: SetTrendData,
) => {
  try {
    const siteTrendData = await getSiteTrendData(site.toLowerCase(), date);
    setTrendData(siteTrendData);
  } catch (error) {
    console.log(error);
  }
};

export default fetchSiteTrendData;
