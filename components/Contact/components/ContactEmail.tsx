interface IProps {
  email: string;
}

const ContactEmail: React.FC<IProps> = ({ email }) => (
  <a className="contact-link" href={`mailto:${email}`}>
    {email}
  </a>
);

export default ContactEmail;
