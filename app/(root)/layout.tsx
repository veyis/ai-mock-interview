import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

<<<<<<< HEAD
import { isAuthenticated, getCurrentUser } from "@/lib/actions/auth.action";
import UserProfile from "@/components/user-profile";
=======
import { isAuthenticated } from "@/lib/actions/auth.action";
>>>>>>> daa1ba2 (Add your descriptive commit message here)

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

<<<<<<< HEAD
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between">
=======
  return (
    <div className="root-layout">
      <nav>
>>>>>>> daa1ba2 (Add your descriptive commit message here)
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>
<<<<<<< HEAD
        <UserProfile user={user} />
=======
>>>>>>> daa1ba2 (Add your descriptive commit message here)
      </nav>

      {children}
    </div>
  );
};

export default Layout;
