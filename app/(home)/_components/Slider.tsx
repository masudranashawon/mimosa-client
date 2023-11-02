'use client';

import { buttonVariants } from '@/components/ui/Button';
import Overlay from '@/components/ui/Overlay';
import { data } from '@/data/sliderContents';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
  return (
    <section className='h-[calc(100vh-5rem)] w-full'>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        speed={500}
        modules={[Navigation, Pagination, Autoplay]}
        className='mySwiper h-full w-full'
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.heading} className='relative h-full w-full'>
            <Image
              src={slide.image}
              alt={slide.heading}
              width={1920}
              height={1080}
              className='h-full w-full object-cover'
              priority
            />
            <Overlay />
            <div className='sp container absolute bottom-0 left-0 right-0 top-0 h-full w-full space-y-5 text-white'>
              <h1>{slide.heading}</h1>
              <p className='max-w-6xl'>{slide.subHeading}</p>
              <Link
                href='/beauty-packages'
                className={cn(buttonVariants({ variant: 'secondary' }))}
              >
                Browse Beauty Packages
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
