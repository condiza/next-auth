'use client'

import Link from 'next/link'
import React from 'react'
import {signIn, useSession, signOut} from 'next-auth/react'


function Navbar() {
  useSession() 
    const {data: session} = useSession();
  return (
    <nav className='bg-slate-900 flex items-center py-3 justify-between px-24
    text-white'>
        <Link href='/'>
          <h1>
              NexGoogle
          </h1>
        </Link>
        {session?.user ? (
          
        <div className='flex gap-x-2 items-center'>
        <Link href='/dashboard'>
        Dashboard
        </Link>
        <img src={session.user.image} alt="" class="user-image w-10 h-10 rounded-full cursor-pointer" />
  <p class="user-name">{session.user.name}</p>
        <button onClick={async()=>{
          await signOut({
            callbackUrl: '/'
          })
          }}  className='bg-sky-400 px-3 py-2 rounded bg-red-800'>
            Logout
        </button>

    </div>
        ) :(
          <button onClick={()=>signIn()} className='bg-sky-400 px-3 py-2 rounded'>
          Sign In
        </button>
        )}
    </nav>
  )
}

export default Navbar