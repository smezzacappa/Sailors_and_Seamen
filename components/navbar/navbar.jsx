// import React from 'react'
// import Nav from 'react-bootstrap/Nav'
// import Button from 'react-bootstrap/Button'
// import Link from 'next/link'

// export default function Navbar() {
//   return (
//     <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div className="container-xl">
//     <Link href="/">
//       <a className="navbar-brand">Sailors and Seamen</a>
//     </Link>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>

//     <div className="collapse navbar-collapse" id="navbarsExample07XL">
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item active">
//           <Link href="/home">
//             <a className="nav-link">Home</a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link href="/contact">
//             <a className="nav-link">Contact</a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link href="/home">
//             <a className="nav-link">Home</a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link href="/history">
//             <a className="nav-link">History</a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link href="/about">
//             <a className="nav-link">About</a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link href="/rooms">
//             <a className="nav-link">Rooms</a>
//           </Link>
//         </li>
//       </ul>
      
//     </div>
//   </div>
// </Nav>
//   )
// }

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const links = [
  { href: '/', label: ' Home ' },
  { href: '/about', label: ' About ' },
  { href: '/directions', label: ' Directions ' },
  { href: '/history', label: ' History ' },
  { href: '/rooms', label: ' Rooms ' },
  { href: '/calendar', label: ' Calendar ' },
  { href: '/contact', label: ' Contact ' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

 export default function Navigation(){
  return <div>
<Head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
  </Head>
  
  <Navbar expand="md" >
  <Link href="/">
      <a className="navbar-brand">Sailors and Seamen</a>
          </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav " />
  <Navbar.Collapse id="basic-navbar-nav mr-auto">
    <Nav className="ml-auto">
    <ul className="navbar-nav mr-auto">
      {links.map(({ key, href, label }) => (
        <li className="nav-item" key={key}>
          <a className="nav-link" href={href}>{label}</a>
        </li>
      ))}
    </ul>
    </Nav>
    </Navbar.Collapse>
</Navbar>
</div>
 
}

