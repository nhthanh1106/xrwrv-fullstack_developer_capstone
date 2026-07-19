import React from 'react';
const Register = () => {
    return (
        <div>
            <h2>Sign-up</h2>
            <form>
                <input type="text" name="Username" placeholder="Username" />
                <input type="text" name="First Name" placeholder="First Name" />
                <input type="text" name="Last Name" placeholder="Last Name" />
                <input type="email" name="Email" placeholder="Email" />
                <input type="password" name="Password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
export default Register;
