import React, { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';

function UpdateProduct() {
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const params=useParams();
    const navigate=useNavigate()
    useEffect (()=>{
      getProductDetails();
    },[])
    const getProductDetails=async()=>{
console.log(params);
let result=fetch(`http://localhost:5000/product/${params.id}`,{
  headers:{
 authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}` 
}
}) 
result= await (await result).json();
setName(result.name)
setPrice(result.price)
setCategory(result.category)
setCompany(result.company)
    }
    const updateProduct=async()=>{
       console.log(name,price,category,company);
       
let result=await fetch(`http://localhost:5000/product/${params.id}`,{
  method:'Put',
  body:JSON.stringify({name,price,category,company}),
  headers:{
    'Content-Type':"application/json",
    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}` 
  }
});
result=await result.json()
navigate('/')
      }

  return (
    <div className='product'>
        <h1>Update Product</h1>
        <input type="text" placeholder='Enter product name' className='input-box' value={name} onChange={(e)=>{setName(e.target.value)}} />
    <br/>
        <input type="text" placeholder='Enter price' className='input-box' value={price}   onChange={(e)=>{setPrice(e.target.value)}} />
        <br/>
        <input type="text" placeholder='Enter category' className='input-box' value={category}  onChange={(e)=>{setCategory(e.target.value)}} />
        <br/>
        <input type="text" placeholder='Enter company' className='input-box' value={company}  onChange={(e)=>{setCompany(e.target.value)}} />
        <br/>
        <button className='button' onClick={updateProduct}>Update Product</button>
    </div>

  )
}

export default UpdateProduct
