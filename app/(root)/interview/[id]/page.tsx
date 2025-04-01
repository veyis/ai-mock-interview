import Image from "next/image";
import { redirect } from "next/navigation";

import Agent from "@/components/Agent";
import { getRandomInterviewCover } from "@/lib/utils";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
import DisplayTechIcons from "@/components/DisplayTechIcons";

const InterviewDetails = async ({ params }: RouteParams) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const user = await getCurrentUser();
  if (!user) redirect("/");

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user.id,
  });

  if (!feedback) {
    redirect("/");
  }

  const userName = user.name || "";

  return (
    <div className="interview-details">
      <h2>Interview Details</h2>
      <div className="interview-content">
        <div className="interview-header">
          <h3>{interview.role} Interview</h3>
          <DisplayTechIcons techStack={interview.techstack} />
        </div>
        <div className="interview-body">
          <pre>{JSON.stringify(feedback, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default InterviewDetails;
