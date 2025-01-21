import { Card } from "../components/ui/card";
import FilterBar from "../components/Vacancies/FilterBar"
import VacancyList from "../components/Vacancies/VacancyList"
import { useGetAll } from "../hooks/useVacancys";

const HomePage = ({ isAuth }: { isAuth: boolean }) => {
  const { data, error, isLoading } = useGetAll();
  return (
    <main className="w-full md:w-[80%] lg:w-[75%] my-10 mx-auto flex">
        <div className="w-[45%] mr-5 hidden lg:block">
          <Card>
            <FilterBar />
          </Card>
        </div>
        <VacancyList isAuth={isAuth} vacancies={data?.items} error={error} isLoading={isLoading}/>
    </main>
  )
}

export default HomePage