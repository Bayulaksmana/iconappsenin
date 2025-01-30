import Image from "next/image"

const TableSearch = () => {
 return (
 <div className="w-full md:w-auto flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2">
         <Image src="/search.png" alt="" width={20} height={20} className="ml-2" />
         <input type="text" placeholder="Search ..."
             className="w-[200px] p-2 bg-transparent outline-none rounded-full" />
     </div>
 )
}

export default TableSearch