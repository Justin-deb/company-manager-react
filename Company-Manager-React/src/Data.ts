import type { Company } from "./types/Company";

// Datos construidos explícitamente a partir de los tipos `Company`, `Employee` y `Product`
export const COMPANY_DATA: Company[] = [
  {
    id: 0,
    ownerName: "Justin",
    companyName: "MyCompany",
    employees: [
      {
        id: 0,
        firstName: "Justin",
        middleName: "",
        lastName: "Estrada Cruz",
        department: "IT",
        position: "Lead software developer",
        salaryPerHour: 45.0,
        clockInTime: "",
        clockOutTime: "",
      },
      {
        id: 1,
        firstName: "Micheal",
        middleName: "",
        lastName: "Miller Brown",
        department: "Human Resources",
        position: "HR Assistant",
        salaryPerHour: 45.0,
        clockInTime: "",
        clockOutTime: "",
      },
      {
        id: 2,
        firstName: "Helena",
        middleName: "Elizabeth",
        lastName: "Goodman Smith",
        department: "Finance",
        position: "Finance reporter",
        salaryPerHour: 45.0,
        clockInTime: "",
        clockOutTime: "",
      },
    ],
    products: [
      {
        id: 0,
        productName: "",
        productDescription: "",
        price: 0.0,
        costProduction: 0.0,
        category: "",
      },
    ],
  }
];
