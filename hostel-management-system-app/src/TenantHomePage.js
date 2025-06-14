import React from 'react'

export default function TenantHomePage() {
  const TenantName = localStorage.getItem('name');
  return (
    <div>
      <h1>Hi {TenantName.toUpperCase()}, Welcome to Your Page....</h1>
      <p>Here you will ge</p>
    </div>
  )
}
