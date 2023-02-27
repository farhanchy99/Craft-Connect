import React from 'react';
import ProfileDetails from '../../Shared/LeftSideMenubar/ProfileDetails/ProfileDetails';
import MyPostCard from './MyPostCard';
import DynamicPostCard from './PostCard/DynamicPostCard';
import ProfileLeft from './PostCard/ProfileLeft';
import ProfileIntro from './ProfileIntro';
import SharedPost from "../../Components/SharedPostCard/SharedPost";

const MyPostView = ({myProfile}) => {


    return (
      <div className=" ">
        <div className="md:grid md:grid-cols-12 gap-5 justify-center ">
            <ProfileIntro />
          <div className="col-start-[5] col-end-[11] justify-center">
          <SharedPost></SharedPost>
            <MyPostCard myProfile={myProfile}></MyPostCard>
          </div>
        </div>
      </div>
    );
};

export default MyPostView;