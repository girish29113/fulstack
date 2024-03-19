import React, { useState } from 'react';
import '../Css/Forgot.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', { email, newPassword, repeatPassword });
    };

    return (
        <div className="containerforgot">
            <div className="forgotheading">
            <div className='zero'>
            <label>Forgot Paswword</label></div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Email:</span>
                        <input className='in1'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        <span>New Password:</span>
                        <input className='in2'
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        <span>Repeat Password:</span>
                        <input className='in3'
                            type="password"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button className='in4' type="submit">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;