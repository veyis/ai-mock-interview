import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user.name}
        userId={user.id}
        type="generate"
      />
    </>
  );
};

export default Page;
