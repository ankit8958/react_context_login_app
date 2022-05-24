import React from 'react';
import { useUserContext } from '../Context/userContext';

const Dashboard = () => {
    const {user} = useUserContext();

  return (
    <div>
      <h1>User Data,{user.username}</h1>
    </div>
  )
}

export default Dashboard
