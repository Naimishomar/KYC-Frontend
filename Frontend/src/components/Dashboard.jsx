import React from 'react'
import AutoScrollCards from './AutoScrollCards';
import AppreciationWall from './AppreciationWall';
import VideoPage from './VideoPage';
import FirstPage from './FirstPage';
import Filters from './Filters';
import NextFilter from './NextFilter';

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
    </>
  )
}

export default Dashboard