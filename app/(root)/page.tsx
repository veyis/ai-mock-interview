import Link from "next/link";
import Image from "next/image";
<<<<<<< HEAD
import { redirect } from "next/navigation";
=======
>>>>>>> daa1ba2 (Add your descriptive commit message here)

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

async function Home() {
  const user = await getCurrentUser();
<<<<<<< HEAD
  if (!user) redirect("/");

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user.id),
    getLatestInterviews({ userId: user.id }),
  ]);

  const hasPastInterviews = Array.isArray(userInterviews) && userInterviews.length > 0;
  const hasUpcomingInterviews = Array.isArray(allInterview) && allInterview.length > 0;

  const pastInterviews = Array.isArray(userInterviews) ? userInterviews : [];
  const upcomingInterviews = Array.isArray(allInterview) ? allInterview : [];
=======

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;
>>>>>>> daa1ba2 (Add your descriptive commit message here)

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>
<<<<<<< HEAD
          <Link href="/interview">
            <Button>Start Practice</Button>
          </Link>
=======

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
>>>>>>> daa1ba2 (Add your descriptive commit message here)
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {hasPastInterviews ? (
<<<<<<< HEAD
            pastInterviews.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user.id}
=======
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
>>>>>>> daa1ba2 (Add your descriptive commit message here)
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
<<<<<<< HEAD
            <p>No past interviews</p>
=======
            <p>You haven&apos;t taken any interviews yet</p>
>>>>>>> daa1ba2 (Add your descriptive commit message here)
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
<<<<<<< HEAD
            upcomingInterviews.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user.id}
=======
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
>>>>>>> daa1ba2 (Add your descriptive commit message here)
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
<<<<<<< HEAD
            <p>No upcoming interviews</p>
=======
            <p>There are no interviews available</p>
>>>>>>> daa1ba2 (Add your descriptive commit message here)
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
