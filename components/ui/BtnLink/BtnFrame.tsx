import MobileFrame from '@/public/icons/icon_btn_frame_sm.svg';
import TabletFrame from '@/public/icons/icon_btn_frame_md.svg';
import DesktopFrame from '@/public/icons/icon_btn_frame_xl.svg';

export const BtnFrame = () => (
  <div className="absolute left-0 top-0 flex w-full justify-between">
    <MobileFrame className="md:hidden" width={42} height={53} />
    <MobileFrame className="rotate-180 md:hidden" width={42} height={53} />

    <TabletFrame className="xl:hidden smOnly:hidden" width={35} height={50} />
    <TabletFrame
      className="rotate-180 xl:hidden smOnly:hidden"
      width={35}
      height={50}
    />

    <DesktopFrame className="notXl:hidden" width={44} height={71} />
    <DesktopFrame className="rotate-180 notXl:hidden" width={44} height={71} />
  </div>
);
