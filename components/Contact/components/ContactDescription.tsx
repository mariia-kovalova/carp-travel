import ContactPhoneList from './ContactPhoneList';
import ContactEmailList from './ContactEmailList';
import ContactSocialsList from './ContactSocialsList';

const ContactDescription = () => {
  return (
    <div
      className="flex flex-col gap-[24px] 
                tablet:max-desktop:flex-row tablet:max-desktop:gap-[90px] tablet:max-desktop:mb-[64px]
                tablet:ml-[34px] desktop:ml-[107px] desktop:gap-[120px]"
    >
      <div className="flex flex-col gap-[24px] desktop:gap-[64px]">
        <ContactPhoneList />
        <ContactEmailList />
      </div>
      <ContactSocialsList />
    </div>
  );
};

export default ContactDescription;
