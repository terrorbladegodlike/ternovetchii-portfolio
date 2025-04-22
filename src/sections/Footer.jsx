const Footer = () => {
   return (
      <footer className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
         <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
         </div>

         <div className='flex gap-3'>
            <div className='social-icon'>
               <a
                  className='cursor-pointer'
                  href='https://github.com/terrorbladegodlike'
               >
                  <img
                     src='/assets/github.svg'
                     alt='github'
                     className='w-6 h-6'
                  />
               </a>
            </div>
            <div className='social-icon'>
               <a
                  className='cursor-pointer'
                  href='https://www.linkedin.com/in/mihail-ternovetchii-6a2030244/'
               >
                  <img
                     src='/assets/linkedin.svg'
                     alt='github'
                     className='w-6 h-6'
                  />
               </a>
            </div>
         </div>

         <p className='text-white-500'>
            © 2025 Mihail Ternovetchii. All rights reserved.
         </p>
      </footer>
   )
}

export default Footer
