import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-2 bg-warning h-100 vh-100">
                <h5 className='h5'>Dashboard</h5>
                <ul>
                    <li className='py-2'>
                        <Link to='category'>Category</Link>
                    </li>
                    <li className='py-2'>
                        <Link to='product'>Product</Link>
                    </li>
                    <li className='py-2'>
                        <Link to='orders'>Order</Link>
                    </li>
                    <li className='py-2'>
                        <Link to='users'>Users</Link>
                    </li>
                </ul>
            </div>
            <div className="col-sm-10  vh-100">
                <div className="row">
                    <div className="col-sm-12 bg-primary">
                        <h1 class="fs-2">Welcome to the Admin</h1>
                    </div>
                </div>
                {/* main content start */}
                <div className="row">
                    <div className="col-sm-12  vh-100">
                        <Outlet/>
                    </div>
                </div>
                {/* main content end */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard