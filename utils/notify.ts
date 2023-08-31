import toast from 'react-hot-toast';

const notify = {
  onSuccess: (message: string) => toast.success(message),
  onWarn: (message: string) =>
    toast.error(message, {
      icon: '⚠️',
    }),
  onError: (message: string) => toast.error(message),
};

export default notify;
