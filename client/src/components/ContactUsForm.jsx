import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ContactUsForm = () => {
    // const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/users', {
                firstName,
                lastName,
                email,
                phoneNumber,
            })
            .then((res) => navigate('/welcome'))
            .catch((err) => console.log(err));
    };

    return (
        <div
            style={{
                background: 'white',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                padding: '20px',
                borderRadius: '4px',
                maxWidth: '300px',
                margin: '0 auto',
            }}
        >
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder='Enter you first name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        style={{ width: '100%', padding: '5px', marginTop: '10px', marginBottom: '10px' }}
                    />
                </div>
 
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder='Enter your last name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        style={{ width: '100%', padding: '5px', marginTop: '10px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='Enter your email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '5px', marginTop: '10px', marginBottom: '10px' }}
                    />
                </div>

                <div>
                    <label>Phone Number</label>
                    <input
                        type="number"
                        id="phoneNumber"
                        placeholder='Enter your phone number'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        style={{ width: '100%', padding: '5px', marginTop: '10px' }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        marginTop: '10px',
                        cursor: 'pointer',
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactUsForm;
