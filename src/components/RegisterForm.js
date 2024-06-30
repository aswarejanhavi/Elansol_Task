// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import axios from '../services/api';
// import './FormStyles.css';


// const RegisterForm = () => {
//   const [name, setName] = useState('');
//   const [dob, setDob] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/register', { name, dob, email, password });
//       // Optionally, handle successful registration (redirect, display message, etc.)
//     } catch (error) {
//       console.error('Registration error:', error);
//       // Handle registration error (display message, reset form, etc.)
//     }
//   };

//   return (
//     <Form onSubmit={handleRegister}>
//       <Form.Group controlId="formBasicName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </Form.Group>

//       <Form.Group controlId="formBasicDOB">
//         <Form.Label>Date of Birth</Form.Label>
//         <Form.Control
//           type="date"
//           value={dob}
//           onChange={(e) => setDob(e.target.value)}
//           required
//         />
//       </Form.Group>

//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </Form.Group>

//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Register
//       </Button>
//     </Form>
//   );
// };

// export default RegisterForm;


import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from '../services/api';
import './FormStyles.css'; // Import CSS for styling

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/register', { name, dob, email, password });
      // Optionally, handle successful registration (redirect, display message, etc.)
    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration error (display message, reset form, etc.)
    }
  };

  return (
    <Form className="form-container" onSubmit={handleRegister}>
        <h1 className="heading">Register</h1>
      <Form.Group controlId="formBasicName" className="form-group">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
      </Form.Group>

      <Form.Group controlId="formBasicDOB" className="form-group">
        <Form.Label className="form-label">Date of Birth</Form.Label>
        <Form.Control
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
          className="form-input"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail" className="form-group">
        <Form.Label className="form-label">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword" className="form-group">
        <Form.Label className="form-label">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-input"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="form-button">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
