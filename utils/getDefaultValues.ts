import storageAPI from './localStorageAPI';

interface IFileds {
  inputName: string;
  type?: string;
}

const getDefaultValues = (key: string, fileds: IFileds[]) => {
  const savedValues = storageAPI.load(key) || {};
  const defaultValues = fileds.reduce(
    (acc, { inputName, type }) => ({
      ...acc,
      [inputName]: type === 'checkbox' ? false : '',
    }),
    {}
  );

  return {
    ...defaultValues,
    ...savedValues,
  };
};

export default getDefaultValues;
