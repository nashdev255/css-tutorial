import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='h-24 w-full bg-teal-300 flex items-center'>
        <nav className='w-full mx-10 flex justify-between'>
          <h3 className='bg-red-300 font-bold text-3xl'>Hello, World</h3>
          <ul className='space-x-4 flex items-center'>
            <li className='bg-slate-300'>OOH</li>
            <li className='bg-slate-300'>EEH</li>
            <li className='bg-slate-300'>OOHAHAAH</li>
          </ul>
        </nav>
      </header>
      <div className='flex'>
        <div className='h-48 w-48 bg-slate-500 flex items-center justify-center'>
          <p>bg-slate-500</p>
        </div>
        <div className='flex-col'>
          <div className='h-24 w-48 bg-lime-300 flex items-center justify-center'>bg-lime-300</div>
          <div className='h-24 w-48 bg-green-400 flex items-center justify-center'>bg-green-400</div>
        </div>
        <div className='h-48 w-full bg-sky-400 flex items-center justify-center'>bg-sky-400</div>
      </div>
      <footer className='h-24 w-full bg-purple-400 flex items-center'>
        <div className='w-full mx-10 flex justify-between'>
          <div>{ new Date().getFullYear() } &copy; Hello, World</div>
          <div>Build with nashdev255</div>
        </div>
      </footer>
    </>
  )
}
