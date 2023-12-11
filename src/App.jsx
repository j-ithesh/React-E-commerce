import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [drawerVisible, setdrawerVisible] = useState(false)
  return (
    <div className='relative'>
      <div className={`fixed top-0 right-0 w-9/12 h-full ${drawerVisible?'translate-x-0':'translate-x-full'} bg-white shadow-2xl flex flex-col justify-center items-center`}>
        <button className='absolute top-6 right-6'onAuxClick={()=>{setdrawerVisible(false)}}>
          <img src="/icons/close.svg" alt="" />
        </button>
       <nav>
        <ul className='flex flex-col items-center'>
          <li className='p-4'>
            <a href="">Home</a>
          </li>
          <li  className='p-4'>
            <a href="">About</a>
          </li>
          <li className='p-4'>
            <a href="">Products</a>
          </li>
          <li className='p-4'>
            <a href="">Contact</a>
          </li>
        </ul>
       </nav>
      </div>
      <header className='flex flex-row justify-between items-center shadow-lg h-20 p-4'>
        <span className='text-lg text-orange-600 font-bold'>MYNTRA</span>
        <nav className='hidden lg:block'>
          <ul className='flex flex-row gap-x-6'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Products</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
        <div className='flex flex-row gap-4'>
        <a href='#'>
          <div className='flex flex-row '>
            <img className='w-6 h-6' src='/icons/cart.svg' alt=''/>
            <span className='text-xs text-green-600 font-bold '>0</span>
          </div>
        </a>
        <button className='lg:hidden' onClick={()=>{setdrawerVisible(true)}}>
        <img className='w-6 h-6' src='/icons/menu.svg' alt=''/>
        </button>
        </div>
      </header>
      <main className='py-8 px-4 container mx-auto'>
        <section>
         <h2 className='text-xl font-bold'>Recommented Products</h2>
         <ul className='mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6'>
          <li>
            <img className='w-full object-contain object-center' src="https://img101.urbanic.com/v1/goods-pic/c2a337f3a90141e9904abc5e502a2d53UR_w1440_q90.webp" alt="" />
            <h3>Buttoned Knit Cardigan</h3>
            <span>&#8377;1689</span>
          </li>
          <li>
            <img  className='w-full object-contain object-center' src="https://img101.urbanic.com/v1/goods-pic/699f10dc6f4f42bea5bd5618c29f2aecUR_w1440_q90.webp" alt="" />
            <h3>Buttoned Knit Cardigan</h3>
            <span>&#8377;1999</span>
          </li>
          <li>
            <img className='w-full object-contain object-center' src="https://img101.urbanic.com/v1/9927b1d5e2664f028937e1dd9c0ef1c2.webp" alt="" />
            <h3>Buttoned Knit Cardigan</h3>
            <span>&#8377;1899</span>
          </li>
          <li>
            <img className='w-full object-contain object-center' src="https://img101.urbanic.com/v1/c11a81c726df4c01b0f9de443e3b0f9a.webp" alt="" />
            <h3>Buttoned Knit Cardigan</h3>
            <span>&#8377;1709</span>
          </li>
          <li>
            <img className='w-full object-contain object-center' src="https://img101.urbanic.com/v1/goods-pic/8427dbd73fdd4e239fde6ae28aee77a3UR.webp" alt="" />
            <h3>Buttoned Knit Cardigan</h3>
            <span>&#8377;1399</span>
          </li>
          <li>
            <img className='w-full object-contain object-center' src="https://img101.urbanic.com/v1/goods-pic/018f815cd8e54b95803026fe1dd034baUR_w750_q90.webp" alt="" />
            <h3>Buttoned Knit Cardigan</h3>
            <span>&#8377;1690</span>
          </li>
          <li>
            <img className='w-full object-contain object-center' src="https://img101.urbanic.com/v1/goods-pic/68936db9b052412b93c908bbbc841c7bUR_w750_q90.webp" alt="" />
            <h3>Buttoned Knit Cardigan</h3>
            <span>&#8377;1590</span>
          </li>
          <li>
            <img className='w-full object-contain object-center' src="https://img101.urbanic.com/v1/goods-pic/10e9c5510f0d47ceb67fff16684d41aaUR_w750_q90.webp" alt="" />
            <h3>Buttoned Knit Cardigan</h3>
            <span>&#8377;1670</span>
          </li>
          <li>
            <img className='w-full object-contain object-center' src="https://img101.urbanic.com/v1/goods-pic/4690b46536384db08ee80e0549ef5e29UR_w750_q90.webp" alt="" />
            <h3>Buttoned Knit Cardigan</h3>
            <span>&#8377;1769</span>
          </li>
          <li>
            <img className='w-full object-contain object-center' src="https://img101.urbanic.com/v1/goods-pic/8b78bf925dc744318a6ffe9bf9a4f597UR_w750_q90.webp" alt="" />
            <h3>Buttoned Knit Cardigan</h3>
            <span>&#8377;1800</span>
          </li>
         </ul>
        </section>
      </main>
      <footer></footer>
      
    </div>
  )
}

export default App
