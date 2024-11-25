"use client";
import { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import FormInputs from "../components/FormInputs";
import { Footer } from "../components/Footer";
import { BASE_API_URL } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    personnummer: "",
    message: "",
    phoneNumber: "",
    date: "",
    time: "",
    numPeople: "",
  });

  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.personnummer) {
      formErrors.personnummer = "Personnummer is required";
    } else if (!/^\d{10}$|^\d{12}$/.test(formData.personnummer)) {
      formErrors.personnummer = "Personnummer must be in the format YYMMDDXXXX or YYYYMMDDXXXX";
    }
    if (!formData.phoneNumber)
      formErrors.phoneNumber = "phoneNumber is required";
    if (!formData.message) formErrors.message = "Message is required";
    if (!formData.time) formErrors.time = "Time is required";
    if (!formData.date) formErrors.date = "Date is required";
    if (!formData.numPeople)
      formErrors.numPeople = "Number of people is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        // Send form data to the backend
        const response = await fetch(`${BASE_API_URL}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setShowConfirmation(true);
          setTimeout(() => {
            setShowConfirmation(false);
          }, 3000);

          // Clear the form data
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            phoneNumber: "",
            date: "",
            time: "",
          });
        } else {
          console.log("Failed to submit form");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    } else {
      setErrors(formErrors);
    }
  };
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <>
      <div className="min-h-screen">
        <div className="px-6">{/* <ImageSlider /> */}</div>
        <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-sm uppercase text-black shadow-2xl">
          <div className="mb-10">
            <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
              <h1 className="text/black mb-4 text-center text-3xl font-bold uppercase">
                Boka Ett Bord
              </h1>
              <p className="text-md text-center text-black lg:px-40">
                Redo att njuta av en utsökt måltid på Olivia's Bar? Säkra ditt
                bord genom att boka hos oss! Oavsett om du planerar en speciell
                kväll eller bara söker en bra plats att äta, är vi här för att
                göra din upplevelse oförglömlig. Fyll i formuläret nedan, så
                bekräftar vi din bokning så snart som möjligt.{" "}
              </p>
            </div>
          </div>

          <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-sm uppercase text-black shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-2">
              <FormInputs
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
              <div>
                <button
                  type="submit"
                  className={`w-full px-4 py-2 ${showConfirmation ? "bg-black" : "bg-black"} text-[#EAC6B5] shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                >
                  Confirm Your Booking
                </button>
              </div>
            </form>
            {showConfirmation && (
              <div className="mx-auto my-6 max-w-screen-lg bg-[#EAC6B5] p-8 text-center text-sm uppercase text-black shadow-2xl">
                <p className="my-6 mb-6 text-center text-sm uppercase text-black">
                  Tack för din bokning! <br /> <br /> Din reservation har
                  mottagits och är initialt bekräftad. Vi återkommer till dig
                  snarast möjligt om det skulle uppstå några
                  tillgänglighetsproblem. Vi ser fram emot att välkomna dig till
                  Olivias Bar!
                </p>
              </div>
            )}
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  );
}
