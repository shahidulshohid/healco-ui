// "use client";

// import { useForm, Controller } from "react-hook-form";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import Container from "../container/Container";

// type Inputs = {
//   phoneNumber: string;
//   password: string;
// };

// export default function LoginComponent() {
//   const {
//     control,
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const onSubmit = (data: Inputs) => {
//     console.log("Phone:", data.phoneNumber);
//     console.log("Password:", data.password);
//   };

//   return (
//     <div className="w-[505] mx-auto border">
//       <Container>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Phone Input */}
//         <div>
//           <label className="font-semibold">Phone Number</label>
//           <Controller
//             name="phoneNumber"
//             control={control}
//             rules={{ required: "Phone number is required" }}
//             render={({ field }) => (
//               <PhoneInput
//                 {...field}
//                 country={"us"}
//                 enableSearch
//                 placeholder="Phone number"
//                 inputStyle={{
//                   width: "100%",
//                   paddingLeft: "30px",
//                   height: "44px",
//                   backgroundColor: "#f3f4f6",
//                   border: "2px solid #e5e7eb",
//                   borderRadius: "0.5rem",
//                 }}
//                 containerStyle={{ width: "100%" }}
//                 buttonStyle={{
//                   border: "none",
//                   backgroundColor: "#f3f4f6",
//                 }}
//                 dropdownStyle={{ zIndex: 9999 }}
//               />
//             )}
//           />
//           {errors.phoneNumber && (
//             <span className="text-red-600 text-sm italic">
//               {errors.phoneNumber.message}
//             </span>
//           )}
//         </div>

//         {/* Password Input */}
//         <div>
//           <label className="font-semibold">
//             Password
//           </label>
//           <input
//             type="password"
//             className="w-full input bg-gray-100 rounded-md p-2"
//             placeholder="Enter your password"
//             {...register("password", { required: "Password is required" })}
//           />
//           {errors.password && (
//             <span className="text-red-600 italic text-sm">
//               {errors.password.message}
//             </span>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md"
//         >
//           Submit
//         </button>
//       </form>
//     </Container>
//     </div>
//   );
// }





"use client";

import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link";

type Inputs = {
  phoneNumber: number;
  password: string;
};

export default function LoginComponent() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log("Phone:", data.phoneNumber);
    console.log("Password:", data.password);
  };

  return (
    <div className="max-w-[505px] mx-auto mt-20">
      <h1 className="w-[367px] mx-auto text-center text-3xl leading-[1.4] font-semibold mb-12">Take control of your health with HealCo.</h1>
      <div className="border rounded-xl p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* phone number Input */}
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
            <span onClick={(() => setShowPassword(!showPassword))} className="absolute right-0 top-9 h-full px-3 py-2 hover:bg-transparent">
              {
                showPassword ? (
                  <EyeOff className="h-6 w-6 text-gray-700" />
                ) : (
                  <Eye className="h-6 w-6 text-gray-700" />
                )
              }
            </span>
          </div>
          <div className="flex justify-between items-center pt-4 pb-6">
            <div className="flex items-center gap-2 text-4 font-semibold">
              <Checkbox className="text-[#F8FAFB] h-5 w-5 rounded-sm" />
              Remember me
            </div>
            <Link href="#" className="text-4 font-semibold text-[#7E65F1]">Forget password?</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-[#7E65F1] text-4 py-4 rounded-xl text-white"
          >
            Login In
          </button>
          <div className="flex items-center justify-center gap-2 text-4 pt-3 pb-5">
            <span className="text-[#1A1A1A]">Don’t have an account? </span>
            <Link href="/signup" className="text-[#6551C1]"> Sign Up</Link>
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

