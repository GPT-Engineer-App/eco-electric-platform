import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const UserAuthentication = () => {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock login function
    const userData = { email, name: 'John Doe' };
    login(userData);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl">User Authentication</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2"
          />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      )}
    </div>
  );
};

export default UserAuthentication;