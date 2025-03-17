"use client"
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'
import React from 'react'
import SideNav from './_components/SideNav'

function DashboardLayout({children}) {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen">
          <div className='md:w-64 fixed h-full'>
            <SideNav/>
          </div>
          <div className='md:ml-64 p-4'>
            {children}
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/dashboard" />
      </SignedOut>
    </>
  )
}

export default DashboardLayout
