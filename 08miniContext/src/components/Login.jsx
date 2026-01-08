import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext); //* in () we put from which context we want values

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password}); //* here we passing value in user var using setUser form UserContext
  }

  return (
    <div>
      <h2>Login</h2>
      <input type='text' value={username} onChange={(e) => setUsername(e.target.value) }placeholder='username' />

      <input type='text' value={password} onChange={(e) => setPassword(e.target.value) } placeholder='password' />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}


export default Login





