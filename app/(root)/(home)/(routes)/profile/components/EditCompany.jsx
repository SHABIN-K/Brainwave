import FormInput from "@/components/input/FormInput";
import RichTextEditor from "@/components/input/RichTextEditor";
import { CompanyValidation } from "@/lib/validation/company";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

const EditCompany = ({ post }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [desc, setDesc] = useState(post.description);
  const [email, setEmail] = useState(post.email);
  const [companyname, setCompanyname] = useState(post.name);
  const [mobilenumber, setMobilenumber] = useState(post.phonenumber);
  const [streetAddress, setStreetAddress] = useState(post.address);

  const styleEditCompany = {
    classlabel: "block text-sm font-medium leading-6 text-gray-600 capitalize ",
    classInput:
      "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate user input using the schema
    const userInput = {
      name: companyname,
      description: desc,
      email: email,
      phonenumber: mobilenumber,
      address: streetAddress,
    };

    try {
      // Validate the user input
      const validation = CompanyValidation.addCompany.safeParse(userInput);
      //if validation is failure, return error message
      if (validation.success === false) {
        const { issues } = validation.error;
        issues.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        // If validation is successful, make the API request
        const response = await axios.patch("/api/company", {
          id: post.id,
          name: companyname,
          description: desc,
          email: email,
          phoneNumber: mobilenumber,
          address: streetAddress,
        });
        if (response.statusText === "FAILED") {
          toast.error(response.data);
        } else {
          toast.success("Successfully created");
          //handleReset();
        }
      }
    } catch (error) {
      console.error("NEXT_AUTH Error: " + error);
      toast.error("something went wrong ");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className=" mx-auto w-full max-w-lg px-4 pb-16">
      <h2 className=" py-4 text-[clamp(1rem,6vw,2rem)] font-medium capitalize">
        Edit your Company
      </h2>
      <form>
        <div className="sm:col-span-2 ">
          <FormInput
            label="Company Name"
            type="text"
            name="company-name"
            value={companyname}
            onChange={(e) => setCompanyname(e.target.value)}
            classLabel={styleEditCompany.classlabel}
            classInput={`${styleEditCompany.classInput} mt-2`}
          />
        </div>
        <div>
          <RichTextEditor
            title="Company Description"
            value={desc}
            onChange={setDesc}
          />
        </div>
        <div className="sm:col-span-4">
          <FormInput
            label="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            classLabel={styleEditCompany.classlabel}
            classInput={`${styleEditCompany.classInput} mt-2`}
          />
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <FormInput
            label="mobile number"
            type="text"
            name="mobile number"
            value={mobilenumber}
            onChange={(e) => setMobilenumber(e.target.value)}
            classLabel={styleEditCompany.classlabel}
            classInput={`${styleEditCompany.classInput} mt-2`}
          />
        </div>
        <div className="col-span-full mt-2">
          <FormInput
            label="address"
            type="text"
            name="street-address"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            classLabel={styleEditCompany.classlabel}
            classInput={`${styleEditCompany.classInput} mt-2`}
          />
        </div>
        <div className="mt-6 flex px-52 items-center gap-x-6">
          <button
            onClick={handleSubmit}
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isLoading ? "please wait ..." : "Save"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditCompany;
