'use client';

import { axiosPost } from '@/lib/axiosPost';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { phoroUrlChecker } from '@/helpers/phoroUrlChecker';
import { useDispatch } from 'react-redux';
import Button from '@/components/ui/Button';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { login } from '@/redux/features/auth/authSlice';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  photoUrl: string;
  address?: string;
  phoneNumber?: string;
}

const SignUpForm = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    photoUrl: '',
    address: '',
    phoneNumber: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);

      const hasPermitted = phoroUrlChecker(formData.photoUrl);

      if (hasPermitted) {
        const data = await axiosPost('/api/auth/register', formData);

        if (data) {
          setIsLoading(false);
          setFormData({
            name: '',
            email: '',
            password: '',
            photoUrl: '',
            address: '',
            phoneNumber: '',
          });
          dispatch(login(data));
          toast.success('Resgister successfull.');
          router.push('/');
        } else {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        toast.error('Please paste a photo url from pexels/unsplash/cloudinary');
      }
    },
    [formData, router, dispatch]
  );

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-1.5'>
        <h2>Create an account!</h2>
        <p className='text-black/50'>Please provide your details to register</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col gap-5 text-lg'
      >
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='name' className='cursor-pointer'>
            Name
          </label>
          <input
            type='text'
            id='name'
            placeholder='Jessica Smith'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='email' className='cursor-pointer'>
            Email address
          </label>
          <input
            type='email'
            id='email'
            placeholder='hello@example.com'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='password' className='cursor-pointer'>
            Password
          </label>
          <input
            type='password'
            id='password'
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder='Write your password'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='photoUrl' className='cursor-pointer'>
            Photo Url
          </label>
          <input
            type='text'
            id='photoUrl'
            value={formData.photoUrl}
            onChange={(e) =>
              setFormData({ ...formData, photoUrl: e.target.value })
            }
            placeholder='Paste your Photo url from pexels/unsplash/cloudinary'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='address' className='cursor-pointer'>
            Address
          </label>
          <input
            type='text'
            id='address'
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            placeholder='Write your full address'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='phoneNumber' className='cursor-pointer'>
            Phone Number
          </label>
          <input
            type='tel'
            id='phoneNumber'
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            placeholder='Write your phone number'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <Button variant='secondary' type='submit' isLoading={isLoading}>
          Register
        </Button>

        <p>
          <span className='text-black/50'>Already have an account?</span>{' '}
          <Link href='/sign-in' className='link-item'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
