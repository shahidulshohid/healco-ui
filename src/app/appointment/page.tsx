"use client";

import Container from "@/components/container/Container";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface DoctorProfile {
  id: number;
  name: string;
  isVerified: boolean;
  specialization: string;
  rating: number;
  experience: string;
  priceChat: string;
  satisfactionRate: string;
  avatar: string;
}

const doctorProfiles: DoctorProfile[] = [
  {
    id: 1,
    name: "Dr. Liu Kang",
    isVerified: true,
    specialization: "Diabetes mellitus",
    rating: 4.9,
    experience: "10 years",
    priceChat: "Rp 90k",
    satisfactionRate: "90%",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    isVerified: true,
    specialization: "Cardiology",
    rating: 4.8,
    experience: "8 years",
    priceChat: "Rp 85k",
    satisfactionRate: "95%",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    isVerified: false,
    specialization: "Dermatology",
    rating: 4.7,
    experience: "12 years",
    priceChat: "Rp 75k",
    satisfactionRate: "88%",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Dr. Emily Rodriguez",
    isVerified: true,
    specialization: "Pediatrics",
    rating: 4.9,
    experience: "6 years",
    priceChat: "Rp 70k",
    satisfactionRate: "92%",
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

function Appointment() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Get unique specialization categories
  const uniqueCategories = Array.from(
    new Set(doctorProfiles.map((doc) => doc.specialization))
  );
  console.log(uniqueCategories, "================");
  // Filter doctors by selected category
  const filteredDoctors = doctorProfiles.filter(
    (doc) => doc.specialization === selectedCategory
  );
  console.log(filteredDoctors, "filtersdoctors======");
  //calender
  const [selected, setSelected] = useState<Date>();
  console.log(selected, "====================")

  return (
    <div className="mt-20 bg-[#FFFFFF]">
      <Container>
        <div>
          <h2 className="text-2xl text-[#151515] font-bold mb-1">
            Schedule An Appointment
          </h2>
          <p className="text-lg text-[#667085]">
            Fill out the form below to request an appointment with a healthcare
            provider.
          </p>

          <div className="flex justify-between items-start mt-6 gap-6 flex-col lg:flex-row">
            {/* Left: Category Selection */}
            <div className="bg-[#E8E8E9] w-full lg:w-1/2 p-4 rounded-md">
              <h4 className="text-[#1A1A1A] text-lg font-semibold mb-2">
                Doctor Specialty Category
              </h4>
              <div className="relative">
                <select
                  className="w-full p-4 pr-12 border border-gray-300 bg-white text-[#667085] text-4 rounded-[64px] appearance-none"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  value={selectedCategory}
                >
                  <option value="">Select a Specialty Category</option>
                  {uniqueCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                  <MdOutlineKeyboardArrowDown
                    size={25}
                    className="text-[#1A1A1A]"
                  />
                </div>
              </div>
              {/* calender */}
              <div className="calendar-wrapper">
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                />
                <p className="mt-2">
                  {selected
                    ? `Selected: ${selected.toLocaleDateString()}`
                    : "Pick a day."}
                </p>
              </div>
            </div>
            {/* Right: Doctor List */}
            <div className="w-full lg:w-1/2 p-4 rounded-md border border-gray-200 bg-gray-50">
              <h4 className="text-base font-medium mb-2">Available Doctors</h4>
              {selectedCategory ? (
                filteredDoctors.length > 0 ? (
                  <ul className="list-disc pl-4 space-y-1">
                    {filteredDoctors.map((doctor) => (
                      <li key={doctor.id} className="text-gray-700">
                        {doctor.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">
                    No doctors available in this category.
                  </p>
                )
              ) : (
                <p className="text-gray-500 italic">
                  Please select a category.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Appointment;

// "use client"
// import { useState } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/style.css";

// function Appointment() {
  // const [selected, setSelected] = useState<Date>();
  // console.log(selected, "====================")

//   return (
//     <DayPicker
//       animate
//       mode="single"
//       selected={selected}
//       onSelect={setSelected}
//       footer={
//         selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
//       }
//     />
//   );
// }

// export default Appointment

// "use client"
// import { useState } from "react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/style.css";
// import "./Appointment.css"; // 👈 Import your custom CSS

// function Appointment() {
//   const [selected, setSelected] = useState<Date>();
//   console.log(selected, "====================");

//   return (
// <div className="calendar-wrapper">
//   <DayPicker
//     mode="single"
//     selected={selected}
//     onSelect={setSelected}
//   />
//   <p className="mt-2">
//     {selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."}
//   </p>
// </div>
//   );
// }

// export default Appointment;
