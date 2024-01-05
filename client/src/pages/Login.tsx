import React from 'react'
import { Button, Form } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Login = () => {
  return (
    <Form className='LoginForm'>
      <Form.Group>
         <Form.Label>Login</Form.Label>
         <Form.Control 
         type='text'
         placeholder='Login'
         maxLength={10}
         required
    />
      </Form.Group>
      <Form.Group>
        <Form.Label>Hasło</Form.Label>
        <Form.Control
         required
        type='password'
         placeholder='Hasło'
         maxLength={10}
        />
      </Form.Group>
      <Button type='submit'>
        <ArrowForwardIosIcon />
      </Button>
    </Form>
  )
}

export default Login
