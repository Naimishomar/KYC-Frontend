import React from 'react'
import AutoScrollCards from './AutoScrollCards';
import AppreciationWall from './AppreciationWall';
import VideoPage from './VideoPage';
import FirstPage from './FirstPage';
import Filters from './Filters';
import NextFilter from './NextFilter';
import SocialMedia from './SocialMedia';
import LatestUpdates from './LatestUpdates';
import ImportantDetails from './ImportantDetails';
import AutoScrollCards2 from './AutoScrollCards2';

function Dashboard() {
  return (
    <>
      <div>
        <FirstPage/>
      </div>
      <div>
        <Filters/>
      </div>
      <div>
        <AutoScrollCards/>
      </div>
      <div>
        <AppreciationWall/>
      </div>
      <div>
        <VideoPage/>
      </div>
      <div>
        <NextFilter/>
      </div>
      <div>
        <AutoScrollCards2/>
      </div>
      <div>
        <LatestUpdates/>
      </div>
      <div>
        <ImportantDetails/>
      </div>
      <div>
        <SocialMedia/>
      </div>
    </>
  )
}

export default Dashboard