import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);


const navigationConfig = [
  {
    id: 'example-component',
    title: 'Example',
    translate: 'EXAMPLE',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'example',
  },
  {
    id: 'bids-component',
    title: 'Bids',
    translate: 'Bids',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'bids',
  },
  {
    id: 'bidsId-component',
    title: 'bidsId',
    translate: 'bidsId',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'bidsid',
  },
];

export default navigationConfig;
