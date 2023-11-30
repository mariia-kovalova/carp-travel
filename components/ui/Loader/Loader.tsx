import { Triangle } from 'react-loader-spinner';

export const Loader = () => (
  <Triangle
    wrapperClass="flex justify-center items-center"
    height="20"
    width="20"
    color="#ffffff"
    ariaLabel="triangle-loading"
    visible={true}
  />
);
