import BeautyPackages from '../beauty-packages/_components/BeautyPackages';
import Specialists from '../specialists/_components/Specialists';
import Slider from './_components/Slider';

const HomePage = () => {
  return (
    <main>
      <Slider />
      <BeautyPackages />
      <Specialists />
    </main>
  );
};

export default HomePage;
