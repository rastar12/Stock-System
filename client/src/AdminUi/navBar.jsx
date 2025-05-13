import React from 'react'
import Logo from "../assets/1.png"
import { Link } from 'react-router-dom';

export default function NavBar() {

  const NavbarMenu = [
    { id: 1, title: "Add Stock", link: "/" },
    { id: 2, title: "Accounts", link: "/Courses" },
    { id: 3, title: "Transact", link: "/Testimonials" },
    { id: 4, title: "View Stock", link: "/About" },

  ];
  return (
    <nav className='fixed  w-full bg-black opacity-75 flex py-3'>
      <div className=''>
    
        <p className="font-extrabold text-2xl text-white">Mbale detergents</p>
      </div>
      <div className="hidden md:block ml-5">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="inline-block text-base font-semibold py-2 px-3 uppercase text-white"
                
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>     
        </div>



    </nav>
  )
}
