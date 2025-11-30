import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const[data,useData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/V7-Vinay')
    //     .then(resp=>resp.json())
    //     .then(data=>{
    //         useData(data)
    //     })
    // })
  return (
    <div>
      Github followers:{data.followers}
    </div>
  )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/V7-Vinay')
    return response.json()
}