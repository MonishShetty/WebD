import axios from 'axios';
import React,{useState} from 'react'


export default function Labourdb() {
    const url='http://localhost:5000/laboursearch';
    const [response,setResponse]=useState([]);

    const laboursearch1=()=>{
      const city='Bantwal';
       axios.post(url,{
        city:city
       })
      .then(response=>{
        console.log(response);
        window.data=response.data;
        setResponse(()=>response.data);
      })

      .catch(err=>{
        this.erors.push(err)
      })
    }

    const laboursearch2=()=>{
      const city='Mangalore';
       axios.post(url,{
        city:city
       })
      .then(response=>{
        console.log(response);
        window.data=response.data;
        setResponse(()=>response.data);
      })

      .catch(err=>{
        this.erors.push(err)
      })
    }

    const laboursearch3=()=>{
      const city='Puttur';
       axios.post(url,{
        city:city
       })
      .then(response=>{
        console.log(response);
        window.data=response.data;
        setResponse(()=>response.data);
      })

      .catch(err=>{
        this.erors.push(err)
      })
    }

    const laboursearch4=()=>{
      const city='Sullia';
       axios.post(url,{
        city:city
       })
      .then(response=>{
        console.log(response);
        window.data=response.data;
        setResponse(()=>response.data);
      })

      .catch(err=>{
        this.erors.push(err)
      })
    }

    const laboursearch5=()=>{
      const city='Udupi';
       axios.post(url,{
        city:city
       })
      .then(response=>{
        console.log(response);
        window.data=response.data;
        setResponse(()=>response.data);
      })

      .catch(err=>{
        this.erors.push(err)
      })
    }

  return (
    <div class="formmain" style={{
      backgroundImage: "url('https://wallpaperaccess.com/full/3543885.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: "no-repeat", height: '808px',
      width: '100%'
    }}>
       <div className='lsearch'>Click on the city and view applied labourers detail around that city</div>
      <div class="container">
        <div className='placecard1' onClick={e=>laboursearch1(e)}>
          <img className='placeimg' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/6e/1c/f9/bottom-of-the-hill-lake.jpg?w=500&h=300&s=1" alt="" />
          <h3 className='placeheading'>Bantwal</h3>
        </div>
        <div className='placecard2' onClick={e=>laboursearch2(e)}>
          <img className='placeimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTKchDfCGs00Cvf_YIZNm2ecpi89lzKyf2ug&usqp=CAU" alt="" />
          <h3 className='placeheading'> Mangalore</h3>
        </div>
        <div className='placecard3' onClick={e=>laboursearch3(e)}>
          <img className='placeimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4SC3Pxgg_Am2vyHLOhYDvGv3xQehJ6MSHEuhqpD9sLOtMpzbggxDE7NzqOc_5no2WjuY&usqp=CAU" alt="" />
          <h3 className='placeheading'>Puttur</h3>
        </div>
        <div className='placecard4' onClick={e=>laboursearch4(e)}>
          <img className='placeimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgowOScgidgK5Hcs6G0xVQpSPu3052cdY_G0JM4G1MjNfqMYDE-Dw8BC6OMpDKsBmiAw&usqp=CAU" alt="" />
          <h3 className='placeheading'>Sullia</h3>
        </div>
        <div className='placecard5' onClick={e=>laboursearch5(e)}>
          <img className='placeimg' src="https://upload.wikimedia.org/wikipedia/commons/d/da/Udupi_Krishna_Temple.jpg" alt="" />
          <h3 className='placeheading'>Udupi</h3>
        </div>
      </div> 

      <table class="table table2">
     <thead className='thead'>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Number</th>
      <th scope="col">Address</th>
      <th scope="col">Pincode</th>
    </tr>
  </thead>
  <tbody className='tbody'>
      {response?response.map((data)=>{
        return(
          <tr>
          <td scope="row">{data.name}</td>
          <td>{data.age}</td>
          <td>{data.number}</td>
          <td>{data.address}</td>
          <td>{data.pincode}</td>         
        </tr>

        )

      }):<></>}
  </tbody>
</table>


    </div>
  )
}
