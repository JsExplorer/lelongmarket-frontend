import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const priceFormatter = new Intl.NumberFormat("en-SG", {
  style: 'currency',
  currency: 'SGD',
})

// export const priceFormatter = (value: any) => `${new Intl.NumberFormat("en-US", {
//   style: 'currency',
//   currency: 'SGD',
// }).format(value)}`;