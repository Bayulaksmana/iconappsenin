const Announcement = () => {
return (
<div className="bg-white p-4 rounded-md">
    <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcement</h1>
        <span className="text-sx text-gray-400">View All</span>
    </div>
    <div className="flex flex-col gap-2 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-3">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">Moyokapit</h2>
                <span className="text-sx text-gray-400 rounded-md px-1 py-1">
                    2025-01-13
                </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, odio.
            </p>
        </div>
        <div className="bg-LamaPurpleLight rounded-md p-3">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">Moyokapit</h2>
                <span className="text-sx text-gray-400 rounded-md px-1 py-1">
                    2025-01-13
                </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing tidak ada yang mampu membuat .
            </p>
        </div>
        <div className="bg-LamaYellowLight rounded-md p-3">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">Moyokapit</h2>
                <span className="text-sx text-gray-400 rounded-md px-1 py-1">
                    2025-01-13
                </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
        </div>
    </div>
</div>
);
}

export default Announcement

