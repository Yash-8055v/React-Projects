import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Yash-Karande")
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data);
  //     })
  // }, [])

  return (

    <div className='text-center text-3xl m-4 p-7 bg-gray-700 text-white  '>

      <div className='mx-auto'>Github Followers: {data.followers}</div>
      <img className=' mx-auto mt-5' src={data.avatar_url} width={300} alt="github profile image" />
      
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Yash-Karande')
  return response.json()
}