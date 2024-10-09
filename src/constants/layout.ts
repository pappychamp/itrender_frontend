import { IconHome, IconArchive, IconSearch } from '@tabler/icons-react';

type HeaderTab = {
  name: string;
  path: string;
  icon: React.ElementType;
};

const headerTabs: HeaderTab[] = [
  { name: 'ホーム', path: '/', icon: IconHome },
  { name: 'アーカイブ', path: '/archive', icon: IconArchive },
  { name: '調べる', path: '/search', icon: IconSearch },
];

export { headerTabs };
