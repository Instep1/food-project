import {useState, useEffect} from 'react'
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader/Preloader';
import CategoriesList from '../components/CategoriesList/CategoriesList';

const Home = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
        })
    }, [])
    return (
        <>
        {
            !catalog.length ? <Preloader/> :
            <CategoriesList catalog={catalog}/>
        }
       </>
    )
}

export default Home;