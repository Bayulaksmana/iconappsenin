export default function LoginForm(){
return <div className="grid place-items-center h-screen">
    <div className="shadow-lg p-5 rounded-lg border-t-4 border-lamaSkyLight">
        <h1 className="text-xl font-bold my-4">Login to </h1>
        <form className="flex flex-col gap-3" typeof="text">
            <input type="text" placeholder="Email" />
            <input type="Password" placeholder="Password" />
        <button className="bg-lamaSkyLight text-blue-400 font-bold cursor-pointer px-6 py-2">Login</button>
        <div className=" ">

        </div>
        </form>
    </div>

</div>
}
