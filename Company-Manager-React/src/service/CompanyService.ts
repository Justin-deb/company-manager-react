import type { Company } from "../types/Company";

class CompanyService{
    async getCompany():Promise<Company>{
        const res = await fetch('/api/company');
        if(!res.ok) throw new Error("Couldn't get the company from the server");

        const data = await res.json();

        return data;
    } 

}

export default CompanyService;