import cardImg from './images/card1.jpg'


export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 m-20 h-3/6 scale-x-75 scale-y-90'>
      <div className='sm:block'>
        <img className='w-full h-full object-cover' src={cardImg} alt=''/>
      </div>
      <div className='bg-gray-800 flex flex-col justify-center'>
        <form className='max-w-[480px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl dark:text-white font-bold text-center'> SIGN IN</h2>
          <div className='flex flex-col text-gray-300 py-2 '>
            <label>User Name</label>
            <input className='rounded-lg text-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
          </div>
          <div className='flex flex-col text-gray-300 py-2'>
            <label>Password</label>
            <input className='rounded-lg text-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
          </div>
          <div className='flex justify-between text-gray-400 py-2 text-lg'>
            <p className='flex items-center'><input className='mr-2' type="checkbox" />Remeber Me</p>
            <a className='text-teal-500' href='/reset-password'>Forgot Password</a>
          </div>
          <button className='w-full my-5 py-2 bg-teal-500'>Sign In</button>

          <p className='text-gray-300 text-lg'>Don't Have an Account? <a className='text-teal-500' href='/register'>Register Now!!!</a></p>
        </form>
      </div>
    </div>
  )
}
