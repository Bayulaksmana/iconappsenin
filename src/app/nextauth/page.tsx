import LoginForm from "@/components/forms/LoginForm"
import {
Carousel,
CarouselContent,
CarouselItem,
CarouselNext,
CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

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
<div className="p-4 flex gap-4 flex-col lg:flex-row">
    <div className="w-full justify-center items-center flex flex-col lg:w-full">
        <Carousel>
            <CarouselContent>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>
                    <Image src="https://iofficeplus.iconpln.co.id/backoffice/img/Banner_2.9111a2b4.svg" alt="" />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
    <div className="w-full lg:w-1/3 flex flex-col justify-center items-center">
        <LoginForm />
    </div>
</div>
);
}

export default Page
