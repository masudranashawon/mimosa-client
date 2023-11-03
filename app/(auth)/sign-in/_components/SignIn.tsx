import SignInForm from './SignInForm';
import SignInPicture from './SignInPicture';

const SignIn = () => {
  return (
    <section className='sp container grid h-[calc(100vh-5rem)] grid-cols-2 items-center gap-20'>
      <SignInPicture />
      <SignInForm />
    </section>
  );
};

export default SignIn;
