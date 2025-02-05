import Announcement from "@/components/Announcement";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import UserCard from "@/components/UserCard";
import AbsenListData from "../list/absensi/page";

const AdminPage = () => {
return (
<div className="p-4 flex gap-4 flex-col md:flex-row">
    {/* LEFT */}
    <div className="w-fulll lg:w-2/3 flex flex-col gap-6">
        {/* Tampilan note untuk info data jumlah*/}
        <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="Absen" />
            <UserCard type="Cuti" />
            <UserCard type="Lembur" />
            <UserCard type="Sakit" />
        </div>

        {/* {Tampilan grafik bagian tengah} */}
        <div className="flex gap-4 flex-col lg:flex-row md:text-nowrap">
            {/* Count chart */}
            <div className="w-full lg:w-1/3 h-[400px]">
                <CountChart />
            </div>
            {/* {Attendant chart} */}
            <div className="w-full lg:w-2/3 h-[400px]">
                <AttendanceChart />
            </div>
        </div>
        {/* {Tampilan grafik bagian bawah} */}
        <div className="w-full h-[500px]">
            <AbsenListData />
        </div>
    </div>
    {/* RIGHT */}
    <div className=" w-fulll lg:w-1/3 flex flex-col gap-8">
        <div className="">
            <EventCalendar />
            <Announcement />
        </div>
    </div>
</div>
);
};

export default AdminPage;
