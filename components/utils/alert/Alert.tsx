import React, { ReactNode } from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'info';
  children: ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, children }) => {
  const alertClassName = `alert ${type}`;

  return (
    <div className={alertClassName}>
      {children}
    </div>
  );
};

export default Alert;
