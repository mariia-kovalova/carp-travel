interface IFileds {
  inputName: string;
  type?: string;
}

export const getDefaultValues = (fileds: IFileds[]) =>
  fileds.reduce(
    (acc, { inputName, type }) => ({
      ...acc,
      [inputName]: type === 'checkbox' ? false : '',
    }),
    {}
  );
