import { Link, useParams } from "react-router-dom"
import VacancyFullInfo from "../components/Vacancies/VacancyFullInfo"
import { useGetVacancy } from "../hooks/useVacancys"
import VacancyNotFound from "../components/Vacancies/VacancyNotFound"

const VacancyPage = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetVacancy(id)

  if(isLoading) {return <h1>Загрузка...</h1>}
  if(error) {return <VacancyNotFound />}
  
  console.log(data)
  return (
    <main className="w-[75%] my-10 mx-auto">
      <Link to="/" className="text-[20px] text-blue-500">Назад</Link>
      <VacancyFullInfo vacancy={data}/>
    </main>
  )
}

export default VacancyPage