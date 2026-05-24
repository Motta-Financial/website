import LoginChooser from '@/components/auth/LoginChooser';

export const metadata = {
  title: 'Log In · Motta Financial',
  description:
    'Access the Motta client portal, partner portal, or team hub.',
};

export default function LoginPage() {
  return <LoginChooser />;
}
