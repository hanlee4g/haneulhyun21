import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ setPassword }) => {
  const [isHaneul, setIsHaneul] = useState(false);
  const [tempPassword, setTempPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isHaneul && tempPassword === '07302002') {
      navigate('/her', { state: { isAuthenticated: true } });
    } else {
      navigate('/');
    }
    };

  return (
    <div className="body-1">
        <div className="login-box">
        <img src="../assets/favicon.ico" alt="Your alt text" />
        <p>Are you Haneul?</p>
        <div className="buttons">
            <button onClick={() => setIsHaneul(true)}>Yes</button>
            <button onClick={() => {
                setIsHaneul(false);
                navigate('/not-her');
            }}>No</button>
        </div>
        {isHaneul && (
            <form onSubmit={handleSubmit}>
            <label>
                Password:
                <input
                type="password"
                value={tempPassword}
                onChange={(e) => setTempPassword(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" className="input-submit"/>
            </form>
        )}
        </div>
    </div>
  );
};

export default Login;
