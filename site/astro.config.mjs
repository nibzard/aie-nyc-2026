import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const socialImage = 'https://aie-nyc-2026.vercel.app/og-ai-engineer-nyc-2026.png';
const socialImageAlt = 'AI Engineer NYC 2026: 8 hours of talks. Distilled. A blue wireframe New York skyline on a dark background.';

export default defineConfig({
  site: 'https://aie-nyc-2026.vercel.app',
  integrations: [
    starlight({
      title: 'AI Engineer NYC 2026',
      description:
        'Practical lessons from AI Engineer NYC 2026 for AI engineers: session summaries, evaluation, agent systems, security, and inference costs.',
      favicon: 'favicon.svg',
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: socialImage } },
        { tag: 'meta', attrs: { property: 'og:image:secure_url', content: socialImage } },
        { tag: 'meta', attrs: { property: 'og:image:type', content: 'image/png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1730' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '909' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: socialImageAlt } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: socialImage } },
        { tag: 'meta', attrs: { name: 'twitter:image:alt', content: socialImageAlt } },
      ],
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'youtube',
          label: 'Source VOD on YouTube',
          href: 'https://www.youtube.com/watch?v=akEqiXFo3GM',
        },
      ],
      sidebar: [
        { label: 'Day one digest', link: '/' },
        { label: 'Session summaries', link: '/sessions-index/' },
        { label: 'Talks and panels', collapsed: true, items: [{ autogenerate: { directory: 'sessions' } }] },
        { label: 'Speakers', link: '/speakers/' },
        { label: 'Tags', link: '/tags/' },
        { label: 'Day two digest', link: '/day2/' },
        { label: 'Day two sessions', link: '/day2-sessions/' },
        { label: 'Day two talks and panels', collapsed: true, items: [{ autogenerate: { directory: 'day2' } }] },
        { label: 'Day two speakers', link: '/speakers-day2/' },
        { label: 'Day two tags', link: '/tags-day2/' },
        { label: 'Agenda and stream notes', link: '/stream-notes/' },
        { label: 'About this site', link: '/about/' },
      ],
    }),
  ],
});
