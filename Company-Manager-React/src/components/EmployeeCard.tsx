import { Link, Navigate } from "react-router"
import type { Employee } from "../types/Employee"
import { FaRegUser } from "react-icons/fa"

const EmployeeCard = ({employee}:{employee:Employee}) => {
    
  return (
    <div  className="bg-gray-100 text-black h-auto w-60 rounded-lg shadow-lg mx-8">
        <div className="flex justify-center h-32">
            <FaRegUser className="text-6xl bg-slate-300 rounded-lg py-5"></FaRegUser>
        </div>
        <div className="text-center pb-6">
            <p> 
                {employee.firstName + " "}
                {!employee.middleName ? '' : employee.middleName.charAt(0) + '. '}
                {employee.lastName}
            </p>

            <p>Department: {" " + employee.department}</p>
            <p>Position: {" " + employee.position}</p>


            <div className="mt-6 ">
                <Link to='/adsad' className="bg-slate-400 rounded-md p-2 mx-14 ">View more</Link>
            </div>
        </div>
        
    </div>
  )
}

export default EmployeeCard