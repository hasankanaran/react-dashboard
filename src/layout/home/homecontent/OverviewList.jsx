import React from 'react'
import OverviewCard from './overviewlist/OverviewCard'

export default function OverviewList() {
  return (
    <div style={{display:'flex'}}>
        <OverviewCard/>
        <OverviewCard/>
        <OverviewCard/>
    </div>
  )
}
