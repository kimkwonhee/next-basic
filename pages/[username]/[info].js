import Layout from '../../components/Layout';
import SubLayout from '../../components/SubLayout';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function UsernameInfo() {
    
    const router = useRouter();
    const { username, info } = router.query;
    const [name, setName] = useState('?');

    useEffect(() => {
        fetch('/api/user')
        .then((res) => res.json())
        .then((data) => {
            setName(data.name)
        })
    },[]);

    return (
        <>
            <h1>{username}'s {info}</h1>
            <h1>Name : {name}</h1>
        </>
  )
}

UsernameInfo.getLayout = function getLayout (page){
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
