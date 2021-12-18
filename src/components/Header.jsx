import { useUser } from 'context/userContext'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const {userData} = useUser()

    console.log(userData)

    return (
        <header className="bg-blue-100 py-2 sticky hidden md:flex justify-end items-center px-4 border-l-2 border-white z-10 font-bold">
            <div className=" bg-blue-100 pb-1">
            <span className="capitalize">{userData.nombre} {userData.apellido}</span> - {userData.rol}
            <i 
            onClick={()=>{navigate(`/usuarios/editar/${userData._id}`)}}
            className="cursor-pointer fas fa-user-cog fa-lg ml-2 h-10 bg-blue-400 rounded-full p-2"></i>
            </div>
        </header>
    )  
}

export default Header