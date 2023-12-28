import * as z from "zod";

const Job = z.object({
  title: z
    .string({
      required_error: "Title is required.",
      invalid_type_error: "Title must be a string.",
    })
    .min(4, { message: "Title must be at least 4 characters long." })
    .max(50, { message: "Title can be at most 50 characters long." }),
  description: z
    .string({
      required_error: "Description is required.",
      invalid_type_error: "Description must be a string.",
    })
    .min(10, { message: "Description must be at least 10 characters long." })
    .max(100, { message: "Description can be at most 100 characters long." }),
  education: z
    .string({
      required_error: "Education is required.",
      invalid_type_error: "Education must be a string.",
    })
    .max(500, { message: "Education can be at most 100 characters long." }),
  salary: z.string({
    required_error: "Salary is required.",
    invalid_type_error: "Salary must be a string.",
  }),
  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string.",
    })
    .email({ message: "Invalid email address." })
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(100, { message: "Email can be at most 100 characters long." }),

  instruction: z
    .string({
      required_error: "Instruction is required.",
      invalid_type_error: "Instruction must be a string.",
    })

    .min(5, { message: "Instruction must be at least 5 characters long." })
    .max(100, { message: "Instruction can be at most 100 characters long." }),
});

export const JobValidation = {
  addJob: Job.required({
    title: true,
    instruction: true,
    email: true,
    salary: true,
    description: true,
    education: true,
  }),
};
