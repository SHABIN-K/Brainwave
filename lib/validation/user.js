import * as z from 'zod';

const User = z.object({
  userName: z
    .string({
      required_error: 'Email is required.',
      invalid_type_error: 'Email must be a string.',
    })
    .email({ message: 'Invalid email address.' })
    .min(5, { message: 'Email must be at least 5 characters long.' })
    .max(100, { message: 'Email can be at most 100 characters long.' }),
  about: z
    .string({
      required_error: 'About is required.',
      invalid_type_error: 'About must be a string.',
    })
    .min(10, { message: 'About must be at least 10 charactors long' })
    .max(500, { message: 'About can be at most 50 charactors long' }),
  firstName: z
    .string({
      required_error: 'First Name is required.',
      invalid_type_error: 'First Name must be a string.',
    })
    .min(2, { message: 'First Name must be at least 2 charactors long' })
    .max(20, { message: 'First Name can be at most 20 charactors long' }),
  lastName: z
    .string({
      required_error: 'Last Name is required.',
      invalid_type_error: 'Last Name must be a string.',
    })
    .min(2, { message: 'Last Name must be at least 2 charactors long' })
    .max(20, { message: 'Last Name can be at most 20 charactors long' }),
    email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string.",
    })
    .email({ message: "Invalid email address." })
    .min(5, { message: "Email must be at least 5 characters long." })
    .max(100, { message: "Email can be at most 100 characters long." }),
    age:z
    .number({
        required_error: "Age is required.",
      invalid_type_error: "Age must be a number.",
        
    })
    
    .max(2,{message: 'take rest vroooh' }),
    



});
