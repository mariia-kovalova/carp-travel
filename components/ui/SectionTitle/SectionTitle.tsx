import classNames from 'classnames';
import { SectionTitleProps } from './types';

export const SectionTitle: React.FC<SectionTitleProps> = ({
  tag: Tag = 'h2',
  className = '',
  isInversed = false,
  title: { text, accent },
}) => {
  const titleClasses = classNames('section-title', className);

  return (
    <Tag className={titleClasses}>
      {isInversed ? (
        <>
          <span className="font-medium">{accent}</span> {text}
        </>
      ) : (
        <>
          {text} <span className="font-medium">{accent}</span>
        </>
      )}
    </Tag>
  );
};
