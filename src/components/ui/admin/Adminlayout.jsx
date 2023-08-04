import React from 'react';
import './AdminSidebar';
import AdminSidebar from './AdminSidebar';

const Adminlayout = ({children}) => {
  return (
    <div>
      <div className="">
        <div  className="">
        <AdminSidebar/>
        </div>
        <div className="">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Adminlayout