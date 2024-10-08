import { AspectRatio } from '@mantine/core';

const Contact = () => {
  return (
    <>
      <AspectRatio ratio={16 / 9} data-testid="google-form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScN3Ro8qo829NAKYMG2zdd9To35YEvItbqXiLZTtp7v8GASyw/viewform?embedded=true"
          width="640"
          height="800"
        >
          読み込んでいます…
        </iframe>
      </AspectRatio>
    </>
  );
};

export default Contact;
