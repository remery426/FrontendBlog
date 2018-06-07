import React from 'react';
import BlogContent from './BlogContent';
import Comments from './Comments/Comments';
class Blog extends React.Component{
  render(){
    return(
      <div>
      <BlogContent/>
      <Comments />
      </div>
    )
  }
}
export default Blog
