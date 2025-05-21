import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


const ErrorPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/")
    })
    return (
        <div>Error 404! Incorrect Address!!!</div>
    )
}
export default ErrorPage