import { Anchor, Group } from '@mantine/core';
import classes from '@/src/styles/Footer.module.css';
import { SITE_NAME } from '@/src/constants/config';
import { Link } from 'react-router-dom';

const links = [
  // { url: '#', label: 'このサイトについて' },
  { url: '/contact', label: 'お問い合わせ' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const items = links.map((link) => (
    <Anchor
      c="white"
      component={Link}
      key={link.label}
      to={link.url}
      lh={1}
      size="lg"
    >
      {link.label}
    </Anchor>
  ));
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.links}>{items}</Group>
      </div>
      <div className={classes.copyright}>
        &copy; {currentYear} {SITE_NAME} All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
