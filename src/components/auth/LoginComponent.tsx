"use client";

import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Container from "../container/Container";

type Inputs = {
  phoneNumber: string;
  password: string;
};

export default function LoginComponent() {
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
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 📱 Phone Input */}
        <div className="space-y-3">
          <label className="font-semibold">Phone Number</label>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={"us"}
                enableSearch
                placeholder="Phone number"
                inputStyle={{
                  width: "100%",
                  paddingLeft: "30px",
                  height: "44px",
                  backgroundColor: "#f3f4f6",
                  border: "2px solid #e5e7eb",
                  borderRadius: "0.5rem",
                }}
                containerStyle={{ width: "100%" }}
                buttonStyle={{
                  border: "none",
                  backgroundColor: "#f3f4f6",
                }}
                dropdownStyle={{ zIndex: 9999 }}
              />
            )}
          />
          {errors.phoneNumber && (
            <span className="text-red-600 text-sm italic">
              {errors.phoneNumber.message}
            </span>
          )}
        </div>

        {/* 🔐 Password Input */}
        <div className="space-y-3">
          <label className="font-semibold">
            Password<span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            className="w-full input bg-gray-100 rounded-md p-2"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-600 italic text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </Container>
  );
}
