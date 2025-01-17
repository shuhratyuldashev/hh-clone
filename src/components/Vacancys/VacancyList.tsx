import { useGetAll } from "../../feature/useVacancys";
import VacancyCard from "./VacancyCard";

const VacancyList = () => {
  const { data, error, isLoading } = useGetAll();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  const vacancies = data.items

  return (
    <div>
      {vacancies.length !== 0 ?
        vacancies.map((el) => (
          <VacancyCard />
        ))
      :(
        <h1>Two</h1>
      )}
    </div>
  );
}

export default VacancyList;