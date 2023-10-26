import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Timeline() {
const [posts,setPosts]=useState([
    {
        user:"its_Nitish247",
        postImage:"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
        likes:12,
        timestamp:"2d",
    },
     {
        user:"john",
        postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO2lgR5vlT0YIsnkHTynIJkTfU4FoegKiwRA0hexJ&s",
        likes:50,
        timestamp:"12h",
    }, {
        user:"max",
        postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHqVr-CbHrt6TbZXYpaO7TR1weVwUFpOoK7EWtnNG&s",
        likes:13,
        timestamp:"1d",
    },
]);

  return (
    <div className='timeline'>
  <div className="timeline__left">
    <div className="timeline__posts">
    
    {posts.map((post)=>
    (
       <Post 
       user={post.user} 
       postImage={post.postImage} 
       likes={post.likes}
        timestamp={post.timestamp}
       /> 
    ))}
    
    </div>
  </div>

  <div className="timeline__right">
    <Suggestions />
  </div>
    </div>
  )
}

export default Timeline
