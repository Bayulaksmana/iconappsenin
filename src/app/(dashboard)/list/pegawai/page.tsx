import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, pegawaiData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Pegawai = {
id: number;
pegawaiId: string;
name: string;
email: string;
photo: string;
phone: string;
subjects: string[];
classes: string[];
address: string;
};

const columns = [
{
header: "Name & Email",
accessor: "info",
className: "justify-center",
},
{
header: "NIP",
accessor: "pegawaiId",
},
{
header: "Position",
accessor: "subjects",
className: "hidden md:table-cell",
},
{
header: "Application",
accessor: "classes",
},
{
header: "Phone",
accessor: "phone",
className: "hidden md:table-cell",
},
{
header: "Actions",
accessor: "acitons",
className: "hidden md:table-cell",
},
];

const PegawaiListPage = () => {
const renderRow = (item: Pegawai) => (
<tr key={item.id}
    className=" justify-center border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-LamaPurpleLight ">
    <td className="flex items-center gap-4 p-4">
        <Image src={item.photo} alt="" width={40} height={40}
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover" />
        <div className="flex flex-col ice">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
    </td>
    <td className="hidden md:table-cell">{item.pegawaiId}</td>
    <td className="hidden md:table-cell flex-nowrap">
        {item.subjects.join(",")}
    </td>
    <td className=" flex-col p-2 hidden md:table-cell">
        {item.classes.join(",")}
    </td>
    <td className="hidden md:table-cell">{item.phone}</td>
    <td className="hidden md:table-cell">
        <div className="flex items-center gap-2">
            <Link href={`/list/pegawai/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                <Image src="/view.png" alt="" width={16} height={16} />
            </button>
            </Link>
            {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-LamaPurple">
            //     <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="pegawai" type="delete" id={item.id} />
            )}
        </div>
    </td>
</tr>
);

return (
  <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
    {/* Bagian TOP */}
    <div className="flex items-center justify-between">
      <h1 className="hidden md:block text-lg font-semibold">
       Employees Icon Plus
      </h1>
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
            // <button className="w-8 h-8 flex items-center justify-center rounded-md bg-LamaYellow">
            //     <Image src={"/plus.png"} alt="" width={14} height={14} />
            // </button>
            <FormModal table="pegawai" type="create" />
          )}
        </div>
      </div>
    </div>
    {/* Bagian LIST */}
    <Table columns={columns} renderRow={renderRow} data={pegawaiData} />
    {/* Bagian PAGINATION */}
    <Pagination />
  </div>
);
};

export default PegawaiListPage;
