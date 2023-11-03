import { specialistType } from '@/types/specialist';

interface SpecialistDetailsProps {
  specialist: specialistType;
}

const SpecialistDetails: React.FC<SpecialistDetailsProps> = ({
  specialist,
}) => {
  return <section className='sp container'>{specialist.name}</section>;
};

export default SpecialistDetails;
