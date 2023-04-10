import '../styles/globals.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'
import { useUserData } from '../lib/hooks';
import { UserContext } from '../lib/context';
import { Analytics } from '@vercel/analytics';

export default function App({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
      <Toaster />
    </UserContext.Provider>
  );
}
