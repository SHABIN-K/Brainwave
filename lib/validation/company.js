
import * as z from "zod";

const Company = z.object({
  name: z
    .string({
      required_error: "Company name is required.",
      invalid_type_error: "Company name must be a string.",
    })
    .min(3, { message: "Company name must be at least 3 characters long." })
    .max(50, { message: "Company name can be at most 50 characters long." }),

  description: z
    .string({
      required_error: "Description is required.",
      invalid_type_error: "Description must be a string.",
    })
    .min(10, { message: "Description must be at least 10 characters long." })
    .max(100, { message: "Description can be at most 100 characters long." }),

  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string.",
    })
    .email({ message: "Invalid email address." })
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(100, { message: "Email can be at most 100 characters long." }),

    phonenumber: z
    .string({
      required_error: "Phone number is required.",
      invalid_type_error: "Phone number must be a string.",
    })
    .refine((phoneNumber) => /^(\+91)[0-9]{10}$/.test(phoneNumber), {
      message: 'Phone number must start with +91 and be 10 digits long.',
    }),
    
    address: z
    .string({
      required_error: "Address is required.",
      invalid_type_error: "Address must be a string.",
    })
    .min(10, { message: "Address must be at least 10 characters long." })
    .max(200, { message: "Address can be at most 200 characters long." }),
});
export const CompanyValidation = {
  addCompany: Company.required({
    name: true,
    description: true,
    email: true,
    phoneNumber: true,
    address: true,
  }),
};
