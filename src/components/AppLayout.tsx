import Sider from '@/components/Sider'
import { ReactNode } from 'react'
import Contact from '@/components/Contact'

// Wrapper App
export default function AppLayout({ children, hideContact }: { children: ReactNode; hideContact?: boolean }) {
  return (
    <div className='flex flex-row xl:container mx-auto h-full gap-0 lg:gap-4 xl:gap-8'>
      <Sider />
      <div
        className='
            overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-200
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-400
            flex-1 w-full md:w-auto md:border-l lg:border-r 
            bg-neutral-100 h-full md:overflow-y-auto'
      >
        {children}
      </div>
      {!hideContact && <Contact />}
    </div>
  )
}
