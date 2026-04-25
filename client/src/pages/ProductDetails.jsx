import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const ProductDetails = () => {
    const {id} = useParams()
    // console.log(id);
    const userId = localStorage.getItem("id");
    const [data,setData] = useState([]);
    const [form,_setForm] = useState({
      userId:userId,
      productId:id
    });

    const handlefetch = async()=>{
      const res = await axios.get(`http://localhost:5000/api/product/details/${id}`)
      setData(res.data.data)
      
    }
    useEffect(()=>{
      const fetchData = async()=>{
        await handlefetch();
      }
      fetchData()
    },[])
    // console.log(form);
    const handleCart = async()=>{
      const res = await axios.post('http://localhost:5000/api/cart',form)
      console.log(res);
      
    }
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-8 mt-5">
            <div className="card">
              <div className="card-body">
                <img src="" alt="" />
                <p>name: {data.name}</p>
                <p>price:{data.actualPrice}</p>

              <button className='btn btn-primary' onClick={handleCart}>Add To Carts</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails