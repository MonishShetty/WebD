import axios from 'axios';
import React, { useState,useEffect } from 'react'

export default function Labour(){
  
  const [data,setData]=useState({   
    name:"",
    age:"",
    number:"",
    address:"",
    pincode:"",
    city:""

  })
  const url="http://localhost:5000/labour";

  const handle=(e)=>{
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
        setData(newdata);
  }
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    console.log(data);
    axios.post(url,{
    name:data.name,
    age:data.age,
    number:data.number,
    address:data.address,
    pincode:data.pincode,
    city:data.city
   })
   .then(response=>{
    console.log(response);
    console.log(response.data);
    console.log("Data  Posted successfully");


   })
   .catch(e=>{
    this.errors.push(e);
    return;
  })
  }
   
const resetform=()=>{
  setData({});
}

  return (
    <div>
      <div class="formmain" style={{backgroundImage:"url('https://media.istockphoto.com/photos/in-the-muddy-indian-women-planting-rice-sprout-in-the-field-picture-id1325387353?k=20&m=1325387353&s=612x612&w=0&h=hZWF1Zu_E49Y8a2fL0zxV-SXx8z_eEZmR4hmR8iZAmc=')", backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:"no-repeat",height:'1008px',
    width:'100%'} }>
      <div className='labourform'>
      <h1 className='labourheading'>Apply as a labourer</h1> 
        <form className='labourformclass' onSubmit={(e)=>handleSubmit(e)}>
          
            Name <input id='name' type="text" value={data.name} required onChange={e=>handle(e)}  placeholder="Enter your name"/> <br/>
            Age <input id='age' type="text" value={data.age}  required onChange={e=>handle(e)}  placeholder="Enter your age"/> <br/>
            Contact number <input type="text"  id='number' value={data.number}  required onChange={e=>handle(e)}  placeholder="Enter your contact number or emailid"/> <br/>
            Address <input type="text" value={data.address} id='address' required onChange={e=>handle(e)}  placeholder="Enter your address"/> <br/>
            Pin code <input type="text" value={data.pincode} id='pincode' required  onChange={e=>handle(e)} placeholder="Enter your pincode"/> <br/>
            <select  value={data.city} id='city' name="city" onChange={e=>handle(e)}>
            <option value="" disabled selected>Enter the city where you are willing to work</option>
            <option value="Bantwal">Bantwal</option>
            <option value="Mangalore">Mangalore</option>
            <option value="Puttur">Puttur</option>
            <option value="Sullia">Sullia</option>
            <option value="Udupi">Udupi</option>
            </select>
            <input class="sub" type="submit"/> <br/>
             <button type="reset" onClick={()=>resetform()}>Reset</button> <br/>  
             
             </form>
 
            
             
        


        </div>


        </div>
    </div>
   
  )
}
