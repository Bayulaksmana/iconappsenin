import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const ParentPage = () => {
return (
<div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
    {/* Tampilan bagian kiri */}
    <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
            <h1 className="text-xl font-semibold gap-4 mb-4">Schedule (Adila Nabilah)</h1>
            <BigCalendar />
        </div>
    </div>
    {/* Tampilan bagian kanan */}
    <div className="w-full xl:w-1/3 flex flex-col gap-7">
        <Announcement />
    </div>
</div>
);
};

export default ParentPage;
