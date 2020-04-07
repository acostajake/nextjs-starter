import { redirect } from '../lib/session';

export default function HomeRedirect() {
  return null;
}

// Redirect to home by default. Ootion to redirect anywhere
HomeRedirect.getInitialProps = async context => {
  redirect(context, { pathname: '/home' }, true);
  return {};
};