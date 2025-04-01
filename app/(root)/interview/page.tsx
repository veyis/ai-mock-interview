import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  const userName = user.name || "";

  return (
    <>
      <h3>Interview generation</h3>

      <Agent userName={userName} userId={user.id} type="generate" />
    </>
  );
};

export default Page;
