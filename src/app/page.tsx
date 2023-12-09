import { } from 'react'
import { Home as Homeicon, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full '></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full '></div>
            <div className='w-3 h-3 bg-green-500 rounded-full '></div>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 '>
              <Homeicon />
              Home</a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search</a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library</a>
          </nav>
          <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3 '>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Creme</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Esquenta Sertanejo</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Coleção Pagode</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Pisa e Sofre</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brasil</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Funk Hits</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>This is Ferrugem</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Forró Raiz</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Paredão Explode</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>HOT HITS</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40  p-2'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40  p-2'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
        </main>
      </div>
      <footer className="bg-zinc-800 border-zinc-700 p-6 ">
        footer
      </footer>
    </div>
  )
}
