

"use client";

import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Inputs = {
    name: string;
    phoneNumber: number;
    password: string;
};

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const {
        // control, 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        console.log(data)
    };

    return (
        <div className="max-w-[505px] mx-auto mt-20">
            <h1 className="w-[367px] mx-auto text-center text-3xl leading-[1.4] font-semibold mb-12">Take control of your health with HealCo.</h1>
            <div className="border rounded-xl p-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name Input */}
                    <div>
                        <label className="font-semibold text-sm text-[#1A1A1A]">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full input text-4 text-[#D0D5DD] p-3 border rounded-full mt-1.5"
                            placeholder="Enter your name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <span className="text-red-600 italic text-sm">
                                {errors.name.message}
                            </span>
                        )}
                    </div>
                    {/* phone number input  */}
                    <div>
                        <label className="font-semibold text-sm text-[#1A1A1A]">
                            Phone number
                        </label>
                        <input
                            type="number"
                            className="w-full input text-4 text-[#D0D5DD] p-3 border rounded-full mt-1.5"
                            placeholder="Phone number"
                            {...register("phoneNumber", { required: "Phone Number is required" })}
                        />
                        {errors.phoneNumber && (
                            <span className="text-red-600 italic text-sm">
                                {errors.phoneNumber.message}
                            </span>
                        )}
                    </div>
                    {/* Password Input */}
                    <div className="mt-4 relative">
                        <label className="font-semibold text-sm text-[#1A1A1A]">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full input text-4 text-[#D0D5DD] p-3 border rounded-full mt-1.5"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && (
                            <span className="text-red-600 italic text-sm">
                                {errors.password.message}
                            </span>
                        )}
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-9 h-full px-3 py-2 hover:bg-transparent">
                            {
                                showPassword ? (
                                    <EyeOff className="h-6 w-6 text-gray-700" />
                                ) : (
                                    <Eye className="h-6 w-6 text-gray-700" />
                                )
                            }
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#7E65F1] text-4 py-4 mt-6 rounded-xl text-white"
                    >
                        Sign Up
                    </button>
                    <div className="flex items-center justify-center gap-2 text-4 pt-3 pb-5">
                        <span className="text-[#1A1A1A]">Already have an account? </span>
                        <Link href="/" className="text-[#6551C1]"> Log In</Link>
                    </div>
                    {/* divider */}
                    <div className="relative flex items-center mb-5">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-[#1B1B1B] text-xl font-semibold bg-white">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <div className="border text-center text-xl text-[#1A1A1A] font-semibold py-4 rounded-xl">Enter Organization Invitation Code</div>
                </form>
            </div>
        </div>
    );
}