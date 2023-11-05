import classNames from 'classnames';
import { TextWithAccentProps } from './types';

export const TextWithAccent: React.FC<TextWithAccentProps> = ({
  content: { accent, text },
  className = '',
}) => {
  const textClasses = classNames('section-text', className);

  return (
    <p className={textClasses}>
      <span className="font-medium">{accent}</span> {text}
    </p>
  );
};
