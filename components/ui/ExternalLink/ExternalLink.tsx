import { ExternalLinkProps } from './types';

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, text }) => {
  return (
    <a
      className="base-link tracking-wide xl:text-right xl:tracking-[0.014em]"
      href={href}
      target="_blank"
      rel="noreferrer noopener nofollow"
    >
      {text}
    </a>
  );
};
