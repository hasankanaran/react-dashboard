import React from 'react'
import SocialCard from './socialstats/SocialCard.jsx'


export default function SocialStats() {
  return (
    <div style={{backgroundColor:'yellow',display:'flex', justifyContent:'space-between'}}>
    <SocialCard/>
    <SocialCard/>
    <SocialCard/>
    </div>
  )
}
