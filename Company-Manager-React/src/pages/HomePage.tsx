import { useState,useEffect } from "react";
import CompanyService from "../service/CompanyService"
import type { Company } from "../types/Company";
import Hero from "../components/Hero";
import EmployeeCard from "../components/EmployeeCard";

const HomePage = () => {
    const [companyData,setCompanyData] = useState<Company>();
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        const loadCompany = async () => {
            try {
                const service = new CompanyService();
                setCompanyData(await service.getCompany());
            } catch (error) {
                console.log('Failed to load data from the server',error);
            }finally{
                setLoading(false);
            }
        };
        loadCompany();
    },[]);

  return (
    <div>
        {!loading ? (<Hero username={companyData!.ownerName} companyName={companyData!.companyName}/>): (<h1>Loading...</h1>)}
        <div className="bg-orange-50 mt-10 pt-5 pb-10">
            <div className="text-4xl text-center text-orange-400">Your Employees</div>
            {!loading ? (<EmployeeCard employee={companyData!.employees[0]}/>): (<h1>Loading...</h1>)}
        </div>
    </div>
  )
}

export default HomePage;