import VacancyList from '../components/Vacancies/VacancyList'
import { useGetAll } from '../hooks/useVacancys';

const FavoritesPage = () => {
    const { data, error, isLoading } = useGetAll();

    return (
        <main className="w-full md:w-[80%] lg:w-[75%] my-10 mx-auto flex">
            <VacancyList vacancies={data?.items} error={error} isLoading={isLoading}/>
        </main>
    )
}

export default FavoritesPage