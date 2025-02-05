import Carousel from "@/components/forms/Carousel"
import LoginForm from "@/components/forms/LoginForm"
import { data } from "react-router-dom";

const DATA = [
  {
    image:
      "https://iofficeplus.iconpln.co.id/backoffice/img/Banner_4.3b734147.svg",
  },
  {
    image:
      "https://iofficeplus.iconpln.co.id/backoffice/img/Banner_3.1d5ebdea.svg",
  },
  {
    image:
      "https://iofficeplus.iconpln.co.id/backoffice/img/Banner_2.9111a2b4.svg",
  },
];

const Page = () => {
 return (
   <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full justify-center items-center flex flex-col lg:w-2/3">
     <Carousel data={DATA}/>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center">
     <LoginForm/>
      </div>

   </div>

 )
}

export default Page