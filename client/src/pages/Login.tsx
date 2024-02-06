import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AuthContext } from './AuthContext';
import { LinearProgress } from '@mui/material';

const Login = () => {
  const auth = useContext(AuthContext);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [waiting, setWaiting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await setWaiting(true);
    const result = await auth?.userLogin(login, password);
    setWaiting(false)

    // console.log(result);
  }

  return (
    <Form className='LoginForm' onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Login</Form.Label>
        <Form.Control 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
          type='text'
          placeholder='Login'
          maxLength={50}
          value={login}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Hasło</Form.Label>
        <Form.Control
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          value={password}
          type='password'
          placeholder='Hasło'
          maxLength={20}
          required
        />
      </Form.Group>
      <Button type='submit'>
        {
          waiting
          ?
          <LinearProgress />
          :
          <ArrowForwardIosIcon />
        }
      </Button>
    </Form>
  );
}

export default Login;
