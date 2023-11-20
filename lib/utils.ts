import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertDurationToMinutes(duration: string): number {
  const [hours, minutes] = duration.split(':').map(Number);

  if (isNaN(hours) || isNaN(minutes) || hours < 0 || minutes < 0 || minutes >= 60) {
    throw new Error('Invalid duration format');
  }

  const totalMinutes = hours * 60 + minutes;
  return totalMinutes;
}
