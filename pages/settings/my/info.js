import Layout from '../../../components/Layout';
import SubLayout from '../../../components/SubLayout';
import { useRouter } from 'next/router'
import { useState } from 'react';

export async function getServerSideProps() {
    console.log('server')
    return {
      props : {}
    }
  }


export default function Myinfo() {
    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const { status = 'initail'} = router.query;

    return (
        <>
            <h1>My info</h1>
            <h1>clicked: {String(clicked)}</h1>
            <h1>status: {status}</h1>
            <button onClick={() => {
                 alert('edit')
                 setClicked(true)
                 location.replace('/settings/my/info?status=editing')
            }}>edit(replace)</button>
            <br />
            <button onClick={() => {
                 alert('edit')
                 setClicked(true)
                 router.push('/settings/my/info?status=editing')
            }}>edit(push)</button>
            <br />
            <button onClick={() => {
                 alert('edit')
                 setClicked(true)
                 router.push('/settings/my/info?status=editing', undefined, {shallow : true} )
            }}>edit(shallow)</button>

        </>
  )
}

Myinfo.getLayout = function getLayout (page){
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
