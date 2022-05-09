import React from 'react';
import { Helmet } from 'react-helmet';
import './src/styles/global.css';

const wrapPageElement = ({ element }) => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Freehand&display=swap&text=RS" />
      <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" />
      <link href="https://fonts.googleapis.com/css2?family=Freehand&display=swap&text=RS" rel="stylesheet" media="print" onLoad="this.media='all'" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" media="print" onLoad="this.media='all'" />
    </Helmet>
    {element}
  </>
);

export { wrapPageElement };
