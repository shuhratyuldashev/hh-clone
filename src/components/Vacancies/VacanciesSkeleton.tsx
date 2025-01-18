import { Skeleton } from '../ui/skeleton'

const VacanciesSkeleton = () => {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <Skeleton className='w-full h-[230px] rounded-md'/>
        <Skeleton className='w-full h-[230px] rounded-md'/>
        <Skeleton className='w-full h-[230px] rounded-md'/>
    </div>
  )
}

export default VacanciesSkeleton