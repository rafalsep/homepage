import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ page = '', title, description }) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    title={title}
    link={[
      { rel: 'canonical', href: `https://rafalsep.com${page}` },
      { rel: 'shortlink', href: `https://rafalsep.com${page}` },
    ]}
    meta={[
      { name: 'robots', content: 'max-image-preview:large' },
      { name: `description`, content: description },
      { property: `og:title`, content: title },
      { property: `og:description`, content: description },
      { property: `og:type`, content: `article` },
      { property: `og:site_name`, content: `Rafal Szczepankiewicz` },
      { property: `og:locale`, content: `en_US` },
      { property: `og:url`, content: `https://rafalsep.com${page}` },
      { name: `twitter:creator`, content: '@rafalsep' },
      { name: `twitter:title`, content: title },
      { name: `twitter:description`, content: description },
      { name: `fb:profile_id`, content: 'rafalsep' },
      { name: `keywords`, content: ['HTML', 'CSS', 'JavaScript', 'React', 'Best Practices', 'Frontend', 'Web'] },
    ]}
  />
);

export default Seo;
