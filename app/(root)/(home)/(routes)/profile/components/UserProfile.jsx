import { useSession } from "next-auth/react";
import Image from "next/image";

const UserProfile = () => {
  const { data: session } = useSession();
  return (
    <div className="flex h-full w-full items-center justify-center gap-6">
      <h2 className=" md:text-4xl">Welcome {session?.user.name}</h2>
      {session?.user.image && (
        <Image
          src={session?.user?.image}
          width={80}
          height={80}
          className="rounded-full"
          alt="user profile image"
        />
      )}
    </div>
  );
};

export default UserProfile;
