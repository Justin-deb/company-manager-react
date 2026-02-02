import type { Employee } from "./Employee"
import type { Product } from "./Product"

export type Company = {
    id:number,
    ownerName: string,
    companyName: string,
    employees: Employee[],
    products: Product[]
}