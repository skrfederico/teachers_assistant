import React from 'react'
import '../App.css'

//State provider
// import { ProvideController } from './Controller'
import AllGroups from '../components/AllGroups'
import CreateGroup from '../components/CreateGroup'

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <AllGroups />
      <CreateGroup />
    </div>
  )
}
