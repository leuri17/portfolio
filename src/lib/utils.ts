import { clsx, type ClassValue } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const copyEmail = async () => {
  try {
    navigator.clipboard.writeText('leuri77@gmail.com');
    toast.success('Email coppied succesfully!');
  } catch (_err) {
    toast.error('Failed to copy email. Please try again.');
  }
};
