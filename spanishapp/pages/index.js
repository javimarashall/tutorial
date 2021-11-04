import Head from 'next/head'
import Header from "../components/Header";
import Login from '../components/Login';
import { getSession } from 'next-auth/client';

export default function Home({ session }) {
  //If there is no session, return the login page
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Spanish App</title>
      </Head>
      {/* Header */}
      <Header />
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widget */}
      </main>
     
    </div>
  )
}

//Tells next.js to do serverSide rendering
export async function getServerSideProps(context) {
    //Get user 
    const session = await getSession(context);
    return {
      props: {}
    }
}