import { beautyPackageType } from './beautyPackage';
import { commonType } from './common';
import { userType } from './user';

export type bookingType = {
  user: userType;
  beautyPackage: beautyPackageType;
} & commonType;
