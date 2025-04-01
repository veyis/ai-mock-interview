import { redirect } from "next/navigation";
import {
  getInterviewById,
  getFeedbackByInterviewId,
} from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
import DisplayTechIcons from "@/components/DisplayTechIcons";

const FeedbackPage = async ({ params }: RouteParams) => {
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

  return (
    <div className="feedback-page">
      <h2>Interview Feedback</h2>
      <div className="feedback-content">
        <div className="feedback-header">
          <h3>{interview.role} Interview Feedback</h3>
          <DisplayTechIcons techStack={interview.techstack} />
        </div>
        <div className="feedback-body">
          <div className="feedback-score">
            <h4>Overall Score</h4>
            <p>{feedback.totalScore}%</p>
          </div>
          <div className="feedback-details">
            <h4>Detailed Feedback</h4>
            <pre>{JSON.stringify(feedback, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
