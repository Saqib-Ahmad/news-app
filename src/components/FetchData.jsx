import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function FetchData({cat}) {
    const [Data,setData] = useState();

    const fetchData=async()=>{
        await axios.get(
            cat?
            `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=37e87fa0e6c24c26b9a2af581af91df6`
            :"https://newsapi.org/v2/top-headlines?country=in&apiKey=37e87fa0e6c24c26b9a2af581af91df6"
        ).then((resp)=>setData(resp.data.articles));
    }

    // async function fetchData(){
    //     let result = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=37e87fa0e6c24c26b9a2af581af91df6");
    //     result = await result.json();
    //     setData(result.data.articles);
    // }

    useEffect(()=>
    {
        fetchData();
    },[cat])
  return (
    <div className='container my-4'>
        <h1><u>TOP HEADLINES</u></h1>
        <div className='container d-flex justify-content-center align-items-center flex-column my-3' style={{minHeight:"100vh"}}>
        {Data?Data.map((items,index)=><>
        <div className='container my-3 p-3' style={{width:"600px",boxShadow:"2px 2px 10px silver",borderRadius:"10px"}}>
        <h5 className='my-1'>{items.title}</h5>
        <div className='d-flex justify-content-center align-items-center'>
        <img src={items.urlToImage} alt='Image not found' className='img-fluid'
         style={{width:"100%",height:"300px", objectFit:"cover"}}/>
        </div>
        <p className='my-1'>{items.content}</p>
        <Link to={items.url}>View More</Link>
        </div>
        </>
        ):"LOADING..."}</div>
    </div>
  )
}

export default FetchData