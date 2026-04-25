import axios from 'axios'
import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
const Category = () => {
  const [data, setData] = useState([])
  const handlefetch = async()=>{
    try{
       const res = await axios.get('http://localhost:5000/api/category');
    console.log(res.data);
    setData(res.data.data)
    }catch(er){
      console.log(er);
      
    } 
  }
  useEffect(()=>{
    handlefetch();
  },[])

  const handleDelete = async(id)=>{
   try{
     const res = await axios.delete(`http://localhost:5000/api/category/${id}`);
     alert(res.data.msg)
     handlefetch();
   }
   catch{
    alert("Sorry try Again Later")
   }
  }
  return (
    <div>
      <div className="card mt-5">
        <div className="card-header">
          <Link className='btn btn-primary float-end' to='/admin/dashboard/add-category'>Add Category</Link>
        </div>
        <div className="card-body">
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>S.N</th>
                <th>Category</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item,i)=>(
                <tr key={i+1}>
                  <td>{i+1}</td>
                  <td>{item.category?.category}</td>
                  <td>{item.description}</td>
                  <td>
                    <button className='btn btn-success'>Edit</button>
          <button className='btn btn-danger ms-2' onClick={()=>{handleDelete(item._id)}}>Delete</button>
                  
                  </td>
                </tr>
               
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  )
}

export default Category