import PropTypes from 'prop-types';
import { useState } from 'react';
import { formStyle, labelStyle } from '../assets/LoginRegStyles';
import SubmitButton from './SubmitButton';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const RegistrationForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const nav = useNavigate();

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;

  const isEmailValid = (email) => {
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!passwordRegex.test(password)) {
      alert('Password invalid');
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    onSubmit(username, email, hashedPassword);
    nav('/');
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label style={labelStyle}>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label style={labelStyle}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label style={labelStyle}>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <SubmitButton type="submit" text="Register" />
      </form>
    </div>
  );
};

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;