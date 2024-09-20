import { Anchor, Group } from '@mantine/core';
import classes from '../../styles/Footer.module.css';

const links = [
  { link: '#', label: 'このサイトについて' },
  { link: '#', label: 'お問い合わせ' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const items = links.map((link) => (
    <Anchor
      c="white"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
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
        &copy; {currentYear} Trender All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
