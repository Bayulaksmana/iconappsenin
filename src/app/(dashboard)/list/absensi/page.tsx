import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { absenData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Absen = {
id: number;
title: string;
nip: number;
class: string;
date: string;
startTime: string;
endTime: string;
jadwal: string;
status: string;
};

const columns = [
  {
    header: "Nama / NIP",
    accessor: "title",
  },
  {
    header: "Schedule",
    accessor: "jadwal",
  },
  {
    header: "Day",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Check In",
    accessor: "starTtime",
    className: "hidden md:table-cell",
  },

  {
    header: "Check Out",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Status",
    accessor: "status",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "acitons",
    className: "hidden md:table-cell",
  },
];

const AbsenListData = () => {
const renderRow = (item: Absen) => (
<tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-LamaPurpleLight ">
    <td className="flex items-center gap-4 p-4 font-semibold">
        {item.title} <br />
        {item?.nip}
    </td>
    <td>{item.jadwal}</td>
    <td>{item.class}</td>
    <td className="hidden md:table-cell">{item.date}</td>
    <td className="hidden md:table-cell">{item.startTime}</td>
    <td className="hidden md:table-cell">{item.endTime}</td>
    <td className="hidden md:table-cell">{item.status}</td>
    <td className="hidden md:table-cell">
        <div className="flex items-center gap-2">
            <Link href={`/list/pegawai/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                <Image src={"/edit.png"} alt="" width={16} height={16} />
            </button>
            </Link>
            {/* {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-LamaPurple">
                <Image src={"/delete.png"} alt="" width={16} height={16} />
            </button>
            )} */}
        </div>
    </td>
</tr>
);

return (
<div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
    {/* Bagian TOP */}
    <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Absensi</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 md:w-auto">
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-LamaYellow">
                    <Image src={"/filter.png"} alt="" width={14} height={14} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-LamaYellow">
                    <Image src={"/sort.png"} alt="" width={14} height={14} />
                </button>
                {role === "admin" && (
                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-LamaYellow">
                    <Image src={"/plus.png"} alt="" width={14} height={14} />
                </button>
                )}
            </div>
        </div>
    </div>
    {/* Bagian LIST */}
    <Table columns={columns} renderRow={renderRow} data={absenData} />
    {/* Bagian PAGINATION */}
    <Pagination />
</div>
);
};
export default AbsenListData;
