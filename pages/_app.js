import '../styles/globals.css'
import Layout from '/components/Layout'

// next.js에서 제공하는 props
function MyApp({ Component, pageProps }) {
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // )

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  return getLayout(<Component {...pageProps} />);
}

export default MyApp
