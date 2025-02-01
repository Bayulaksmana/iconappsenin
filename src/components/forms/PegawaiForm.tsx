"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
username: z
.string()
.min(3, { message: "Username must be at least 3 characters long!*" })
.max(20, { message: "Username must be at most 20 characters long!*" }),
email: z.string().email({ message: "Invalid email, must be at @iconpln*" }),
password: z.string().min(8, {
message: "Password must be at least 8 characters long!*",
}),
name: z.string().min(2, { message: "Required is fullname!*" }),
nip: z.string().min(2, { message: "Required a NIP" }),
jabatan: z.string().min(2, { message: "Is qreuired position" }),
aplikasi: z.string().min(2, { message: "Can be select 5 Application*" }),
phone: z.string().min(2, { message: "Required a number phone*" }),
date: z.date({ message: "Birthday is required" }),
gender: z.enum(["male", "female"], {
message: "Gender must select in option*",
}),
img: z.instanceof(File, { message: "Upload Image is required" })
});

type Inputs = z.infer<typeof schema>;

    const PegawaiForm = ({
    type,
    data,
    }: {
    type: "create" | "update";
    data?: any;
    }) => {
    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
        });

        const onSubmit = handleSubmit((data) => {
        console.log(data);
        });

        return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">Add New Member</h1>
            <span className="text-xs text-gray-400 font-medium">
                Authentication Information
            </span>
            <div className="flex justify-between flex-wrap gap-2 mt-[-20px]">
                <InputField label="Username" name="Username" defaultValue={data?.username} register={register}
                    error={errors?.username} />
                <InputField label="Email" name="Email" type="email" defaultValue={data?.email} register={register}
                    error={errors?.email} />
                <InputField label="password" name="Password" type="password" defaultValue={data?.password}
                    register={register} error={errors?.password} />
            </div>
            <span className="text-xs text-gray-400 font-medium mt-[-13px]">
                Detail Members Info
            </span>
            <div className="flex justify-between flex-wrap gap-4 mt-[-20px]">
                <InputField label="Nama Lengkap" name="Nama Lengkap" defaultValue={data?.name} register={register}
                    error={errors?.name} />
                <InputField label="NIP" name="NIP" defaultValue={data?.nip} register={register}
                    error={errors?.nip} />
                <InputField label="Jabatan" name="Jabatan" defaultValue={data?.jabatan} register={register}
                    error={errors?.jabatan} />
                <InputField label="Aplikasi" name="Aplikasi" defaultValue={data?.aplikasi} register={register}
                    error={errors.aplikasi} />
                <InputField label="Phone" name="Phone" defaultValue={data?.phone} register={register}
                    error={errors?.phone} />
                <InputField label="Date" name="Date" defaultValue={data?.date} register={register}
                    error={errors?.date} type="date" />
                <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label className="text-xs text-gray-500">Gender</label>
                    <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full" {...register("gender")}
                        defaultValue={data?.gender} id="">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender?.message && (
                    <p className="text-xs text-red-400">
                        {errors.gender.message.toString()}
                    </p>
                    )}
                </div>
                <div className="flex flex-col gap-2 mt-[26px] w-full md:w-1/4 justify-center">
                    <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
                        <Image src="/upload.png" alt="" width={28} height={28} />
                        <span>Upload Photo</span>
                    </label>
                    <input type="file" id="img" {...register("img")} className="hidden" />
                    {errors.img?.message && (
                    <p className="text-xs text-red-400">
                        {errors.img.message.toString()}
                    </p>
                    )}
                </div>
            </div>

            <button className="bg-lamaSky text-cyan-700 p-2 rounded-md self-center font-semibold">
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>
        );
        };

        export default PegawaiForm;
