import React from 'react';
import content from './content.json'
const BlogContent = ()=>{
    return(
      <div style= {{fontSize:22}}>
      <h2> Building a simple blog with react and express  </h2>
      <p style = {{color: 'red'}}> Unfortunately I didn't quite have time to implement the login functionality on the frontend. I left it in the blog so you could see where things were headed </p>
      <p> {content.p1} </p>
      <p> {content.p2} </p>
      <img  style = {{height: 600}} src = {content.img1} alt="Image temporarily unavailable"></img>
      <p> {content.p3} </p>
      <p> {content.p4}</p>
      <img  style = {{height: 300}} src = {content.img2} alt="Image temporarily unavailable"></img>
      <p> {content.p5}</p>
      <img  style = {{height: 300}} src = {content.img3} alt="Image temporarily unavailable"></img>
      <p> {content.p6} </p>
      <h4> Diving briefly into the front-end </h4>
      <p>{content.p7}</p>
      </div>

    )
}
export default BlogContent;
