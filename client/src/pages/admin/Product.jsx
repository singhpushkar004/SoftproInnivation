import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const Product = () => {
const [data,setData] = useState([])
  const handlefetch = async ()=>{
   try{
     const res = await axios.get('http://localhost:5000/api/product')
    setData(res.data.data)
    console.log(res);
    
   }
   catch(er){
    console.log(er);
    
   }
  }
  useEffect(()=>{
    const fetchData = async()=>{
        await handlefetch();
    }
    handlefetch();
  },[])
  return (
    <div>
      <div className="card mt-5">
        <div className="card-header">
          <Link to='/admin/dashboard/addproduct' className="btn btn-primary">Add Product</Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.R</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {data.map((item,i)=>(
               <tr key={i+1}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.category?.category}</td>
                <td>{item.actualPrice}</td>
                <td><Link to={`/admin/dashboard/edit-
                  product/${item._id}`}>Edit</Link></td>
              </tr>
             ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Product