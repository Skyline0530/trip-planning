import React from 'react';
import { IoIosPin } from 'react-icons/io';
import { BsBookmark, BsBookmarkFill, BsHeart, BsHeartFill } from "react-icons/bs";

export function ExplorePosts(props) {
    const exploreposts = props.posts;
    const ex = [];
    for (let i = 0; i < exploreposts.length; i+=3) {
      const chunk = exploreposts.slice(i, i+3);
      const posts = chunk.map((item) => {
        return(
          <div className='posts rounded-2xl m-6 p-4'>
            <div className='flex items-center'>
                <p className='text-2xl text-left font-semibold mb-2 ml-1 flex items-center'>{item.postTitle}</p>
                <IoIosPin className='ml-auto scale-150 mb-2'/><p className='text-xl mb-2 mx-2 flex items-center'>{item.location}</p>
            </div>
            <img src="images/travel.jpg" className='rounded-xl h-3/4 w-full object-cover' />
            <div className='w-full h-1/4'>
              <div className='flex items-center justify-between'>
                <div className='w-18 h-6 my-2 flex'>
                  <img src="images/default.png" className='round-image mx-1' />
                  <p className='text-gray-600'>Ed Sheeran</p>
                </div>
                <div className='flex'>
                  <BsBookmark className='m-1' />
                  <BsHeart className='m-1' />
                  <p className='text-gray-600 mr-2'>{item.likes}</p>
                </div>
              </div>
            </div>
          </div>
        )
      });
      const row = (
        <div className='min-h-full w-full flex justify-between grid grid-cols-3'>
          {posts}
        </div>
      )
      ex.push(row);
    }
    const ret = (<div className='container w-4/5 m-auto bg-gray-50'>{ex}</div>)

    return ret;
}