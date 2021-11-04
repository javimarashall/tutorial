import '../styles/globals.css'
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return( 
    //provider allows the session to continue in another page
    <Provider session = {pageProps.session} >
      <Component {...pageProps} />
    </Provider>  
  );  
}

export default MyApp
