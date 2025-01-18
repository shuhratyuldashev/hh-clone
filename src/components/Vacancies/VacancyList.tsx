import { useGetAll } from "../../hooks/useVacancys";
import VacanciesSkeleton from "./VacanciesSkeleton";
import VacancyCard from "./VacancyCard";
import VacancyNotFound from "./VacancyNotFound";

const VacancyList = () => {
  const { data, error, isLoading } = useGetAll();

  if (isLoading) return <VacanciesSkeleton />;
  if (error) return <VacancyNotFound />;

  const vacancies = data.items

  return (
    <div className="flex flex-col gap-2">
      {vacancies.length !== 0 ?
        vacancies.map((el: any) => (
          <VacancyCard key={el.id} vacancy={el}/>
        ))
      :(
        <h1>Two</h1>
      )}
    </div>
  );
}

export default VacancyList;