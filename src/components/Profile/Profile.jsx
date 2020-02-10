import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Post/MyPostsContainer';


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;