import React, { useState } from 'react';
import CurrencyInput from "react-currency-input-field";

function AddProduct() {
  const prefix ="Rs. " ;
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    const { value = "" } = e.target;
    const parsedValue = value.replace(/[^\d.]/gi, "");
    setValue(parsedValue);
  };

  const handleOnBlur = () => setValue(Number(value).toFixed(2));
  return (
    <div class="flex h-screen items-center justify-center">
    <div className='grid w-2/5'>
      <input className='outline-none border-b-2 text-gray-500' type="text" placeholder='Enter Product Name' />
      <input className='outline-none border-b-2 mt-8 text-gray-500' type="textarea" placeholder='Enter Product Details' />
      <select className="form-select outline-none text-gray-400 border-b-2 mt-8">
            <option selected value="Select Category">Select Category</option>
            <option value="Vases">Vases</option>
            <option value="Planters">Planters</option>
            <option value="Lights">Lights</option>
            <option value="PhotoFrames">Photo Frames</option>
            <option value="Mirrors">Mirrors</option>
        </select>
        <div className='text-gray-500 my-8 border-b-2'>
        <CurrencyInput className='outline-none'
        prefix={prefix}
        name="currencyInput"
        id="currencyInput"
        data-number-to-fixed="2"
        data-number-stepfactor="100"
        placeholder="Enter Amount"
        onChange={handleChange}
        onBlur={handleOnBlur}
        allowDecimals
        decimalsLimit="2"
        disableAbbreviations
      />
      </div>
      <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
      </label>
      <div className=''>
      <button className='bg-emerald-500 my-8 text-xs rounded-xl float-right mr-24 px-10 py-2' type="button">Upload</button>
      </div>
      </div>
  </div> 
  
  )
}

export default AddProduct