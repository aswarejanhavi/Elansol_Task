import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from '../services/api';

const Dashboard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/user');
        setUserData(response.data);
      } catch (error) {
        console.error('Fetch user data error:', error);
        // Handle fetch user data error
      }
    };
    fetchUserData();
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.dob}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
