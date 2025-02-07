import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Sākums',
      links: [
        {
          text: 'Priekšrocības',
          href: getPermalink('/#features'),
        },
        {
          text: 'Atsauksmes',
          href: getPermalink('/#reviews'),
        },
        {
          text: 'Cenas',
          href: getPermalink('/#pricing'),
        },
        {
          text: 'Par mani',
          href: getPermalink('/#about'),
        },
        {
          text: 'Biežāk uzdotie jautājumi',
          href: getPermalink('/#faq'),
        },
      ],
    },
    {
      text: 'Blogs',
      href: getPermalink('blog'),
    },
    {
      text: 'Kontakti',
      href: getPermalink('contact'),
    },
  ],
  actions: [{ text: '+371 25226526', href: 'tel:+37125226526' }],
};

export const footerData = {
  links: [
    {
      title: 'Sākums',
      links: [
        { text: 'Priekšrocības', href: '/#features' },
        { text: 'Atsauksmes', href: '/#reviews' },
        { text: 'Cenas', href: '/#pricing' },
        { text: 'Par mani', href: '/#about' },
        { text: 'Biežāk uzdotie jautājumi', href: '/#faq' },
      ],
    },
    {
      title: 'Blogs',
      links: [
        { text: 'Jaunākie raksti', href: getBlogPermalink() },
        // {
        //   text: 'Category Page',
        //   href: getPermalink('tutorials', 'category'),
        // },
        // {
        //   text: 'Tag Page',
        //   href: getPermalink('astro', 'tag'),
        // },
      ],
    },
    {
      title: 'Kontakti',
      links: [
        { text: 'Sazināties', href: '/contact' },
      ],
    },
    
  ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/labojam' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/labojam.lv' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/labojam' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/izveide-lv/web' },
  ],
  footNote: `
    Veidots SIA "<a class="text-blue-600 underline dark:text-muted" href="https://labojam.lv">Sociālais kods</a>"
  `,
};
