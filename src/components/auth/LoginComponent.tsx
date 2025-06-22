"use client";

import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Container from "../container/Container";

type Inputs = {
  phoneNumber: string;
};

export default function LoginComponent() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log("Phone:", data.phoneNumber);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                placeholder="123 456 7890"
                inputStyle={{
                  width: "100%",
                  paddingLeft: "60px",
                  height: "44px",
                  backgroundColor: "#f3f4f6", // Tailwind gray-100
                  border: "1px solid #e5e7eb", // Tailwind gray-200
                  borderRadius: "0.5rem", 
                }}
                containerStyle={{ width: "100%" }}
                buttonStyle={{
                  border: "none",
                  backgroundColor: "#f3f4f6", // same as input bg
                  paddingLeft: "8px",
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
