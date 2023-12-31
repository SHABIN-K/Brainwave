export async function POST(req) {
  const { userEmail, name, description, email, phonenumber, address } =
    await req.json();
  try {
    // Check if a user already exists by email
    const user = await prisma.User.findFirst({
      where: { email: userEmail },
    });

    const existingCompany = await prisma.Company.findMany({
      where: {
        userId: user.id,
      },
    });
    console.log(existingCompany.length === 0);
    if (existingCompany.length === 1) {
      return new Response("Company already exist!!", {
        status: 200, // Created
        statusText: "FAILED",
      });
    } else {
      await prisma.User.update({
        where: {
          id: user.id,
        },
        data: {
          isCreated: true,
        },
      });

      // Create the new user
      const newCompany = await prisma.Company.create({
        data: {
          userId: user.id,
          name,
          description,
          email,
          phonenumber,
          address,
        },
      });

      return new Response(JSON.stringify(newCompany), {
        status: 201, // Created
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    console.error("Error processing the request:", error);

    return new Response("An error occurred", {
      status: 500, // Internal Server Error
    });
  }
}
