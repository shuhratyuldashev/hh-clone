import { Link, useParams } from "react-router-dom"
import VacancyFullInfo from "../components/Vacancies/VacancyFullInfo"
import { useGetVacancy } from "../hooks/useVacancys"
import VacancyNotFound from "../components/Vacancies/VacancyNotFound"
import { Skeleton } from "../components/ui/skeleton"

const VacancyPage = ({ isAuth }: { isAuth: boolean }) => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetVacancy(id)

  if(isLoading) return <Skeleton className="w-[75%] h-[600px] my-[50px] mx-auto"/>
  if(error) return <VacancyNotFound />
  
  console.log(data)
  return (
    <main className="md:w-[75%] my-10 mx-auto">
      <Link to="/" className="text-[20px] px-4 text-blue-500">Назад</Link>
      {!data ?  
        <Skeleton className="w-full h-[600px]"/>
      :       
        <VacancyFullInfo isAuth={isAuth} vacancy={data}/>
      }
    </main>
  )
}

export default VacancyPage