import axios from 'axios';
import { Response, StatusVariants } from '@/types/TelegramStatus';

export const sendDataToTelegram = async (
  message: string,
): Promise<StatusVariants> => {
  try {
    const response: Response = await axios.post(`/api/telegram`, {
      text: message,
    });

    if (response.data.status === 200) return 'success';
  } catch (error) {
    return 'error';
  }

  return 'error';
};
