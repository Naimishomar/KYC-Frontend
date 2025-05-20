// import AutoScrollCards from './FindMentors';
import AppreciationWall from './AppreciationWall';
import VideoPage from './VideoPage';
import Filters from './Filters';
import SocialMedia from './SocialMedia';
import LatestUpdates from './LatestUpdates';
import ImportantDetails from './ImportantDetails';
import Hero from './Hero';
import FindColleges from './FindColleges';
import FindMentors from './FindMentors';

function Dashboard() {
  return (
    <>
      <div>
        <Hero/>
      </div>
      <div>
        <Filters/>
      </div>
      <div>
        <FindMentors/>
      </div>
      <div>
        <AppreciationWall/>
      </div>
      <div>
        <VideoPage/>
      </div>
      <div>
        <FindColleges/>
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