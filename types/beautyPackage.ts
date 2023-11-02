import { bookingType } from './booking';
import { commonType } from './common';
import { specialistType } from './specialist';

export type beautyPackageType = {
  title: string;
  description: string;
  category: string;
  images: string[];
  price: number;
  specialists: specialistType[];
  bookings: bookingType[];
} & commonType;
