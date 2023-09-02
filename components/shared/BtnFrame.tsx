const MobileFrame = () => (
  <div className="tablet:hidden absolute top-0 left-0 w-full flex justify-between">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="53"
      viewBox="0 0 42 53"
      fill="none"
    >
      <rect width="0.954545" height="11" fill="white" />
      <rect width="42" height="1" fill="white" />
      <rect
        width="0.954545"
        height="11"
        transform="matrix(1 0 0 -1 0 53)"
        fill="white"
      />
      <rect
        width="42"
        height="1"
        transform="matrix(1 0 0 -1 0 53)"
        fill="white"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="53"
      viewBox="0 0 42 53"
      fill="none"
    >
      <rect
        width="0.954545"
        height="11"
        transform="matrix(-1 0 0 1 42 0)"
        fill="white"
      />
      <rect
        width="42"
        height="1"
        transform="matrix(-1 0 0 1 42 0)"
        fill="white"
      />
      <rect
        x="42"
        y="53"
        width="0.954545"
        height="11"
        transform="rotate(180 42 53)"
        fill="white"
      />
      <rect
        x="42"
        y="53"
        width="42"
        height="1"
        transform="rotate(180 42 53)"
        fill="white"
      />
    </svg>
  </div>
);

const TabletFrame = () => (
  <div className="max-mobile:hidden desktop:hidden absolute top-0 left-0 w-full flex justify-between">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="50"
      viewBox="0 0 35 50"
      fill="none"
    >
      <rect width="0.795455" height="11" fill="white" />
      <rect width="35" height="1" fill="white" />
      <rect
        width="0.795455"
        height="11"
        transform="matrix(1 0 0 -1 0 50)"
        fill="white"
      />
      <rect
        width="35"
        height="1"
        transform="matrix(1 0 0 -1 0 50)"
        fill="white"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="50"
      viewBox="0 0 35 50"
      fill="none"
    >
      <rect
        width="0.795455"
        height="11"
        transform="matrix(-1 0 0 1 35 0)"
        fill="white"
      />
      <rect
        width="35"
        height="1"
        transform="matrix(-1 0 0 1 35 0)"
        fill="white"
      />
      <rect
        x="35"
        y="50"
        width="0.795455"
        height="11"
        transform="rotate(180 35 50)"
        fill="white"
      />
      <rect
        x="35"
        y="50"
        width="35"
        height="1"
        transform="rotate(180 35 50)"
        fill="white"
      />
    </svg>
  </div>
);

const DesktopFrame = () => (
  <div className="max-desktop:hidden absolute top-0 left-0 w-full flex justify-between">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="71"
      viewBox="0 0 44 71"
      fill="none"
    >
      <rect width="1" height="11" fill="white" />
      <rect width="44" height="1" fill="white" />
      <rect
        width="1"
        height="11"
        transform="matrix(1 0 0 -1 0 71)"
        fill="white"
      />
      <rect
        width="44"
        height="1"
        transform="matrix(1 0 0 -1 0 71)"
        fill="white"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="71"
      viewBox="0 0 44 71"
      fill="none"
    >
      <rect
        width="1"
        height="11"
        transform="matrix(-1 0 0 1 44 0)"
        fill="white"
      />
      <rect
        width="44"
        height="1"
        transform="matrix(-1 0 0 1 44 0)"
        fill="white"
      />
      <rect
        x="44"
        y="71"
        width="1"
        height="11"
        transform="rotate(180 44 71)"
        fill="white"
      />
      <rect
        x="44"
        y="71"
        width="44"
        height="1"
        transform="rotate(180 44 71)"
        fill="white"
      />
    </svg>
  </div>
);

const BtnFrame = () => {
  return (
    <>
      <MobileFrame />
      <TabletFrame />
      <DesktopFrame />
    </>
  );
};

export default BtnFrame;
