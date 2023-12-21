import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <main className='h-screen flex justify-center items-center'>
        {children}
    </main>
  )
}

export default AuthLayout