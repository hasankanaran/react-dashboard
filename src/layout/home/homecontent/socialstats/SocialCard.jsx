import React from 'react'
import SocialLogo from '../../../../componet/socialcard/SocialLogo'
import StatCard from '../../../../componet/socialcard/StatCard'

export default function SocialCard() {
  return (
    <div style={{border:'2px black solid'}}>
      <SocialLogo/>
      <div style={{display:'flex'}}>
      <StatCard/>
      <StatCard/>
      </div>
      
    </div>
  )
}
