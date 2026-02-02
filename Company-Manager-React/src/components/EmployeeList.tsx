import { Link } from "react-router-dom";
import type { Employee } from "../types/Employee";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({
  employees,
  loading = true,
}: {
  employees?: Employee[];
  loading: boolean;
}) => {
  return (
    <div className="bg-orange-50 mt-10 pt-5 pb-10">
      <div className="text-4xl px-8 text-orange-400 font-semibold mb-7">
        Your Employees
      </div>
      <div className="flex mb-10">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          employees!.map((employee) => (
            <EmployeeCard employee={employee} key={employee.id} />
          ))
        )}
      </div>
      <Link
        to={"/employees"}
        className="bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 ml-8 "
      >
        View all employees
      </Link>
    </div>
  );
};

export default EmployeeList;
