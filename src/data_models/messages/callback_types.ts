import {ProcessEndedMessage, ProcessTerminatedMessage, UserTaskFinishedMessage, UserTaskReachedMessage} from './system_events';

export type OnUserTaskWaitingCallback = (userTaskWaiting: UserTaskReachedMessage) => void|Promise<void>;
export type OnUserTaskFinishedCallback = (userTaskFinished: UserTaskFinishedMessage) => void|Promise<void>;

export type OnProcessEndedCallback = (processEnded: ProcessEndedMessage) => void|Promise<void>;
export type OnProcessTerminatedCallback = (processTerminated: ProcessTerminatedMessage) => void|Promise<void>;
