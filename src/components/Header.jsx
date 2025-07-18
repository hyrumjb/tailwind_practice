import { NavLink } from 'react-router-dom';
import '../App.css';

function Header() {
    return (
        <>
            <header className="flex justify-between align-center h-20 m-4">
                <div className="flex m-4 mb-8">
                    <svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z" />
                    </svg>
                    <h1 className="text-blue-500 text-2xl font-extrabold hover:text-4xl">ICONS</h1>
                </div>

                <div>
                    <nav className="flex gap-4 mt-5 mr-6">
                        <NavLink to="/icons/" end className={({ isActive }) => isActive ? 'active' : ''}>
                            Home
                        </NavLink>
                        <NavLink to="/icons/about" className={({ isActive }) => isActive ? 'active' : ''}>
                            About
                        </NavLink>
                        <NavLink to="/icons/creators" className={({ isActive }) => isActive ? 'active' : ''}>
                            Creators
                        </NavLink>
                        <NavLink to="/icons/athletes" className={({ isActive }) => isActive ? 'active' : ''}>
                            Athletes
                        </NavLink>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;