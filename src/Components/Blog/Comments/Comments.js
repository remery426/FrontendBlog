import React from 'react';
import axios from 'axios';
import Commentlist from './Commentlist';
import LoginButton from './LoginButton';
import { Redirect } from 'react-router';

class Comments extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comments: []
    };
      this.renderForm = this.renderForm.bind(this);
      this.renderList = this.renderList.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event){
    let comment = await axios.post('https://hidden-forest-93026.herokuapp.com/comment',{body:event.target.comment.value,user:event.target.user.value})
    let comments = await axios.get('https://hidden-forest-93026.herokuapp.com/comments');
    if(comment.data){
    this.setState({
      comments: comments.data
    })
  }
    else{
      alert("something went wrong")
    }
  }
  async componentWillMount(){
    let comments = await axios.get('https://hidden-forest-93026.herokuapp.com/comments');
    this.setState({
      comments: comments.data
    })

  }
  renderList(){
    return(
      <Commentlist comments={this.state.comments}/>

    )
  }

  renderForm(){
      return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <h5> Comment on this post: </h5>
        <input placeholder="Your Name" name="user" />
        <input placeholder="Your Comment" name="comment" />
        <input className="waves-effect waves-light btn red"  type="submit" value = "Comment"/>
        </form>
      </div>
      )
    }

  render(){
    return(
      <div>
        {this.renderForm()}
        <h5>Comments:</h5>
        {this.renderList()}
      </div>
    )
  }
}
export default Comments
