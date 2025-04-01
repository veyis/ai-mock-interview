import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
<<<<<<< HEAD
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  const userName = user.name || '';
=======

const Page = async () => {
  const user = await getCurrentUser();
>>>>>>> daa1ba2 (Add your descriptive commit message here)

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
<<<<<<< HEAD
        userName={userName}
        userId={user.id}
=======
        userName={user?.name!}
        userId={user?.id}
        profileImage={user?.profileURL}
>>>>>>> daa1ba2 (Add your descriptive commit message here)
        type="generate"
      />
    </>
  );
};

export default Page;
