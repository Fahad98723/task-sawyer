import i18next from 'i18next';

import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import BidsId from './BidsId';

i18next.addResourceBundle('en', 'bidsIdPage', en);
i18next.addResourceBundle('tr', 'bidsIdPage', tr);
i18next.addResourceBundle('ar', 'bidsIdPage', ar);

const BidsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'bidsId',
      element: <BidsId />,
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
