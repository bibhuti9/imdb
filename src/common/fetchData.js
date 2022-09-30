import { movies } from '../dummyData';

export const fetchData = (searchData) => {
    const filterValue = movies.filter((val, index) => {
        return val.type.includes(searchData)
    })
    return filterValue;
}


export const searchMovie = (searchValue) => {
    const searchData = movies.filter((val, index) => {
        return val.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    return searchData;
}