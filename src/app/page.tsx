import { } from 'react'
import { Home as Homeicon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'

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

          <div className='grid grid-cols-3 gap-4'>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/30praum.jpg" width={104} height={104} alt="Capa de Álbum" />
              <strong>30 praum</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Cabelinho.jpg" width={104} height={104} alt="Capa de Álbum" />
              <strong>Little Love</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Pericao.jpg" width={104} height={104} alt="Capa de Álbum" />
              <strong>Pagode do Pericão</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Podpah.jpg" width={104} height={104} alt="Capa de Álbum" />
              <strong>PodPah</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/To Be.jpg" width={104} height={104} alt="Capa de Álbum" />
              <strong>To Be Nova York</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/Wiu.jpg" width={104} height={104} alt="Capa de Álbum" />
              <strong>Manual de Como Amar Errado</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Gabriel Henrique</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded-nd flex flex-col gap-2 hover:bg-white/10 '>
              <Image src="/30praum.jpg" className='w-full' width={120} height={120} alt="Capa de Álbum" />
              <strong className='font-semibold'>30 Praum</strong>
              <span className='text-sn text-zinc-400'>Matuê, Teto, Wiu</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-nd flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Cabelinho.jpg" className='w-full' width={120} height={120} alt="Capa de Álbum" />
              <strong className='font-semibold'>Little Love</strong>
              <span className='text-sn text-zinc-400'>MC Cabelinho</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-nd flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Pericao.jpg" className='w-full' width={120} height={120} alt="Capa de Álbum" />
              <strong className='font-semibold'>Pagode do Pericão</strong>
              <span className='text-sn text-zinc-400'>Péricles</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-nd flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/To be.jpg" className='w-full' width={120} height={120} alt="Capa de Álbum" />
              <strong className='font-semibold'>To Be Nova Iork</strong>
              <span className='text-sn text-zinc-400'>Henrique & Juliano</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-nd flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/Wiu.jpg" className='w-full' width={120} height={120} alt="Capa de Álbum" />
              <strong className='font-semibold'>Manual de Como Amar Errado</strong>
              <span className='text-sn text-zinc-400'>Wiu, 30 Praum</span>
            </a>

          </div>

        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/PH.jpg" width={56} height={56} alt="Capa da Musica" />
          <div className="flex flex-col">
            <strong className="font-normal">Tenho que me Decidir</strong>
            <span className="text-xs text-zinc-400">MC PH, Borges, WIU, Pedro Lotto, WEY</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500">1:15</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-500">3:31</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={15} />
          <LayoutList size={15} />
          <Laptop2 size={15} />
          <div className="flex items-center gap-2">
            <Volume size={15} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={15} />
        </div>
      </footer >
    </div >
  )
}
