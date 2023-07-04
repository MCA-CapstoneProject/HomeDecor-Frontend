import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SuspenseWrapper from '../../lib/utils/routing/SuspenseWrapper';

const ProductsNavbar = () => {

  return (
    <div className='w-full'>
      <div className=''>
        {/* <!-- Main navigation container --> */}
        <nav
          class="flex justify-center items-center  py-2 shadow-lg bg-[#755c5c] text-white">
          <div class="flex w-full flex-wrap items-center  px-3">
            {/* <!-- Collapsible navbar container --> */}
            <div class="mt-2 flex-grow basis-[100%] items-center">
              <ul class="list-style-none flex justify-center space-x-10">
                {/* <!-- Home link --> */}
                <Link to="">
                  <li class="my-4 lg:my-0 lg:pr-2 hover:border-b-[4px]" data-te-nav-item-ref>
                    <a class="active" aria-current="page">
                      Plant decoration
                    </a>
                  </li>
                </Link>
                {/* <!-- Features link --> */}
                <Link to="">
                  <li class="  hover:border-b-[4px]" data-te-nav-item-ref>
                    <a class="p-0 hover:text-neutral-70">
                      Art and Frames</a>
                  </li>
                </Link>
                {/* <!-- Pricing link --> */}
                <Link to="">
                  <li class="  hover:border-b-[4px]" data-te-nav-item-ref>
                    <a class="p-0 hover:text-neutral-70">
                      Interior Lightings</a>
                  </li>
                </Link>
                <Link to="">
                  <li class="hover:border-b-[4px]" data-te-nav-item-ref>
                    <a class="lg:px-2" aria-current="page">Mirrors</a>
                  </li>
                </Link>
                <Link to="">
                  <li class="hover:border-b-[4px]" data-te-nav-item-ref>
                    <a class="lg:px-2" aria-current="page">ShowPiece</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        {/* ProductsNavbar */}
      </div>
    </div>
  )
}

export default ProductsNavbar