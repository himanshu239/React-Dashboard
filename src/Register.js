// Importing necessary modules and hooks
import React, { useState } from 'react';
import { auth, firestore } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import './Register.css';

// Defining the Register function component
const Register = () => {

    // Using the useState hook to manage form inputs and error message
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

        // Function to handle sign up
    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await addDoc(collection(firestore, 'user-list'), {
                uid: user.uid,
                name: name,
                email: user.email,
            });
            user.setName = name;
            setName('');
            setEmail('');
            setPassword('');
            // setError(null);
        } catch (error) {
            setError('Error signing up with email and password');
        }
    };
// Rendering the Register component
    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSignUp}>
                <input
                    name="name" // Name input field
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
            {error && <p className="error">{error}</p>}
            <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
        </div>
    );
};

export default Register;
