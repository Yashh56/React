// "use client"
// import React, { useState } from 'react';

// const App = () => {
//   const [marks, setmarks] = useState(90)
//   return (
//     <>
//     <h1>Zoro's Marks is:{marks}</h1>
//     <button onClick={() =>{setmarks(55)
//     }}>Update</button>
//     </>  
//   )
// }
// export default App



// import React from 'react'
// import Header from './Components/Header'
// const App = () => {
//   return (
//     <>
//     <Header />
//     <h1>Hello World!</h1>
//     </>
//   )
// }

// export default App


import React from 'react'
// import Link from 'node/link'
// import { Link } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      {/* <a href="/About">About</a> */}
      <a href='/Products'>Products</a>
      {/* <Link href='/About'>About</Link> */}
    </div>
  )
}

export default App