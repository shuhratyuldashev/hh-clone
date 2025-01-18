import FilterBar from "../components/Vacancies/FilterBar"
import VacancyList from "../components/Vacancies/VacancyList"

const HomePage = () => {
  return (
    <main className="w-[75%] my-10 mx-auto flex">
        <FilterBar />
        <VacancyList />
    </main>
  )
}

export default HomePage