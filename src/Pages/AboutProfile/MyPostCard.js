import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className='text-center mt-5'>
        <h1 className='text-xl'>You have No Post Yet</h1>
        <Link to="/"><button className='btn btn-sm bg-[#ff3f4a] hover:bg-[#cc323b] px-2 py-2 text-white'>Post Now</button></Link>
      </div>
    </>
    }
    
    </>
  );
};
export default MyPostCard;