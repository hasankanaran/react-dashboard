import React from 'react'
import PrimaryNavBar from './homecontent/PrimaryNavBar'
import SecondaryNavBar from './homecontent/SecondaryNavBar'
import MembersList from './homecontent/MembersList'
import TrafficGraph from './homecontent/TrafficGraph'
import SocialStats from './homecontent/SocialStats'
import OverviewList from './homecontent/OverviewList'

export default function HomeContent() {
  return (
    <div style={{backgroundColor:'green',width:'100%'}}>
      
      <PrimaryNavBar/>
      <SecondaryNavBar/>
      <OverviewList/>
      <MembersList/>
      <TrafficGraph/>
      <SocialStats/>
    </div>
  )
}
