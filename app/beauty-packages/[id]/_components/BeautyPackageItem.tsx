import { beautyPackageType } from '@/types/beautyPackage';

interface BeautyPackageItemProps {
  item: beautyPackageType;
}

const BeautyPackageItem: React.FC<BeautyPackageItemProps> = ({ item }) => {
  return <section className='sp container'>{item.title}</section>;
};

export default BeautyPackageItem;
