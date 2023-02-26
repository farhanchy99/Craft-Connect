import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DynamicPostCard from './PostCard/DynamicPostCard';

const MyPostCard = ({myProfile}) => {
 
  const url = `https://craft-connect-server-blond.vercel.app/myposts?email=${myProfile?.email}`;

  const { data: myPost = [] } = useQuery({
    queryKey: ["products", myProfile?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });
//   console.log(userPosts);

  return (
    <>
    {myPost.length>0 ? 
      <>
      {myPost.map((post) => (
        <DynamicPostCard key={post._id} post={post}></DynamicPostCard>
      ))}
    </>:
    <>
      <h1>You have No Post Yet</h1>
    </>
    }
    
    </>
  );
};
export default MyPostCard;