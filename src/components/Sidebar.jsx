import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/authContext';
import PrivateComponent from './PrivateComponent';
import { useUser } from 'context/userContext';

const SidebarLinks = () => {
  return (
    <ul className='mt-12 font-bold'>
        
          
          <SidebarRoute to='' title='Inicio' icon='fas fa-home fa-lg' />

          <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
            <SidebarRoute to='/usuarios' title='Usuarios' icon='fas fa-user fa-lg' />
          </PrivateComponent>
            
          <SidebarRoute to='/proyectos' title='Proyectos' icon='fas fa-book-reader fa-lg' />



          <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
            <SidebarRoute to='/inscripciones' title='Inscripciones' icon='fas fa-user-check fa-lg' />
          </PrivateComponent>

          <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER', 'ESTUDIANTE']}>
            <SidebarRoute to='/avances' title='Avances' icon='fas fa-book-open' />
          </PrivateComponent>
          
          
          &nbsp;
          &nbsp;
        
          <Logout />
    </ul>
  );
};

const Logout = () => {
  const { setToken } = useAuth();
  const deleteToken = () => {
    console.log('eliminar token');
    setToken(null);
  };
  return (
    <li onClick={() => deleteToken()}>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <NavLink to='/auth/login' className='sidebar-route text-white font-bold'>
        <div className='flex items-center'>
          <i className='fas fa-sign-out-alt fa-lg' />
          <span className='text-sm  ml-2'>Cerrar Sesión</span>
        </div>
      </NavLink>
    </li>
  );
};

const Logo = () => {
  return (
    <div className='py-3 w-full flex flex-col items-center justify-center'>
      &nbsp;
      <img src='logo.png' alt='Logo' className='h-16' />
      <span className='my-2 text-x1 font-bold text-center text-white'>PROJECT UNIVERSE</span>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>
      {/* Sidebar starts */}

      <div className='sidebar hidden md:flex'>
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
      <div className='flex md:hidden w-full justify-between bg-gray-800 p-2 text-white'>
        <i className={`fas fa-${open ? 'times' : 'bars'}`} onClick={() => setOpen(!open)} />
        <i className='fas fa-home' />
      </div>
      {open && <ResponsiveSidebar />}
      {/* Sidebar ends */}
    </div>
  );
};

const ResponsiveSidebar = () => {
  return (
    <div >
      <div
        className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
        id='mobile-nav'
      >
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};

const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route text-white bg-pink-500'
            : 'sidebar-route text-white hover:text-white hover:bg-pink-400'
        }
      >
        <div className='flex items-center'>
          <i className={icon} />
          <span className='text-sm  ml-2'>{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

const SidebarRouteImagen = ({ to, title, icon }) => {
  const { userData } = useUser();
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route text-white bg-pink-500'
            : 'sidebar-route text-white hover:text-white hover:bg-pink-400'
        }
      >
        <div className='flex items-center'>
          {userData.foto ? (
            <img className='h-8 w-8 rounded-full' src={userData.foto} alt='foto' />
          ) : (
            <i className={icon} />
          )}
          <span className='text-sm  ml-2'>{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default Sidebar;
