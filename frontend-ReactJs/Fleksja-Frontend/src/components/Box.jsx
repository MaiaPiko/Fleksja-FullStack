import PropTypes from 'prop-types';
import '../index.css';
import { ReactNode } from 'react';




function Box({ children }) {
  return <div className="container m-1 p-3 shadow p-3 mb-5 bg-body rounded">

    {children}
   
  </div>;
}

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Box;
