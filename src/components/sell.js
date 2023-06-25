import React,{useState,useEffect} from 'react';
import {link} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";

export default function Sell() {


  const [data,setData]=useState({
    name:"",
    age:"",
    number:"",
    address:"",
    pincode:"",
    product:"",
    quantity:"",
    price:""
  })

  // const [value, setValue] = React.useState('');

  // const handleChange = (event) => {
 
  //   setValue(event.target.value);
 
  // };

 const handle=(e)=>{
    const newdata={...data};
    newdata[e.target.id]=e.target.value;
    setData(newdata);
  }

  const resetform=()=>{
    setData({});
  }
const url="http://localhost:5000/sell";
 const handleSubmit=(e)=>{
  document.getElementById("confirmcard").style.visibility ="visible" ;

       e.preventDefault();
        console.log(data);


       axios.post(url,{
        name:data.name,
        age:data.age,
        number:data.number,
        address:data.address,
        pincode:data.pincode,
        product:data.product,
        quantity:data.quantity,
        price:data.price
       })
        
        .then(response=>{
          console.log(response);
          console.log(response.data);
        })

        .catch(e=>{
          this.errors.push(e);

          return;
        })
        return true;
  // } 
 }
  return (
    <div>
     <div  className="formmain"  style={{
        backgroundImage:"url('https://wallpaperaccess.com/full/3543885.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: "no-repeat", height: '1058px',
        width: '100%'
      }}>
    
    <div className='sellform' method='POST' action='' >
      <h1 className='sellheading'>Sell here...</h1> 
        <form name='myform' className='sellformclass'  action="post"  onSubmit={(e)=>handleSubmit(e)} >
          
            Name <input type="text" id="name" value={data.name} name="name" required placeholder="Enter your name" onChange={e=>handle(e)} /> <br/>
            Age <input type="text" name="age" id='age' value={data.age} required placeholder="Enter your age" onChange={e=>handle(e)}/> <br/>
            Contact number <input type="text" id='number' value={data.number} name="number" required placeholder="Enter your contact number or emailid" onChange={e=>handle(e)}/> <br/>
            Address <input type="text" id='address' value={data.address} name="address" required placeholder="Enter your address" onChange={e=>handle(e)}/> <br/>
            Pin code <input type="text" id='pincode' value={data.pincode} name="pincode" required placeholder="Enter your pincode" onChange={e=>handle(e)}/> <br/>
            {/* Product<input type="text" id='product' value={data.product} name="product" required placeholder="Enter the name of the product " onChange={e=>handle(e)}/> <br/> */}


            <select value={data.product} id='product' name="product" onChange={e=>handle(e)}>
            <option value="" disabled>Choose your product</option>
            <option value="Coconut">Coconut</option>
            <option value="Arecanut">Arecanut</option>
            <option value="Egg">Egg</option>
            <option value="Blackpepper">Blackpepper</option>
            <option value="Milk">Milk</option>
            <option value="Cashew">Cashew</option>
            <option value="Cocoa">Cocoa</option>
            <option value="Cotton">Cotton</option>

            </select>


            Quantity <input type="text" id='quantity' value={data.quantity} name="quantity" required placeholder="Enter the quantity of the product " onChange={e=>handle(e)}/> <br/>
            Price <input type="text" id='price' value={data.price} name="price" required placeholder="Enter the price you claim for your product" onChange={e=>handle(e)}/> <br/>


             <input class="sub" type="submit"/> <br/>
             <button type="reset" onClick={()=>resetform()}>Reset</button> <br/>


        </form>
        <div id='confirmcard'>

Your form has been submitted successfully...
        </div>
        
        </div>
        


      </div>
    </div>
  )
}
