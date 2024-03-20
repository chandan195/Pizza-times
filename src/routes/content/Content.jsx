//import React from 'react'

import { useEffect } from "react"

const Content = () => {
  useEffect (()=>{
document.title="Pizza Time || Content"
  })
  return (
    <div className="mx-auto w-full max-w-screen-xl  py-12 lg:pt-14">
    <div className="md:flex md:justify-between">
      <div className="bg-white about  py-14 lg:px-8 ">
      <h1 className="center">Pizza Time || content</h1>
      </div>
    </div>
  </div>
  )
}

export default Content