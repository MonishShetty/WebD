
import axios from 'axios';
import React, { useState } from 'react';

function Buy() {
  const url="http://localhost:5000/buy";

  const [response,setResponse]=useState([]);

    const clickone=()=>{
           let product='Coconut'
           axios.post(url,{
            product:product
           })
    
    
          .then(response=>{
            console.log(response);
            window.data=response.data;
            setResponse(()=>response.data);
          })

          .catch(e=>
          {
            this.errors.push(e);
          })

    };

    const clicktwo=()=>{
      let product='Arecanut'
      axios.post(url,{
       product:product
      })


     .then(response=>{
       console.log(response);
       window.data=response.data;
       setResponse(()=>response.data);
     })

     .catch(e=>
     {
       this.errors.push(e);
     })

};

const clickthree=()=>{
  let product='Eggs'
  axios.post(url,{
   product:product
  })


 .then(response=>{
   console.log(response);
   window.data=response.data;
   setResponse(()=>response.data);
 })

 .catch(e=>
 {
   this.errors.push(e);
 })

};
const clickfour=()=>{
  let product='Blackpepper'
  axios.post(url,{
   product:product
  })


 .then(response=>{
   console.log(response);
   window.data=response.data;
   setResponse(()=>response.data);
 })

 .catch(e=>
 {
   this.errors.push(e);
 })

};
const clickfive=()=>{
  let product='Milk'
  axios.post(url,{
   product:product
  })


 .then(response=>{
   console.log(response);
   window.data=response.data;
   setResponse(()=>response.data);
 })

 .catch(e=>
 {
   this.errors.push(e);
 })

};
const clicksix=()=>{
  let product='Cashew'
  axios.post(url,{
   product:product
  })


 .then(response=>{
   console.log(response);
   window.data=response.data;
   setResponse(()=>response.data);
 })

 .catch(e=>
 {
   this.errors.push(e);
 })

};
const clickseven=()=>{
  let product='Cocoa'
  axios.post(url,{
   product:product
  })


 .then(response=>{
   console.log(response);
   window.data=response.data;
   setResponse(()=>response.data);
 })

 .catch(e=>
 {
   this.errors.push(e);
 })

};
const clickeight=()=>{
  let product='Cotton'
  axios.post(url,{
   product:product
  })


 .then(response=>{
   console.log(response);
   window.data=response.data;
   setResponse(()=>response.data);
 })

 .catch(e=>
 {
   this.errors.push(e);
 })

};



  return (
    <div  class="formmain" style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/3543885.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: "no-repeat", height: '808px',
        width: '100%'
      }}>


      <div class="carousell">
        <img class="slide" draggable="false" src="https://images.unsplash.com/photo-1588413336009-1f4219f2d5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvY29udXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <img class="slide" draggable="false" src="https://media.istockphoto.com/photos/dry-betel-nut-betel-palm-picture-id479341228?b=1&k=20&m=479341228&s=170667a&w=0&h=I6pd2okfZGWGLumZEdzsxCfdzcTa90YtRmtDD6nTsa0=" />
        <img class="slide" draggable="false" src="https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpcnklMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        <img class="slide" draggable="false" src="https://images.unsplash.com/photo-1559738928-5d5dc5c2458d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGVnZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        <img class="slide" draggable="false" src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        <img class="slide" draggable="false" src="https://images.unsplash.com/photo-1591801058986-9e28e68670f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZXBwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <img class="slide" draggable="false" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      </div>

      <div className='buycardholder'>

        <h1>Choose the product you are searching for</h1>
        <div className='buycards1'>
          <div className='bc1 bc'>
          <div className="bc1img">
            <img onClick={(e)=>clickone(e)} src="https://media.istockphoto.com/photos/coconuts-with-coconut-flakes-isolated-on-a-white-background-picture-id671504280?k=20&m=671504280&s=612x612&w=0&h=OmwW8-fiK7TEvxeEqNwGxfC8UATjGbN5YwlKibSZDCc="></img>
          </div>
          </div>

          <div className='bc2 bc'>
<div className="bc2img">
            <img onClick={(e)=>clicktwo(e)} src="https://c1.wallpaperflare.com/preview/472/1017/65/areca-nut-palm-seed-areca-palm.jpg" alt="not found"></img>
          </div>
          </div>

          <div className='bc3 bc'>
<div className="bc3img">
            <img onClick={(e)=>clickthree(e)} src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWdnfGVufDB8fDB8fHww&w=1000&q=80" alt="not found"></img>
          </div>
          </div>
          <div className='bc4 bc'>
<div className="bc4img">
            <img onClick={(e)=>clickfour(e)} src="https://media.istockphoto.com/photos/black-pepper-picture-id469858939?b=1&k=20&m=469858939&s=612x612&w=0&h=P6cizRfuU-sf5pbB4JTO9LuNBq1El2nn7aOkCauiZ18="  alt="not found"></img>
          </div>
          </div>



        </div>
        <div className='buycards2 bc'>
          <div className='bc5'>
<div className="bc5img">
            <img onClick={(e)=>clickfive(e)} src="https://media.istockphoto.com/photos/raw-milk-being-poured-into-container-picture-id1297005860?k=20&m=1297005860&s=612x612&w=0&h=cY-FysF35lBL-8WLk7Ppz3n82jony8ucynpsWF46txg=" alt="not found"></img>
          </div>
          </div>

          <div className='bc6 bc'>
<div className="bc6img">
            <img onClick={(e)=>clicksix(e)} src="https://media.istockphoto.com/id/171356441/photo/cashews.jpg?s=612x612&w=0&k=20&c=ixKBUXUafuqtAAgkUYbzZXBA6BrwJNfpGnlQUXjYlq4=" alt="not found"></img>
          </div>
          </div>

          <div className='bc7 bc'>
<div className="bc7img">
            <img onClick={(e)=>clickseven(e)} src="https://media.istockphoto.com/photos/the-cocoa-tree-with-fruits-yellow-and-green-cocoa-pods-grow-on-the-picture-id1160375769?k=20&m=1160375769&s=612x612&w=0&h=mSncPDvBQyi_HXDzysAERpsimc4L_bLeJhsu3422WBo="  alt="not found"></img>
          </div>
          </div>
          <div className='bc8 bc'>
<div className="bc8img">
            <img onClick={(e)=>clickeight(e)} src="https://media.istockphoto.com/id/1284465073/photo/cotton-ball.jpg?s=612x612&w=0&k=20&c=HJ2__FEAcvVbAyMy_31_vBRpSy--LsPR1v3XQhKwuBc=" alt="not found"></img>
          </div>
          </div>
        </div>
       </div>
     
<div>

<table class="table">
  <thead className='thead'>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Number</th>
      <th scope="col">Address</th>
      <th scope="col">Pincode</th>
      <th scope="col">Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>

    </tr>
  </thead>
  <tbody className='tbody'>
      {response?response.map((data)=>{
        return(
          <tr>
          <td scope="row">{data.name}</td>
          <td>{data.number}</td>
          <td>{data.address}</td>
          <td>{data.pincode}</td>
          <td>{data.product}</td>
          <td>{data.quantity}</td>
          <td>{data.price}</td>

        </tr>

        )

      }):<></>}
  </tbody>
</table>




</div>

    </div>
   
    
  )
  
    }
export default Buy