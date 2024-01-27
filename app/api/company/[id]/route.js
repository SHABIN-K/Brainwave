import prisma from "@/lib/prisma";


export async function GET(req, { params }) {

    try {
    const userCompany = await prisma.Company.findMany({
      where: {
        userId: params.id,
      },
    });
  

    return new Response(JSON.stringify(userCompany[0]), {
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