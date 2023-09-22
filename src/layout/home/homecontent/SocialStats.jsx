import React from 'react'
import SocialCard from './socialstats/SocialCard.jsx'


export default function SocialStats() {
  return (
    <div style={{backgroundColor:'white',display:'flex', justifyContent:'space-between',boxShadow:'10px 10px 10px #888888;'}}>
    <SocialCard/>
    <SocialCard/>
    <SocialCard/>
    </div>
  )
}
