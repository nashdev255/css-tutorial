import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className='h-24 w-full bg-teal-300 flex items-center'>
        <nav className='w-full mx-10 flex justify-between'>
          <h3 className='font-bold text-3xl'>Hello, World</h3>
          <ul className='space-x-4 flex items-center'>
            <li>OOH</li>
            <li>EEH</li>
            <li>OOHAHAAH</li>
          </ul>
        </nav>
      </header>
      <main className='flex'>
        <div className='h-48 w-48 bg-slate-500 flex items-center justify-center'>
          <p>bg-slate-500</p>
        </div>
        <div className='flex-col'>
          <div className='h-24 w-48 bg-lime-300 flex items-center justify-center'>bg-lime-300</div>
          <div className='h-24 w-48 bg-green-400 flex items-center justify-center'>bg-green-400</div>
        </div>
        <div className='h-48 w-full bg-sky-400 flex items-center justify-center'>bg-sky-400</div>
      </main>
      <div className=''>
        <div className='h-24 w-full space-x-4 bg-indigo-600 flex items-center justify-center'>
          <h1>404 Not Found</h1>
          <h1>504 Gateway Timeout</h1>
        </div>
        <div className="bg-slate-700 flex justify-center">
          <div className='px-4  bg-red-300 inline-block'>
            <h4 className='text-center'>Click here</h4>
          </div>
        </div>
      </div>
      <footer className='h-24 w-full bg-purple-400 flex items-center'>
        <div className='w-full mx-10 flex justify-between'>
          <div>{ new Date().getFullYear() } &copy; Hello, World</div>
          <div>Build with <Link href={'./'}>nashdev255</Link></div>
        </div>
      </footer>
    </>
  );
}
