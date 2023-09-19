import React from 'react'
import PrimaryNavBar from './homecontent/PrimaryNavBar'
import SecondaryNavBar from './homecontent/SecondaryNavBar'
import MembersList from './homecontent/MembersList'
import TrafficGraph from './homecontent/TrafficGraph'
import SocialStats from './homecontent/SocialStats'

export default function HomeContent() {
  return (
    <div>
      <h2 style={{color:"blue"}}>HomeContent</h2>
      <PrimaryNavBar/>
      <SecondaryNavBar/>
      <MembersList/>
      <TrafficGraph/>
      <SocialStats/>
    </div>
  )
}
