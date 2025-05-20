import AppreciationWall from './AppreciationWall';
import VideoPage from './VideoPage';
import SocialMedia from './SocialMedia';
import LatestUpdates from './LatestUpdates';
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
        <SocialMedia/>
      </div>
    </>
  )
}

export default Dashboard