import PaginationVacancies from "./Pagination";
import VacanciesSkeleton from "./VacanciesSkeleton";
import VacancyCard from "./VacancyCard";
import VacancyNotFound from "./VacancyNotFound";

const VacancyList = ({ vacancies, error, isLoading, isAuth }: { vacancies: any, error: any, isLoading: any, isAuth: boolean}) => {

  if (isLoading) return <VacanciesSkeleton />;
  if (error) return <VacancyNotFound />;


  return (
    <section className="flex flex-col gap-2">
      {vacancies.length !== 0 ?
        vacancies.map((el: any) => (
            <VacancyCard isAuth={isAuth} key={el.id} vacancy={el}/>
        )
      )
      :(
        <h1>Two</h1>
      )}
      <PaginationVacancies />


    </section>
  );
}

export default VacancyList;