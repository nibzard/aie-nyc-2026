import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const socialImage = 'https://aie-nyc-2026.vercel.app/og-ai-engineer-nyc-2026-two-days.png';
const socialImageAlt = 'AI Engineer NYC 2026: Two days of talks. Distilled. A blue wireframe New York skyline on a dark background.';

export default defineConfig({
  site: 'https://aie-nyc-2026.vercel.app',
  integrations: [
    starlight({
      title: 'AI Engineer NYC 2026',
      description:
        'An engineering field guide to AI Engineer NYC 2026: compare approaches across both days, understand the limits, and try experiments on your workload.',
      favicon: 'favicon.svg',
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: socialImage } },
        { tag: 'meta', attrs: { property: 'og:image:secure_url', content: socialImage } },
        { tag: 'meta', attrs: { property: 'og:image:type', content: 'image/png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1731' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '909' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: socialImageAlt } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: socialImage } },
        { tag: 'meta', attrs: { name: 'twitter:image:alt', content: socialImageAlt } },
      ],
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'youtube',
          label: 'Day 1 recording on YouTube',
          href: 'https://www.youtube.com/watch?v=akEqiXFo3GM',
        },
        {
          icon: 'youtube',
          label: 'Day 2 recording on YouTube',
          href: 'https://www.youtube.com/watch?v=jiUC6IUMdvc',
        },
      ],
      sidebar: [
        { label: 'Engineering field guide', link: '/' },
        { label: 'Topic guides', collapsed: true, items: [{ autogenerate: { directory: 'guides' } }] },
        { label: 'Explore topics and evidence', link: '/topics/' },
        { label: 'All session summaries', link: '/sessions-index/' },
        {
          label: 'Day 1 · October 13',
          items: [
            { label: 'Day 1 digest', link: '/day1/' },
            { label: 'Day 1 session summaries', link: '/day1-sessions/' },
            { label: 'Day 1 talks and panels', collapsed: true, items: [{ autogenerate: { directory: 'sessions' } }] },
          ],
        },
        {
          label: 'Day 2 · October 14',
          items: [
            { label: 'Day 2 digest', link: '/day2/' },
            { label: 'Day 2 session summaries', link: '/day2-sessions/' },
            { label: 'Day 2 talks and panels', collapsed: true, items: [{ autogenerate: { directory: 'day2' } }] },
          ],
        },
        { label: 'Speakers · Both days', link: '/speakers/' },
        { label: 'Tags · Both days', link: '/tags/' },
        { label: 'Figure library', link: '/figures/' },
        { label: 'Agenda and stream notes', link: '/stream-notes/' },
        { label: 'About this site', link: '/about/' },
      ],
    }),
  ],
});
