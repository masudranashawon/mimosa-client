import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { specialistType } from '@/types/specialist';
import Image from 'next/image';
import Link from 'next/link';

interface SpecialistCardProps {
  specialist: specialistType;
}

const SpecialistCard: React.FC<SpecialistCardProps> = ({ specialist }) => {
  return (
    <div className='w-full space-y-5 rounded-2xl bg-white p-5 shadow-md shadow-gray'>
      <Link
        href={`/specialists/${specialist._id}`}
        className='group inline-block h-[20rem] w-full overflow-hidden rounded-xl shadow-md shadow-gray'
      >
        <Image
          src={specialist.photoUrl}
          alt={specialist.name}
          width={1280}
          height={720}
          priority
          className='eq h-full w-full object-cover brightness-75 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>
      <div className='space-y-2.5'>
        <h3 className='truncate'>{specialist.name}</h3>
        <small className='uppercase text-purple'>
          {specialist.designation}
        </small>
        <hr className='border-gray' />
        <p className='text-black/50'>{specialist.bio}</p>
        <div className='flex justify-end'>
          <Link
            href={`/specialists/${specialist._id}`}
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialistCard;
