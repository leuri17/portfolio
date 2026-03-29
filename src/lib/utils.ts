import { clsx, type ClassValue } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv.pdf';
  link.download = 'Leuri Alonso - Resume.pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const copyEmail = async () => {
  toast.promise(navigator.clipboard.writeText('leuri77@gmail.com'), {
    loading: 'Copying...',
    success: 'Email coppied',
    error: 'Failed to copy email',
  });
};
