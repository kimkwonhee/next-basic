import Link from 'next/link'

export default function SubLayout({ children }) {
  return (
    <div>
       {children}
       <h1><Link href="/">Home로 이동</Link></h1>
    </div>
  )
}
