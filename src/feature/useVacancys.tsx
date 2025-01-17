import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllVacancys = async() => {
    const response = await axios.get('https://api.hh.uz/vacancies/');
    return response.data;
}

const useGetAll = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['vacancys'], 
        queryFn: getAllVacancys
    });

    return { data, error, isLoading };
}

export { useGetAll }