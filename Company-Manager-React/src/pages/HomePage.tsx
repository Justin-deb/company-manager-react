import { useState,useEffect } from "react";
import CompanyService from "../service/CompanyService"
import type { Company } from "../types/Company";
import Hero from "../components/Hero";
import EmployeeList from "../components/EmployeeList";

const HomePage = () => {
    const [companyData,setCompanyData] = useState<Company[]>();
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

    if(!companyData){
        return (
            <div>Failed to fetch data from the server</div>
        );
    }
    console.log(companyData[0]);
  return (
    <div>
        
        {!loading ? (<Hero username={companyData[0].ownerName} companyName={companyData[0].companyName}/>): (<h1>Loading...</h1>)}
        
        <EmployeeList employees={companyData ? companyData[0]!.employees : []} loading={loading}/>
    </div>
  )
}

export default HomePage;