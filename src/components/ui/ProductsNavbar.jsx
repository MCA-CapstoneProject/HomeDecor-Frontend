import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SuspenseWrapper from '../../lib/utils/routing/SuspenseWrapper';

const ProductsNavbar = () => {

  return (
    <div className='w-full'>
      <div className=''>
        {/* <!-- Main navigation container --> */}
        <nav
          class="flex justify-center items-center py-1 px-1 shadow-lg bg-[#755c5c] text-white">
          <div class="flex w-full flex-wrap items-center justify-center">
            {/* <!-- Collapsible navbar container --> */}
            <div class="mt-2 flex-grow basis-[100%] items-center">
              <ul class="list-style-none flex justify-center space-x-10">
                {/* <!-- Home link --> */}
                <Link to="/shop/plant-decor">
                  <li class="" data-te-nav-item-ref>
                    <a class="duration-150 border-b-[3px] border-transparent hover:border-[#c66b16]" aria-current="page">
                      Plant decoration
                    </a>
                  </li>
                </Link>
                {/* <!-- Features link --> */}
                <Link to="/shop/frames">
                  <li class="">
                    <a class="duration-150 border-b-[3px] border-transparent hover:border-[#c66b16]">
                      Art and Frames</a>
                  </li>
                </Link>
                {/* <!-- Pricing link --> */}
                <Link to="/shop/lights">
                  <li class="">
                    <a class="duration-150 border-b-[3px] border-transparent hover:border-[#c66b16]">
                      Interior Lightings</a>
                  </li>
                </Link>
                <Link to="/shop/mirrors">
                  <li class="" >
                    <a class="duration-150 border-b-[3px] border-transparent hover:border-[#c66b16]" aria-current="page">Mirrors</a>
                  </li>
                </Link>
                <Link to="/shop/showpiece">
                  <li class="" data-te-nav-item-ref>
                    <a class="duration-150 border-b-[3px] border-transparent hover:border-[#c66b16]" aria-current="page">ShowPieces</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default ProductsNavbar