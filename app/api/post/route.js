export async function POST(req) {
  const {
    userEmail,
    title,
    instruction,
    email,
    salary,
    description,
    education,
  } = await req.json();

  try {
    //find user by email address
    const user = await prisma.User.findFirst({
      where: { email: userEmail },
    });

    // Create the new subject
    const newPost = await prisma.Post.create({
      data: {
        userId: user.id,
        title,
        instruction,
        email,
        salary,
        description,
        education,
      },
    });

    return new Response(JSON.stringify(newPost), {
      status: 201, // Created
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error processing the request:", error);

    return new Response("An error occurred", {
      status: 500, // Internal Server Error
    });
  }
}

export async function GET() {
  try {
    const allPosts = await prisma.Post.findMany();
    return new Response(JSON.stringify(allPosts), {
      status: 200, // Created
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error processing the request:", error);

    return new Response("An error occurred", {
      status: 500, // Internal Server Error
    });
  }
}
