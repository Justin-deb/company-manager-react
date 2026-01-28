import { NavLink } from "react-router"

const Navbar = () => {
  const selected = ({ isActive } : {isActive:boolean}) => {
    return 'rounded-md px-3 py-1 hover:bg-orange-300 ' + (isActive ? 'bg-orange-400' : '');
  };
  return (
    <nav className="bg-orange-200 border-b border-orange-100">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink to='/' className="flex flex-shrink-0 items-center mr-4">
              <p className="font-semibold text-amber-900">Company Manager</p>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to='/employees' className={selected}>
                  Employees
                </NavLink>
                <NavLink to='/products' className={selected}>
                  Products
                </NavLink>
                <NavLink to='/services' className={selected}>
                  Services
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar