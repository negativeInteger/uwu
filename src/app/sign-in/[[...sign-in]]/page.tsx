import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='min-h-screen bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] font-titillium flex justify-center items-center'>
        <SignIn forceRedirectUrl='/home' />
    </div>
  )
}