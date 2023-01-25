import React from 'react'
import { Link } from 'react-router-dom'

const hoverLink = "hover:text-blue-500";

function Footer() {
  return (
    <>
    <div className='flex text-justify px-20 py-5 justify-around items-start gap-20 text-sm'>
        <div className='Categories flex flex-col border'>
            <h6 className='font-bold pb-5'>Categories</h6>
            <Link className={hoverLink} to="products/:1">Men</Link>
            <Link className={hoverLink} to="products/:2">Women</Link>
            <Link className={hoverLink} to="products/:3">Children</Link>
            <Link className={hoverLink} to="products/:4">Accessories</Link>
            <Link className={hoverLink} to="products/:5">New Arrivals</Link>
        </div>

        <div className='Links flex flex-col  text-justify border'>
            <h6 className='font-bold pb-5 '>Links</h6>
            <Link className={hoverLink} to="products/:1">FAQ</Link>
            <Link className={hoverLink} to="products/:2">Pages</Link>
            <Link className={hoverLink} to="products/:3">Stores</Link>
            <Link className={hoverLink} to="products/:4">Compare</Link>
            <Link className={hoverLink} to="products/:5">Cookies</Link>
            <Link className={hoverLink} to="products/:5">Contact Us</Link>
        </div>

        <div className='flex justify-center gap-20'>
            <div className='about'>
            <h6 className='font-bold pb-5'>About</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequuntur 
                natus accusamus ullam dignissimos aperiam numquam odit vero aliquid, impedit 
                ratione minus atque doloribus architecto ipsum pariatur adipisci maxime possimus!
            </p>
            </div>

            <div className='Contact'>
            <h6 className='font-bold pb-5'>Contact</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem consequuntur 
                natus accusamus ullam dignissimos aperiam numquam odit vero aliquid, impedit 
                ratione minus atque doloribus architecto ipsum pariatur adipisci maxime possimus!
            </p>
            </div>
        </div>

    </div>
    <div className='flex justify-between items-center p-5 px-20 list-none w-full top-0 bg-slate-100 drop-shadow-md'>
        <div className='flex gap-2'>
            <h3 className='font-bold text-blue-500'>Lamastore</h3>
            <p> <span className='text-xs'>©</span>Copyright 2023. All Rights Reserved</p>
        </div>
        <div>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt="payment system" />
        </div>
    </div>
    </>
  )
}

export default Footer