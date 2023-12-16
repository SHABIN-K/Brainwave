import * as z from 'zod';

const User = z.object({
  userName: z
    .string({
      required_error: 'User Name is required.',
      invalid_type_error: 'User Name must be a string.',
    })
    .min(5, { message: 'User Name must be at least 5 characters long.' })
    .max(30, { message: 'User Name can be at most 30 characters long.' }),
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
      required_error: 'Email is required.',
      invalid_type_error: 'Email must be a string.',
    })
    .email({ message: 'Invalid email address.' })
    .min(5, { message: 'Email must be at least 5 characters long.' })
    .max(100, { message: 'Email can be at most 100 characters long.' }),
  age: z
    .number({
      required_error: 'Age is required.',
      invalid_type_error: 'Age must be a number.',
    })

    .max(2, { message: 'take rest vroooh' }),
  addres: z
    .string({
      required_error: 'Address is required.',
      invalid_type_error: 'Address must be a string.',
    })
    .min(10, { message: 'Address must be at least 10 characters long.' })
    .max(200, { message: 'Address can be at most 200 characters long.' }),
  phoneNumber: z
    .string({
      required_error: 'Phone number is required.',
      invalid_type_error: 'Phone number must be a string.',
    })
    .refine((phoneNumber) => /^(\+91)[0-9]{10}$/.test(phoneNumber), {
      message: 'Phone number must start with +91 and be 10 digits long.',
    }),
  zip: z.string({
    required_error: 'Zip/Postal Code is required.',
    invalid_type_error: 'Zip/Postal Code must be a number.',
  }),
});
