import Layout from '../../components/Layout';
import SubLayout from '../../components/SubLayout';
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function CategorySlug() {
    
    const router = useRouter();
    const { slug, from, age } = router.query;

    return (
        <>
            <h1>CategorySlug {slug} from {from} {age}</h1>
            <Link href="/csr"></Link>
            <button onClick={() => router.push('/csr')}></button>
        </>
  )
}

CategorySlug.getLayout = function getLayout (page){
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
