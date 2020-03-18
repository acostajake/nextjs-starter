import { redirect } from '../lib/session';

export default function HomeRedirect() {
  return null;
}

HomeRedirect.getInitialProps = async context => {
  redirect(context, { pathname: '/main' }, true);
  return {};
};
