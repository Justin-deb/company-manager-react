import { useState,useEffect } from "react";
import CompanyService from "../service/CompanyService"
import type { Company } from "../types/Company";
import Hero from "../components/Hero";

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
    <>
        {!loading ? (<Hero username={companyData!.ownerName} companyName={companyData!.companyName}/>): (<h1>Loading...</h1>)}
    </>
  )
}

export default HomePage;