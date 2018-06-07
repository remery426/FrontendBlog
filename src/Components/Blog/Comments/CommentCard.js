import React from 'react';

const CommentCard = (props) =>{
  return(
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content">
            <div  className = "left-align" style = {{'padding-left': 80}}>
              <h5> {props.author} says: </h5>
              <p>{props.content}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )

}
export default CommentCard;
