import { beautyPackageType } from './beautyPackage';
import { commonType } from './common';

export type specialistType = {
  name: string;
  designation: string;
  bio: string;
  photoUrl: string;
  dateOfBirth: string;
  beautyPackages: beautyPackageType[];
} & commonType;
