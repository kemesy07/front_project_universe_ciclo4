import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries';

import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_Rol, Enum_EstadoUsuario } from 'utils/enums';
import PrivateRoute from 'components/PrivateRoute';
import { useUser } from 'context/userContext';

const IndexUsuarios = () => {
  const { data, error, loading } = useQuery(GET_USUARIOS);
  const [dataFiltrada,setDataFiltrada] = useState([])
  
  const {userData} = useUser()

  useEffect(() => {
    if (error) {
      toast.error('Error consultando los usuarios');
    }
  }, [error]);

  useEffect(() => {
    if(data && data.Usuarios){
      if(userData.rol ==="ADMINISTRADOR"){
        setDataFiltrada(data.Usuarios)
      }else if(userData.rol === "LIDER"){
        setDataFiltrada(data.Usuarios.filter(e=>e.rol==="ESTUDIANTE"))
      }else{
        setDataFiltrada([])
      }
    }
  },[data])

  if (loading) return <div>Cargando....</div>;

  return (
    <PrivateRoute roleList={['ADMINISTRADOR', 'LIDER']}>
      <div className='bg-blue-100 '>
        
        <center> <h1 class="text-3xl black-600 font-black "> INFORMACION DE LOS USUARIOS </h1> </center>
        <center><a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/L8PQQtkQ/klipartz-com.png' border='0' alt='klipartz-com' high='400' width='400'/></a> </center>
        <table className='tabla'>
          <thead>
            <tr>
              <th><center>NOMBRE</center></th>
              <th><center>APELLIDOS</center></th>
              <th><center>CORREO</center></th>
              <th><center>IDENTIFICACIÓN</center></th>
              <th><center>ROL</center></th>
              <th><center>ESTADO</center></th>
              <th><center>EDITAR</center></th>
            </tr>
          </thead>
          <tbody>
            {data && data.Usuarios ? (
              <>
                {dataFiltrada.map((u) => {
                  return (
                    <tr key={u._id}>
                      <td>{u.nombre}</td>
                      <td>{u.apellido}</td>
                      <td>{u.correo}</td>
                      <td>{u.identificacion}</td>
                      <td>{Enum_Rol[u.rol]}</td>
                      <td>{Enum_EstadoUsuario[u.estado]}</td>
                      <td>
                        <Link to={`/usuarios/editar/${u._id}`}>
                          <center><i className='fas fa-user-edit fa-2x text-blue-600 hover:text-red-400 cursor-pointer' /></center>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <div>Acceso Restringido</div>
            )}
          </tbody>
        </table>
      </div>

    </PrivateRoute>
      
   );
};

export default IndexUsuarios;
