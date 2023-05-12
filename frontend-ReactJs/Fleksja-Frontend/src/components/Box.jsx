import '../index.css';




function Box({ children }) {
  return <div className="container m-1 p-3 shadow p-3 mb-5 bg-body rounded" >

    {children}
   
  </div>;
}



export default Box;
