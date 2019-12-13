import React from 'react';
import UserGrid from './components/UserGrid';
import UserStoreProvider from './contexts/UserStore';
import './App.scss';

function App() {
  return (
    <div>
      <UserStoreProvider>
        <UserGrid />
      </UserStoreProvider>
      <div className="repo-link">
        repo:{' '}
        <a href="https://github.com/BillClinton/react-data-grid">
          https://github.com/BillClinton/react-data-grid
        </a>
      </div>
    </div>
  );
}

export default App;
