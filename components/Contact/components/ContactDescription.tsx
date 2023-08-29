const ContactDescription = () => {
  return (
    <div
      className="flex flex-col gap-[24px] 
                tablet:max-desktop:flex-row tablet:max-desktop:gap-[90px] tablet:max-desktop:mb-[64px]
                tablet:ml-[34px] desktop:ml-[107px] desktop:gap-[120px]"
    >
      <div className="flex flex-col gap-[24px] desktop:gap-[64px]">
        <div className="flex gap-[20px] justify-end">
          <div
            className="text-[14px] leading-[24px] flex flex-col
                    tablet:text-[16px] desktop:text-[18px]"
          >
            <a className="contact-link" href="tel:+380981234567">
              +38 (098) 12 34 567
            </a>
            <a className="contact-link" href="tel:+380731234567">
              +38 (073) 12 34 567
            </a>
          </div>
          <p className="w-[81px] text-[12px] font-extralight leading-[20px] desktop:leading-[24px]">
            Phone number
          </p>
        </div>
        <div className="flex gap-[20px] justify-end">
          <a
            href="mailto:support@carptravel.com"
            className="contact-link text-[14px] leading-[24px] tablet:text-[16px] default:text-[18px]"
          >
            support@carptravel.com
          </a>
          <p className="w-[81px] text-[12px] font-extralight leading-[20px] desktop:leading-[24px]">
            E-mail
          </p>
        </div>
      </div>
      <div className="flex gap-[20px] justify-end">
        <b className="text-[12px] font-extralight leading-[20px] desktop:leading-[24px]">
          Follow us
        </b>
        <div
          className="text-[14px] leading-[24px] flex flex-col w-[81px]
                    tablet:text-[16px] default:text-[18px]"
        >
          <a
            className="contact-link"
            href=""
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            facebook
          </a>
          <a
            className="contact-link"
            href=""
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            instagram
          </a>
          <a
            className="contact-link"
            href=""
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            youtube
          </a>
          <a
            className="contact-link"
            href=""
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            tiktok
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDescription;
