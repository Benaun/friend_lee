import {cookies} from 'next/headers';
import Main from './components/Main';


const HomePage = async () => {
  const secretKey = cookies().get('auth')?.value || '';
  return <Main secretKey={secretKey} />;
}

export default HomePage