import React from 'react';

const LoginButton = (props)=>{
    return(
      <a href ={props.url} class="waves-effect waves-light btn-large">{props.content}</a>
    )
}
export default LoginButton;
