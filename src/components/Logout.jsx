import React from 'react'
import { useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {UserContext} from '../App';
export default function Logout() {
    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate();
    const implementLogout = async () => {
        try {
            const res = await fetch("am-api-production.up.railway.app/logout", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })

            // const data = await res.json();
            dispatch({type:"USER",payload:false});
            navigate("/login");

            if (res.status !== 200) {
                throw new Error(res.error);
            }

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        implementLogout();
    }, []);
    return (
        <>
        </>
    )
}
