const save = (key: string, value: any) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Set state error: ', error);
    }
  }
};

const load = (key: string) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error);
    }
  }
};

const remove = (key: string) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Remove state error: ', error);
    }
  }
};

const storageAPI = {
  save,
  load,
  remove,
};

export default storageAPI;
