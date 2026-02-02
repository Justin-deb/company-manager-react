import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
        <FaTimes className="text-6xl"/>
        <h1 className="text-5xl mt-4">ERROR</h1>
        <h3 className="text-3xl my-3">404 Page not found</h3>
        <div className="">
            <Link to='/' className=" flex flex-row gap-3 my-3 rounded-md bg-amber-300 px-3 py-2 mt-4">
                
                Go back
            </Link>
        </div>
    </section>
  )
}

export default NotFoundPage