import LINKS from '@/constants/links';
import info from '@/data/gallery.data';

import SectionTitle from '@/components/shared/SectionTitle';
import GallerySwiper from '@/components/gallery/GallerySwiper';
import MobileGallery from '@/components/gallery/MobileGallery';

import '@/styles/gallery.css';

const Gallery = () => (
  <section id={LINKS.gallery} className="gallery background-image min-h-screen">
    <div className="container container-padding">
      <div className="mb-[36px] desktop:mb-[95px]">
        <SectionTitle title={info.title} />
      </div>
      <MobileGallery />
      <GallerySwiper />
    </div>
  </section>
);

export default Gallery;
