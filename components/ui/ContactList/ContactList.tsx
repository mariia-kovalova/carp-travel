import classNames from 'classnames';
import { ExternalLink } from '../ExternalLink';
import { ContactListProps } from './types';

export const ContactList: React.FC<ContactListProps> = ({
  data,
  isInversed = false,
}) => {
  const { title, items } = data;

  const wrapperClasses = classNames('flex gap-5', {
    'flex-row-reverse': isInversed,
    'justify-end': !isInversed,
  });

  const listClasses = classNames(
    'flex flex-col leading-6 md:text-base xl:text-lg',
    { 'w-[81px]': isInversed },
  );

  const titleClasses = classNames('text-xs leading-5 xl:leading-6', {
    'w-[81px]': !isInversed,
  });

  return (
    <div className={wrapperClasses}>
      <ul className={listClasses}>
        {items.map(item => (
          <li key={item.text}>
            <ExternalLink {...item} />
          </li>
        ))}
      </ul>
      <p className={titleClasses}>{title}</p>
    </div>
  );
};
