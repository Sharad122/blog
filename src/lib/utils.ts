import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export const dateConvertor = (date: string): string => {
  const datePart = date.split("T")[0];
  const parts = datePart.split("-");
  if (parts.length !== 3) return "Incorrect date format";
  const [year, monthStr, dayStr] = parts;
  const month = parseInt(monthStr, 10);
  const day = parseInt(dayStr, 10);
  if ( isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31 ) return "Incorrect date format";
  return `${months[month - 1]} ${day}, ${year}`;
};
