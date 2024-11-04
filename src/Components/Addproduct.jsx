import React from 'react'

function Addproduct() {
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const [error,setError]=React.useState(false)
    const handlebutton=async()=>{
      console.log(!name)
      if(!name || !price || !category || !company){
        setError(true)
        return false;

      }
      const userId=JSON.parse(localStorage.getItem('user'))._id;
      let result=await fetch("http://localhost:5000/add-product",{
        method:'post',
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{
        "Content-Type":"application/json",
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}` 
        }
      });

     result=await result.json();
     console.log(result)
    }
  return (
    <div className='product'>
        <input type="text" placeholder='Enter product name' className='input-box' value={name} onChange={(e)=>{setName(e.target.value)}} />
    
     { error && !name &&<span className='invalid-input'>Enter valid Name</span>}
    <br/>
        <input type="text" placeholder='Enter price' className='input-box' value={price}   onChange={(e)=>{setPrice(e.target.value)}} />
        { error && !price &&<span className='invalid-input'>Enter valid Price</span>}
        <br/>
        <input type="text" placeholder='Enter category' className='input-box' value={category}  onChange={(e)=>{setCategory(e.target.value)}} />
        { error && !category &&<span className='invalid-input'>Enter valid Category</span>}
        <br/>
        <input type="text" placeholder='Enter company' className='input-box' value={company}  onChange={(e)=>{setCompany(e.target.value)}} />
        { error && !company &&<span className='invalid-input'>Enter valid Company</span>}
        <br/>
        <button className='button' onClick={handlebutton}>Add Product</button>
    </div>
  )
}

export default Addproduct
