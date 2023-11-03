import ContactPhoneList from './ContactPhoneList';
import ContactEmailList from './ContactEmailList';
import ContactSocialsList from './ContactSocialsList';

const ContactDescription = () => {
  return (
    <div
      className="mdOnly:flex-row mdOnly:gap-[90px] mdOnly:mb-[64px] 
                md:ml-[34px] xl:ml-[107px] xl:gap-[120px]
                flex flex-col gap-[24px]"
    >
      <div className="xl:gap-[64px] flex flex-col gap-[24px]">
        <ContactPhoneList />
        <ContactEmailList />
      </div>
      <ContactSocialsList />
    </div>
  );
};

export default ContactDescription;
