import { ShieldAlert } from 'lucide-react'

const VacancyNotFound = () => {
  return (
    <section className='flex justify-center h-[70vh] flex-col items-center mx-auto my-10 text-blue-500'>
        <ShieldAlert strokeWidth={1} size={100} />
        <p>Вакансия не найдена или случилась ошибка</p>
    </section>
  )
}

export default VacancyNotFound