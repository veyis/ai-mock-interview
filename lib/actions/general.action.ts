"use server";

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";

import { db } from "@/firebase/admin";
import { feedbackSchema, Interview } from "@/constants";

export async function createFeedback(params: CreateFeedbackParams) {
  const { interviewId, userId, transcript, feedbackId } = params;

  try {
    const formattedTranscript = transcript
      .map(
        (sentence: { role: string; content: string }) =>
          `- ${sentence.role}: ${sentence.content}\n`
      )
      .join("");

    const { object } = await generateObject({
      model: google("gemini-2.0-flash-001", {
        structuredOutputs: false,
      }),
      schema: feedbackSchema,
      prompt: `
        You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
        Transcript:
        ${formattedTranscript}

        Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
        - **Communication Skills**: Clarity, articulation, structured responses.
        - **Technical Knowledge**: Understanding of key concepts for the role.
        - **Problem-Solving**: Ability to analyze problems and propose solutions.
        - **Cultural & Role Fit**: Alignment with company values and job role.
        - **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
        `,
      system:
        "You are a professional interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories",
    });

    const feedback = {
      interviewId: interviewId,
      userId: userId,
      totalScore: object.totalScore,
      categoryScores: object.categoryScores,
      strengths: object.strengths,
      areasForImprovement: object.areasForImprovement,
      finalAssessment: object.finalAssessment,
      createdAt: new Date().toISOString(),
    };

    let feedbackRef;

    if (feedbackId) {
      feedbackRef = db.collection("feedback").doc(feedbackId);
    } else {
      feedbackRef = db.collection("feedback").doc();
    }

    await feedbackRef.set(feedback);

    return { success: true, feedbackId: feedbackRef.id };
  } catch (error) {
    console.error("Error saving feedback:", error);
    return { success: false };
  }
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  try {
    const interview = await db.collection("interviews").doc(id).get();
    if (!interview.exists) return null;

    const data = interview.data();
    if (!data) return null;

    return {
      id: interview.id,
      userId: data.userId,
      type: data.type,
      role: data.role,
      techstack: data.techstack,
      createdAt: data.createdAt,
    } as Interview;
  } catch (error) {
    console.error("Error getting interview:", error);
    return null;
  }
}

export async function getFeedbackByInterviewId({
  interviewId,
  userId,
}: {
  interviewId: string;
  userId: string;
}): Promise<any | null> {
  try {
    const feedback = await db
      .collection("feedback")
      .where("interviewId", "==", interviewId)
      .where("userId", "==", userId)
      .get();

    if (feedback.empty) return null;

    const data = feedback.docs[0].data();
    if (!data) return null;

    return {
      id: feedback.docs[0].id,
      ...data,
    };
  } catch (error) {
    console.error("Error getting feedback:", error);
    return null;
  }
}

export async function getLatestInterviews({
  userId,
  limit = 20,
}: {
  userId: string;
  limit?: number;
}): Promise<Interview[] | null> {
  try {
    const interviews = await db
      .collection("interviews")
      .orderBy("createdAt", "desc")
      .limit(limit)
      .get();

    return interviews.docs
      .map((doc) => {
        const data = doc.data();
        if (!data) return null;
        return {
          id: doc.id,
          userId: data.userId,
          type: data.type,
          role: data.role,
          techstack: data.techstack,
          createdAt: data.createdAt,
        } as Interview;
      })
      .filter((interview): interview is Interview => interview !== null);
  } catch (error) {
    console.error("Error getting latest interviews:", error);
    return null;
  }
}

export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[] | null> {
  try {
    const interviews = await db
      .collection("interviews")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .get();

    return interviews.docs
      .map((doc) => {
        const data = doc.data();
        if (!data) return null;
        return {
          id: doc.id,
          userId: data.userId,
          type: data.type,
          role: data.role,
          techstack: data.techstack,
          createdAt: data.createdAt,
        } as Interview;
      })
      .filter((interview): interview is Interview => interview !== null);
  } catch (error) {
    console.error("Error getting user interviews:", error);
    return null;
  }
}
