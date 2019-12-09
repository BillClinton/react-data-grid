import React from 'react';
import UserGrid from './components/UserGrid';
import UserStoreProvider from './contexts/UserStore';

function App() {
  return (
    <div>
      <UserStoreProvider>
        <UserGrid />
      </UserStoreProvider>
    </div>
  );
}

export default App;
