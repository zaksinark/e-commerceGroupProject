import PropTypes from 'prop-types';
import { useState } from 'react';
import { formStyle, labelStyle } from '../assets/LoginRegStyles';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';


const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
    nav('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label style={labelStyle}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <SubmitButton type="submit" text="Login" />
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
