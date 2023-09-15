import { useParams, useNavigate } from "react-router-dom";

const Movie = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(navigate);
    return <>
            <h1>Some content {id}</h1>
            <button className="btn" onClick={() => navigate(-1)}>Go back</button>
            <button className="btn" onClick={() => navigate(1)}>Go forward</button>
            </>
    
}
export default Movie;