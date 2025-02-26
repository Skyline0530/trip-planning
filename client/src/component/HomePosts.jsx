import { IoIosPin } from 'react-icons/io';

export function MainPost(props) {
  const post = props.posts[0];
  const mainPost = (
    <div className="mainpost mb-10 h-80 flex flex-col rounded-3xl mx-16">
      <p className='text-2xl font-normal text-end pr-3'>{post.dates[0]}</p>
      <div className='flex-grow overflow-hidden rounded-3xl'>
        <img src="images/travel.jpg" className='h-full w-full object-cover' />
      </div>
      <div className='h-20 flex items-center'>
        <p className='w-1/3 text-2xl font-medium text-start flex items-center'><IoIosPin />{post.location}</p>
        <p className='w-1/2 text-3xl font-semibold text-center'>{post.postTitle}</p>
        <div className='w-1/3 flex justify-end'><img src="images/default.png" className='round-image w-7 h-7 mr-5 border border-solid rounded-full' /></div>
      </div>

    </div>
  )
  
  return(
    mainPost
  )
}

export function OtherPosts(props) {
  const otherposts = props.posts.slice(1);
  const other = [];
  for (let i = 0; i < otherposts.length; i+=3) {
    const chunk = otherposts.slice(i, i+3);
    const posts = chunk.map((item) => {
      return(
        <div className='post rounded-2x'>
          <img src="images/travel.jpg" className='rounded-xl h-3/4 w-full object-cover' />
          <div className='w-full h-1/4'>
            <p className=' text-xl text-left'>{item.postTitle}</p>
            <div className='flex items-center justify-between'>
              <p className=' text-gray-600'>{item.dates[0]}</p>
              <div className='w-6 h-6 mr-3'><img src="images/default.png" className='round-image ' /></div>
            </div>
          </div>
        </div>
      )
    });
    const row = (
      <div className={`min-h-full w-full flex mb-5`}>
        {posts}
      </div>
    )
    other.push(row);
  }

  const ret = (<div className='others flex flex-col  min-h-[9rem]'>{other}</div>)

  return ret;
}