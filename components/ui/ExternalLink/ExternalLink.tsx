import { ExternalLinkProps } from './types';

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  text,
  className,
}) => {
  return (
    <a
      className="base-link"
      href={href}
      target="_blank"
      rel="noreferrer noopener nofollow"
    >
      {text}
    </a>
  );
};
