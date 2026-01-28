import { useState,useEffect } from "react";
import CompanyService from "../service/CompanyService"
import type { Company } from "../types/Company";
import Hero from "../components/Hero";

const HomePage = () => {
    const [company,setCompany] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        const loadCompany = () => {
            try {
                const service = new CompanyService();
                setCompany(service.getCompany());
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
        <Hero username={company!.ownerName} companyName={company!.companyName}/>
    </>
  )
}

export default HomePage;