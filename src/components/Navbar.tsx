import Image from "next/image";

const Navbar = () => {
return (
<div className="flex items-center justify-between p-4">
    {/* {SEARCH BAR} == Setting tampilan fitur pencarian */}
    <div className="hidden md:flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={20} height={20} className="ml-2" />
        <input type="text" placeholder="Search ..."
            className="w-[200px] p-2 bg-transparent outline-none rounded-full" />
    </div>
    {/* {ICON AND USER SETTING} == Setting tampilan fitur kanan pojok atas*/}
    <div className="flex items-center gap-6 justify-end w-full bg-transparent">
        <div className=" rounded-full w-7 h-7 flex items-center cursor-pointer">
            <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className=" rounded-full w-7 h-7 flex items-center cursor-pointer relative">
            <Image src="/announcement.png" alt="" width={20} height={20} />
            <div
                className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
                1</div>
        </div>
        <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium mt-1">Bayu Laksmana</span>
            <span className="text-[10px] text-gray-500 text-right mt-0">Technical Support</span>
        </div>
        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full cursor-pointer" />
    </div>
</div>
);
};

export default Navbar;
