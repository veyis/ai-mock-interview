<<<<<<< HEAD
enum MessageTypeEnum {
=======
export enum MessageTypeEnum {
>>>>>>> daa1ba2 (Add your descriptive commit message here)
  TRANSCRIPT = "transcript",
  FUNCTION_CALL = "function-call",
  FUNCTION_CALL_RESULT = "function-call-result",
  ADD_MESSAGE = "add-message",
}

<<<<<<< HEAD
enum MessageRoleEnum {
=======
export enum MessageRoleEnum {
>>>>>>> daa1ba2 (Add your descriptive commit message here)
  USER = "user",
  SYSTEM = "system",
  ASSISTANT = "assistant",
}

<<<<<<< HEAD
enum TranscriptMessageTypeEnum {
=======
export enum TranscriptMessageTypeEnum {
>>>>>>> daa1ba2 (Add your descriptive commit message here)
  PARTIAL = "partial",
  FINAL = "final",
}

<<<<<<< HEAD
interface BaseMessage {
  type: MessageTypeEnum;
}

interface TranscriptMessage extends BaseMessage {
=======
export interface BaseMessage {
  type: MessageTypeEnum;
}

export interface TranscriptMessage extends BaseMessage {
>>>>>>> daa1ba2 (Add your descriptive commit message here)
  type: MessageTypeEnum.TRANSCRIPT;
  role: MessageRoleEnum;
  transcriptType: TranscriptMessageTypeEnum;
  transcript: string;
}

<<<<<<< HEAD
interface FunctionCallMessage extends BaseMessage {
=======
export interface FunctionCallMessage extends BaseMessage {
>>>>>>> daa1ba2 (Add your descriptive commit message here)
  type: MessageTypeEnum.FUNCTION_CALL;
  functionCall: {
    name: string;
    parameters: unknown;
  };
}

<<<<<<< HEAD
interface FunctionCallResultMessage extends BaseMessage {
=======
export interface FunctionCallResultMessage extends BaseMessage {
>>>>>>> daa1ba2 (Add your descriptive commit message here)
  type: MessageTypeEnum.FUNCTION_CALL_RESULT;
  functionCallResult: {
    forwardToClientEnabled?: boolean;
    result: unknown;
    [a: string]: unknown;
  };
}

<<<<<<< HEAD
type Message =
=======
export type Message =
>>>>>>> daa1ba2 (Add your descriptive commit message here)
  | TranscriptMessage
  | FunctionCallMessage
  | FunctionCallResultMessage;
