import { useState } from 'react';
import { connect } from 'react-redux';
import { setSession } from '../components/ReduxActions.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import LoginForm from '../components/LoginForm.jsx';
import PropTypes from 'prop-types';
import bcrypt from 'bcryptjs';

const LoginAndReg = ({ setSession }) => {
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [users, setUsers] = useState([]);

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    const handleLogin = async (email, password) => {

        const user = {};
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
        if (passwordMatch) {
            setSession(user.username);
        } else {
            alert('Incorrect email or password');
        }
    };
    const handleRegistration = (username, email, hashedPassword) => {
        const existingUser = users.find((user) => user.username === username || user.email === email);

        if (existingUser) {
            if (existingUser.username === username) {
                alert('Username is already taken');
            } else if (existingUser.email === email) {
                alert('Email is already in use');
            }
            return;
        }

        const newUser = {
            username,
            email,
            hashedPassword,
        };

        setUsers([...users, newUser]);
        setSession(newUser);
    };

    return (
        <div>
            <img src="your-image-url" alt="Company Logo" />
            {showLoginForm ? (
                <LoginForm onSubmit={handleLogin} />
            ) : (
                <RegistrationForm onSubmit={handleRegistration} />
            )}
            <button onClick={toggleForm}>
                {showLoginForm ? 'Not a member?' : 'Already have an account?'}
            </button>
        </div>
    );
};

LoginAndReg.propTypes = {
    setSession: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    setSession,
};

const ConnectedLoginAndReg = connect(null, mapDispatchToProps)(LoginAndReg);

export default ConnectedLoginAndReg;