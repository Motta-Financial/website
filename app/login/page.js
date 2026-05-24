import LoginRouter from '@/components/auth/LoginRouter';

export const metadata = {
  title: 'Log In · Motta Financial',
  description:
    'Log in to the Motta team hub or the Motta client portal.',
};

export default function LoginPage() {
  return <LoginRouter />;
}
