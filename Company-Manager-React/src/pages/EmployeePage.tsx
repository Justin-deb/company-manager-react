import { useParams } from "react-router";

const EmployeePage = () => {

    const {id} = useParams();

    console.log(id);


    return (
        <div>EmployeePage</div>
    )
}

export default EmployeePage