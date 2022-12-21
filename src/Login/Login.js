import React from 'react';
import './login.css';



import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firebase.init';

const auth = getAuth(app);



const handleSubmit = (event) => {
  event.preventDefault();
  const email = event.target.email.value;

  const password = event.target.password.value;
console.log(email,password);
createUserWithEmailAndPassword(auth,email,password)
.then( result => {
  const user = result.user;
  console.log(user);
})
.catch(error => {
  console.error('error',error);
})
}

const Login = () =>  {
    return (
      <div className='form'>
   


<form onSubmit={handleSubmit}>
  <input className='input' type="email" name="email" placeholder="your email" />
  <br />
  <input className='input' type="password" name="password" placeholder="your password" />
  <br />
  <button className="btn btn-accent" type ="submit">Register</button>
</form>

      </div>
    );
};

export default Login;