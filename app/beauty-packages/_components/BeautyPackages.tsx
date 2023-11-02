'use client';

import { beautyPackageType } from '@/types/beautyPackage';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import BeautyPackageCard from './BeautyPackageCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Error from '@/components/ui/Error';
import Loading from '@/components/ui/Loading';
import useFetch from '@/hooks/useFetch';

interface BeautyPackagesProps {
  native?: boolean;
}

const BeautyPackages: React.FC<BeautyPackagesProps> = ({ native }) => {
  const {
    data: beautyPackages,
    error,
    isLoading,
  } = useFetch('/api/beauty_packages');

  return (
    <section className='sp container'>
      <SectionTitle title='Beauty Packages' />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error.message} />}

      {beautyPackages && beautyPackages.length > 1 && (
        <>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {native &&
              beautyPackages
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .map((item: beautyPackageType) => (
                  <BeautyPackageCard key={item._id} item={item} />
                ))}

            {!native &&
              beautyPackages
                .sort(
                  (a: beautyPackageType, b: beautyPackageType) =>
                    a.price - b.price
                )
                .slice(0, 8)
                .map((item: beautyPackageType) => (
                  <BeautyPackageCard key={item._id} item={item} />
                ))}
          </div>

          {!native && (
            <div className='mt-10 flex justify-center'>
              <Link
                href='/beauty-packages'
                className={cn(buttonVariants({ variant: 'outline' }))}
              >
                See More Packages
              </Link>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default BeautyPackages;
