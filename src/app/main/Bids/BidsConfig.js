import i18next from 'i18next';

import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import Bids from './Bids';

i18next.addResourceBundle('en', 'bidsPage', en);
i18next.addResourceBundle('tr', 'bidsPage', tr);
i18next.addResourceBundle('ar', 'bidsPage', ar);

const BidsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'bids',
      element: <Bids />,
    },
  ],
};

export default BidsConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const Example = lazy(() => import('./Example'));

const ExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'example',
      element: <Example />,
    },
  ],
};

export default ExampleConfig;
*/
