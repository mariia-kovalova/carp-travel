interface IFileds {
  inputName: string;
  type?: string;
}

const getDefaultValues = (fileds: IFileds[]) =>
  fileds.reduce(
    (acc, { inputName, type }) => ({
      ...acc,
      [inputName]: type === 'checkbox' ? false : '',
    }),
    {}
  );

export default getDefaultValues;
