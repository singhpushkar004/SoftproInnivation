import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const AddProduct = () => {

  const [category , setCategory] = useState([]); 
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    brandName: "",
    actualPrice: "",
    discount: "",
    images: "",
    tag: "",
    stock: "",
    attributes: "",
    height: "",
    width: "",
    status: "active",
    stockStatus: "",
    refundPolicy: "",
    replacementPolicy: "",
    freeDelivery: "",
    returnPolicy: "",
    isCod: ""
  });

   const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const res = await axios.post("http://localhost:5000/api/product", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Product created successfully");
      console.log(res);
    } catch (error) {
      console.error(error);
      alert("Error creating product");
    }

  };

  const handleCategory = async()=>{
        const res = await axios.get('http://localhost:5000/api/category');
        setCategory(res.data.data);
  }
  useEffect(()=>{
    handleCategory()
  },[])
  console.log(formData);
  
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Create Product</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Product Name</label>
                <input type="text" name="name" className="form-control"
                  value={formData.name} onChange={handleChange} required />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Category</label>
                <select name="category" className="form-select"
                  value={formData.category} onChange={handleChange} required>
                  <option value="">Select Category</option>
                    {category.map((item)=>(
                        <option value={item._id}>{item.category}</option>
                    ))}
                </select>
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Description</label>
                <textarea name="description" className="form-control"
                  value={formData.description} onChange={handleChange} required />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Brand Name</label>
                <input type="text" name="brandName" className="form-control"
                  value={formData.brandName} onChange={handleChange} />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Actual Price</label>
                <input type="text" name="actualPrice" className="form-control"
                  value={formData.actualPrice} onChange={handleChange} required />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Discount (%)</label>
                <input type="text" name="discount" className="form-control"
                  value={formData.discount} onChange={handleChange} required />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Image</label>
                <input type="file" name="images" className="form-control"
                   onChange={handleChange} required />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Tag</label>
                <input type="text" name="tag" className="form-control"
                  value={formData.tag} onChange={handleChange} />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Stock</label>
                <input type="text" name="stock" className="form-control"
                  value={formData.stock} onChange={handleChange} required />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Height</label>
                <input type="text" name="height" className="form-control"
                  value={formData.height} onChange={handleChange} />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Width</label>
                <input type="text" name="width" className="form-control"
                  value={formData.width} onChange={handleChange} />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Stock Status</label>
                <select name="stockStatus" className="form-select"
                  value={formData.stockStatus} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="inStock">In Stock</option>
                  <option value="outOfStock">Out Of Stock</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Cash On Delivery</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input type="radio" name="isCod" value="yes"
                      className="form-check-input"
                      checked={formData.isCod === "yes"}
                      onChange={handleChange} />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" name="isCod" value="no"
                      className="form-check-input"
                      checked={formData.isCod === "no"}
                      onChange={handleChange} />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Free Delivery</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input type="radio" name="freeDelivery" value="yes"
                      className="form-check-input"
                      checked={formData.freeDelivery === "yes"}
                      onChange={handleChange} />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" name="freeDelivery" value="no"
                      className="form-check-input"
                      checked={formData.freeDelivery === "no"}
                      onChange={handleChange} />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Refund Policy</label>
                <textarea name="refundPolicy" className="form-control"
                  value={formData.refundPolicy} onChange={handleChange} />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Replacement Policy</label>
                <textarea name="replacementPolicy" className="form-control"
                  value={formData.replacementPolicy} onChange={handleChange} />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">Return Policy</label>
                <textarea name="returnPolicy" className="form-control"
                  value={formData.returnPolicy} onChange={handleChange} />
              </div>

            </div>

            <button type="submit" className="btn btn-success w-100">
              Create Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;