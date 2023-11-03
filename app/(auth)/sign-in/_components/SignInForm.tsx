'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useCallback, useState } from 'react';

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: '',
    password: '',
  });

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();

      console.log(formData);
    },
    [formData]
  );

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-1.5'>
        <h2>Welcome back!</h2>
        <p className='text-black/50'>Please login to your account</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col gap-5 text-lg'
      >
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
            className='eq w-full rounded-2xl border border-gray bg-transparent p-5 outline-none focus:border-blue'
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
            className='eq w-full rounded-2xl border border-gray bg-transparent p-5 outline-none focus:border-blue'
          />
        </div>

        <Button variant='secondary' type='submit'>
          Login
        </Button>

        <p>
          <span className='text-black/50'>Do not have an account?</span>{' '}
          <Link href='/sign-up' className='link-item'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
