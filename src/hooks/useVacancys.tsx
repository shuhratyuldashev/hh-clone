import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const API_URL = process.env.HH_API_URL

const getAllVacancys = async() => {
    const response = await axios.get(`https://api.hh.uz/vacancies/`);
    return response.data;
}

const getVacancyById = async(id: number) => {
    const response = await axios.get(`https://api.hh.uz/vacancies/${id}`)
    return response.data
}

const useGetAll = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['vacancies'], 
        queryFn: getAllVacancys
    });

    return { data, error, isLoading };
}


const useGetVacancy = (id: number) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["vacancy"],
        queryFn: () => getVacancyById(id)
    })

    return { data, error, isLoading }
}

export { useGetAll, useGetVacancy }