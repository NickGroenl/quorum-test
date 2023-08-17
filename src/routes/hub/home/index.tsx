import { useNavigate } from "react-router-dom";
import NavbarHub from "../components/navbar"
import { getStore } from "../../../hooks/store/user.slice";
import { useAppSelector } from "../../../hooks/store/store";
import { useEffect } from "react";

const HomeHub = () => {
    const {user} = useAppSelector(getStore);
    const navigate = useNavigate();
    useEffect(() => {

        if(user._id === ""){
            navigate('/login', {replace: true});
        }
    }, []);
    return (
    <>
        <NavbarHub/>
    </>
    )
}

export default HomeHub;