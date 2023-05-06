import { ReactNode } from 'react';
import '../index.css';



function Center({ children }) {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      {children}
    </div>
  );
}

export default Center;
