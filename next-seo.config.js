import { seo } from 'config';

export default {
  titleTemplate: `%s | ${seo.title}`,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: seo.canonical,
    site_name: seo.title,
  },
};
