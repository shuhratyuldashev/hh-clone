import { Tooltip, TooltipContent } from './ui/tooltip'
import { Button } from './ui/button'
import { Github, Send } from 'lucide-react'
import { TooltipTrigger } from './ui/tooltip'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center sm:justify-between sm:flex-row border-t-[2px] border-blue-100 dark:border-slate-900 p-4 w-[80%] mt-4 mx-auto'>
       <div>
        <Tooltip>
                <TooltipTrigger>
                    <Link to="https://github.com/shuhratyuldashev/hh-clone">
                        <Button variant="ghost" className='hover:text-blue-700 hover:bg-blue-100 dark:hover:bg-slate-900 text-blue-500 dark:text-blue-700 dark:hover:text-blue-500'><Github /></Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent className='bg-blue-500 rounded-md text-white px-4 py-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-500 duration-300'>
                    <p>Github</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger>
                    <Button variant="ghost" className='hover:text-blue-700 hover:bg-blue-100 dark:hover:bg-slate-900 text-blue-500 dark:text-blue-700 dark:hover:text-blue-500'><Send /></Button>
                </TooltipTrigger>
                <TooltipContent className='bg-blue-500 rounded-md text-white px-4 py-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-500 duration-300'>
                    <p>Telegram: @YSH2009UZ</p>
                </TooltipContent>
            </Tooltip>
       </div> 
       <p className='text-blue-500 dark:text-blue-700'><span className='font-semibold'>SuperHunter</span> clone a <Link className='hover:underline duration-300' to="https://tashkent.hh.uz/">HeadHunter</Link></p>
    </footer>
  )
}

export default Footer