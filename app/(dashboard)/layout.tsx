import NewTodoForm from '@/components/NewTodoForm';
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>Dashboard</div>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
