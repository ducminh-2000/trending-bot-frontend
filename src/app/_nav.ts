import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Treanding',
  },
  {
    name: 'Coin',
    url: '/coin',
    children: [
      {
        name: '1. Coin',
        url: '',
      },
      {
        name: '2. Trending',
        url: '/coin/trending',
      },
    ]
  },
];
