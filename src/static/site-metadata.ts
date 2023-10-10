interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Dennis Running Page',
  siteUrl: 'https://run.domon.cn',
  logo: 'https://domon.cn/content/images/2020/06/avatar_shiba-2.jpg',
  description: '在路上，跑起来',
  navLinks: [
    { name: 'Blog', url: 'https://www.domon.cn' },
    { name: 'Moment',url: 'https://t.me/s/hualihuawai' },
    { name: 'Memos', url: 'https://memos.domon.cn' },
    { name: 'Link-Exchange',url: 'https://domon.cn/link-exchange/' },
    { name: 'About',url: 'https://www.domon.cn/about' },
  ],
};

export default data;
