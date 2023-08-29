import { FC } from 'react';

interface IProps {
  text: string;
  href: string;
}

const ContactSocial: FC<IProps> = ({ href, text }) => (
  <a
    className="contact-link"
    href={href}
    target="_blank"
    rel="noreferrer noopener nofollow"
  >
    {text}
  </a>
);

export default ContactSocial;
