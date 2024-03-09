# StudyDrive 📚
A full stack web application that makes studying easier for students and document management hassle-free for teachers. **Students can easily find study materials sorted by subjects and courses, while teachers can upload, organize, and manage resources effortlessly**. StudyHub encourages teamwork, makes study materials easy to access, and acts as a hub for all educational resources 🚀

## Features 🌟

- **Lightweight:**: Crafted with minimalistic UI design.
- **PWA:** Install as a Progressive Web App on your device.
- **Easy Navigation:** Students can effortlessly find study materials, sorted by subjects, courses, and categories.
- **Advanced Search:** Powerful search functionality to quickly locate specific study materials.
- **Document Management:** Teachers can easily upload, organize, and manage a variety of educational resources.
- **Admin Dashboard:** Admins can conveniently control and manage users and roles.
- **Security Measures:** Ensuring secure file upload and storage..
- **User Authentication:** Secure login for teachers and admin.
- **Responsive Design:** User-friendly experience on various devices.
  
## Tech Stack 🛠️

- **NEXT.JS:** React-based framework for building modern web applications.
- **Tailwind CSS:** Utility-first CSS framework for highly customizable UIs.
- **MongoDB:** NoSQL database for flexible and scalable data storage.
- **NextAuth:** Authentication solution for Next.js with social logins and more.
- **Prisma:** Modern database toolkit for simplified data access.
- **Zustand:** Lightweight state management library for React.

## Getting Started 🚦

### Prerequisites 🚧

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) for persisting data.


### Environment Variables ⚙️

To run this project, you will need to add the following environment variables to your .env file:

* `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY `:Your Clerk public key. This identifies your Clerk project to the client-side of your application.
* `CLERK_SECRET_KEY` :Your Clerk secret key (keep confidential!). This is used by the server-side of your application to talk securely with Clerk's API.
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: Path for user sign-in (`/sign-in`).
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`: Path for user sign-up (`/sign-up`).
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`: Redirect URL after user sign-in (`/dashboard`).
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`: Redirect URL after user sign-up (`/dashboard`).
* `OPENAI_API_KEY `: Your OpenAI API Key (for interacting with OpenAI services)
* `REPLICATE_API_TOKEN`:Your Replicate API Token (for interacting with Replicate services)
- `DATABASE_URL`: Your MongoDB connection URL.
- `STRIPE_API_KEY`: Public key for your Stripe application.
- `STRIPE_WEBHOOK_SECRET`: Your Stripe webhook secret.
- `NEXT_PUBLIC_APP_URL`: Application URL, e.g., "http://localhost:3000".
 
### How To Use 🚀
From your command line:

```bash
# Clone this repository
  $git clone https://github.com/your_github_name/brainwave.git

# Go into the repository
  $cd brainwave

# Install dependencies
  $npm install
  # <Create .env appropriately>

# This is needed if you are planning to run studydrive locally
  $npx prisma db push

# Start the app in development mode with hot-code reloading by running:
  $npm run dev
````

## Support 💬
Join Our [Telegram Group](https://www.telegram.dog/codexbotzsupport) For Support/Assistance And Our [Channel](https://www.telegram.dog/codexbotz) For Updates.   
   
Report Bugs, Give Feature Requests There..   

##

  **⭐️ Star this Repo if you Liked it! ⭐️**

