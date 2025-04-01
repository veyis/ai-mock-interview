import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Feedback = async ({ params }: RouteParams) => {
<<<<<<< HEAD
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const user = await getCurrentUser();
  if (!user) redirect("/");
=======
  const { id } = await params;
  const user = await getCurrentUser();
>>>>>>> daa1ba2 (Add your descriptive commit message here)

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
<<<<<<< HEAD
    userId: user.id,
  });

  if (!feedback) {
    redirect("/");
  }

=======
    userId: user?.id!,
  });

>>>>>>> daa1ba2 (Add your descriptive commit message here)
  return (
    <section className="section-feedback">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          Feedback on the Interview -{" "}
          <span className="capitalize">{interview.role}</span> Interview
        </h1>
      </div>

      <div className="flex flex-row justify-center ">
        <div className="flex flex-row gap-5">
          {/* Overall Impression */}
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" width={22} height={22} alt="star" />
            <p>
              Overall Impression:{" "}
              <span className="text-primary-200 font-bold">
<<<<<<< HEAD
                {feedback.totalScore}
=======
                {feedback?.totalScore}
>>>>>>> daa1ba2 (Add your descriptive commit message here)
              </span>
              /100
            </p>
          </div>

          {/* Date */}
          <div className="flex flex-row gap-2">
            <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
            <p>
<<<<<<< HEAD
              {feedback.createdAt
=======
              {feedback?.createdAt
>>>>>>> daa1ba2 (Add your descriptive commit message here)
                ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <hr />

<<<<<<< HEAD
      <p>{feedback.finalAssessment}</p>
=======
      <p>{feedback?.finalAssessment}</p>
>>>>>>> daa1ba2 (Add your descriptive commit message here)

      {/* Interview Breakdown */}
      <div className="flex flex-col gap-4">
        <h2>Breakdown of the Interview:</h2>
<<<<<<< HEAD
        {Array.isArray(feedback.categoryScores) && feedback.categoryScores.map((category, index) => (
=======
        {feedback?.categoryScores?.map((category, index) => (
>>>>>>> daa1ba2 (Add your descriptive commit message here)
          <div key={index}>
            <p className="font-bold">
              {index + 1}. {category.name} ({category.score}/100)
            </p>
            <p>{category.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3>Strengths</h3>
        <ul>
<<<<<<< HEAD
          {Array.isArray(feedback.strengths) && feedback.strengths.map((strength, index) => (
=======
          {feedback?.strengths?.map((strength, index) => (
>>>>>>> daa1ba2 (Add your descriptive commit message here)
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3>Areas for Improvement</h3>
        <ul>
<<<<<<< HEAD
          {Array.isArray(feedback.areasForImprovement) && feedback.areasForImprovement.map((area, index) => (
=======
          {feedback?.areasForImprovement?.map((area, index) => (
>>>>>>> daa1ba2 (Add your descriptive commit message here)
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      <div className="buttons">
        <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to dashboard
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Retake Interview
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Feedback;
