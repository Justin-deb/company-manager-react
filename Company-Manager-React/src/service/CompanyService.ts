import type { Company } from "../types/Company";
import { COMPANY_DATA } from "../data";

class CompanyService{
    async getCompany():Promise<Company[]>{
        return new Promise<Company[]>((resolve) =>{
            setTimeout(() => {
                resolve(COMPANY_DATA); // Resuelve la promesa con los datos después de un retardo
            }, 300); // Simula un retardo de 300ms
        });
    }

}

export default CompanyService;