'use client'
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'

function Footer() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const { user } = useUser();
  return !LoggedIn && (
    <div>Footer</div>
  )
}

export default Footer