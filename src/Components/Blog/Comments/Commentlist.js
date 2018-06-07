import React from 'react';
import CommentCard from "./CommentCard"
const Commentlist = (props)=>{
  const listItems = props.comments.map((comment,index) =>
  <li key={index.toString()}>
      <CommentCard author= {comment.author} content={comment.body}/>
    </li>
  );
    return(
      <ul> {listItems}</ul>
    )
}
export default Commentlist;
