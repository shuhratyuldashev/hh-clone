import { ShieldX } from "lucide-react"


const NotFound = () => {
  return (
    <main>
       <section className='flex h-[70vh] justify-center flex-col items-center mx-auto my-10 text-blue-500'>
        <ShieldX strokeWidth={1} size={100} />
        <p>Страница не доступна или не найдена</p>
    </section>
    </main>
  )
}

export default NotFound