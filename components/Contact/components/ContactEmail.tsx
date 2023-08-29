import { FC } from 'react';

interface IProps {
  email: string;
}
const ContactEmail: FC<IProps> = ({ email }) => (
  <a className="contact-link" href={`mailto:${email}`}>
    {email}
  </a>
);

export default ContactEmail;
