import HeaderTabs from '../templates/Header.tsx';
import { Container } from '@mantine/core';
import classes from '../../styles/home/Home.module.css';
import HomeContents from '../templates/HomeContents.tsx';
import Eyecatch from '../templates/Eyecatch.tsx';

const example = [
  {
    site: 'youtube',
    contents: [
      {
        sitename: 'youtube',
        link: 'https://google.com',
        tags: ['たぐ', 'タグ', 'TAG', 'tag'],
        ranking: '1',
        title: 'testssssssssssssssssssssssssssssssssssssssssssssss',
        embed_html:
          '<iframe width="480" height="270" src="//www.youtube.com/embed/vTdiDTztwlw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      },
      {
        sitename: 'youtube',
        link: 'https://google.com',
        tags: ['たぐ', 'タグ', 'TAG', 'tag'],
        ranking: '2',
        title: 'test',
        embed_html:
          '<iframe width="480" height="270" src="//www.youtube.com/embed/vTdiDTztwlw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      },
      {
        sitename: 'youtube',
        link: 'https://google.com',
        tags: ['たぐ', 'タグ', 'TAG', 'tag'],
        ranking: '3',
        title: 'test',
        embed_html:
          '<iframe width="480" height="270" src="//www.youtube.com/embed/vTdiDTztwlw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      },
      {
        sitename: 'youtube',
        link: 'https://google.com',
        tags: ['たぐ', 'タグ', 'TAG', 'tag'],
        ranking: '4',
        title: 'test',
        embed_html:
          '<iframe width="480" height="270" src="//www.youtube.com/embed/vTdiDTztwlw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      },
    ],
  },
  {
    site: 'qiita',
    contents: [
      {
        sitename: 'qiita',
        link: 'https://google.com',
        title: '【IVS探訪記】AI/データエンジニアがIVSに行ってきました!',
        tags: ['たぐ', 'タグ', 'TAG', 'tag'],
        ranking: '1',
        embed_html: '',
      },
      {
        sitename: 'qiita',
        link: 'https://google.com',
        title: '【IVS探訪記】AI/データエンジニアがIVSに行ってきました!',
        tags: ['たぐ', 'タグ', 'TAG', 'tag'],
        ranking: '2',
        embed_html: '',
      },
      {
        sitename: 'qiita',
        link: 'https://google.com',
        title: '【IVS探訪記】AI/データエンジニアがIVSに行ってきました!',
        tags: ['たぐ', 'タグ', 'TAG', 'tag'],
        ranking: '3',
        embed_html: '',
      },
      {
        sitename: 'qiita',
        link: 'https://google.com',
        title: '【IVS探訪記】AI/データエンジニアがIVSに行ってきました!',
        tags: ['たぐ', 'タグ', 'TAG', 'tag'],
        ranking: '4',
        embed_html: '',
      },
    ],
  },
  {
    site: 'zenn',
    contents: [
      {
        sitename: 'zenn',
        link: 'https://google.com',
        title: '【IVS探訪記】AI/データエンジニアがIVSに行ってきました!',
        tags: ['たぐ', 'タグ', 'TAG', 'tag'],
        ranking: '1',
        embed_html: '',
      },
      {
        sitename: 'zenn',
        link: 'https://google.com',
        title: '【IVS探訪記】AI/データエンジニアがIVSに行ってきました!',
        tags: ['たぐ', 'タグ', 'TAG', 'tag'],
        ranking: '2',
        embed_html: '',
      },
      {
        sitename: 'zenn',
        link: 'https://google.com',
        title: '【IVS探訪記】AI/データエンジニアがIVSに行ってきました!',
        tags: ['たぐ', 'タグ', 'TAG', 'tag'],
        ranking: '3',
        embed_html: '',
      },
      {
        sitename: 'zenn',
        link: 'https://google.com',
        title: '【IVS探訪記】AI/データエンジニアがIVSに行ってきました!',
        tags: ['たぐ', 'タグ', 'TAG', 'tag'],
        ranking: '4',
        embed_html: '',
      },
    ],
  },
];

const Home = () => {
  return (
    <>
      <HeaderTabs></HeaderTabs>
      <Container className={`${classes['eyecatch-section']}`}>
        <Eyecatch />
      </Container>
      <Container className={`${classes['contents-section']}`}>
        {example.map((items, index) => {
          return <HomeContents key={index} data={items} />;
        })}
      </Container>
    </>
  );
};

export default Home;
