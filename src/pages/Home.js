import {useState, useEffect} from 'react'
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader/Preloader';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import Search from '../components/Search/Search';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('search') || '';

    const handleSearch = (str) => {
        setSearchParams({search: str})
        setFilteredCatalog(
            catalog.filter(item => {
                return item.strCategory.toLowerCase().includes(str.toLowerCase())
            })
        )
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog( searchQuery ? data.categories.filter(item => item.strCategory.toLowerCase().includes(searchQuery)) : data.categories);
        })
    }, [searchQuery])
    return (
        <>
        <Search cb={handleSearch}/>
        {
            !catalog.length ? <Preloader/> :
            <CategoriesList catalog={filteredCatalog}/>
        }
       </>
    )
}

export default Home;