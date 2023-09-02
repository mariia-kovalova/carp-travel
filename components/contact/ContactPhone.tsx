import normalizeNumber from '@/utils/normalizeNumber';

interface IProps {
  number: string;
}

const ContactPhone: React.FC<IProps> = ({ number }) => (
  <a className="contact-link" href={`tel:${normalizeNumber(number)}`}>
    {number}
  </a>
);

export default ContactPhone;
