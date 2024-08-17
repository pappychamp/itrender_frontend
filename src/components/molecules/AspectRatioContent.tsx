import { AspectRatio } from '@mantine/core';
import classes from '../../styles/home/AspectRatopmContent.module.css';
import parse from 'html-react-parser';
import { useState } from 'react';
type item = {
  embed_html: string;
};
type props = {
  item: item;
};

const AspectRatopmContent = ({ item }: props) => {
  const { embed_html } = item;
  return (
    <div
      style={{
        pointerEvents: 'none',
      }}
    >
      <div className={classes.iframeContainer}>{parse(embed_html)}</div>
    </div>
  );
};
export default AspectRatopmContent;
