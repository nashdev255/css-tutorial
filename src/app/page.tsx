import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='h-24 w-full bg-teal-300 flex items-center justify-center'>
        <nav className='justify-between'>
          <h3 className='bg-red-300 font-bold text-3xl'>Hello, World</h3>
          <ul>
            <li>OOH</li>
            <li>EEH</li>
            <li>OOHAHAAH</li>
          </ul>
        </nav>
      </header>
      <div className='flex'>
        <div className='h-48 w-48 bg-slate-500 flex items-center justify-center'>
          <p>bg-slate-500</p>
        </div>
        <div className='flex-col'>
          <div className='h-24 w-48 bg-lime-300'>bg-lime-300</div>
          <div className='h-24 w-48 bg-green-400'>bg-green-400</div>
        </div>
      </div>
    </>
  )
}
