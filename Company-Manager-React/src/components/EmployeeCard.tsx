import { Link } from "react-router-dom"
import type { Employee } from "../types/Employee"
import { FaRegUser } from "react-icons/fa"

const EmployeeCard = ({employee}:{employee:Employee}) => {
    
  return (
    <div  className="relative bg-gray-100 text-black h-auto w-60 rounded-lg shadow-lg mx-8">
        <div className="flex justify-center items-center h-20">
            <FaRegUser className="text-6xl bg-slate-400 rounded-lg py-3"></FaRegUser>
        </div>
        <div className="pb-6">
            <p className="text-center text-lg "> 
                {employee.firstName + " "}
                {!employee.middleName ? '' : employee.middleName.charAt(0) + '. '}
                {employee.lastName}
            </p>
            
            <div className="mx-5 mt-5 mb-14 space-y-2 text-sm text-neutral-500">
                <p>Department: {employee.department}</p>
                <p>Position: {employee.position}</p>
            </div>

            <Link to={`/employees/${employee.id}`} className="absolute left-4 bottom-5 bg-slate-400 rounded-md  px-16 py-2 hover:bg-slate-300">View more</Link>
            
        </div>
        
    </div>
  )
}

export default EmployeeCard