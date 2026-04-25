import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Cart = () => {
  const userId = localStorage.getItem('id');
  const [data,setData]= useState([]);
  const handleFetch = async ()=>{
    const res = await axios.get(`http://localhost:5000/api/cart/${userId}`)
    setData(res.data.data);
  }
  useEffect(()=>{
    const fetchData = async()=>{
      await handleFetch();
    }
    fetchData();
  },[])
  console.log(data);
  
  return (
    <div>
      {data.map((item)=>(
        <div className="card">
          <div className="card-body">
            <div className="h2">Name : {item.productId.name}</div>
            <h2>Quantity : {item.quantity}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart