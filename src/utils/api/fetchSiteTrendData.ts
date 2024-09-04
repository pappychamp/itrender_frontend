import { getSiteTrendData } from '../../api/dataFetcher';
import { SiteItem, SiteKey } from '../../types/trendApi';

type SetTrendData = (value: SiteItem[]) => void;

const fetchSiteTrendData = async (
  site: SiteKey,
  date: string,
  setTrendData: SetTrendData,
) => {
  try {
    const siteTrendData = await getSiteTrendData(site, date);
    setTrendData(siteTrendData);
  } catch (error) {
    console.log(error);
  }
};

export default fetchSiteTrendData;
