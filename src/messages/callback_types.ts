import {EndEventReachedMessage, TerminateEndEventReachedMessage} from './bpmn_events';
import {
  BoundaryEventFinishedMessage,
  BoundaryEventReachedMessage,
  CallActivityFinishedMessage,
  CallActivityReachedMessage,
  EmptyActivityFinishedMessage,
  EmptyActivityReachedMessage,
  ManualTaskFinishedMessage,
  ManualTaskReachedMessage,
  ProcessStartedMessage,
  UserTaskFinishedMessage,
  UserTaskReachedMessage,
} from './system_events';

export type OnEmptyActivityWaitingCallback = (userTaskWaiting: EmptyActivityReachedMessage) => void | Promise<void>;
export type OnEmptyActivityFinishedCallback = (userTaskFinished: EmptyActivityFinishedMessage) => void | Promise<void>;

export type OnUserTaskWaitingCallback = (userTaskWaiting: UserTaskReachedMessage) => void | Promise<void>;
export type OnUserTaskFinishedCallback = (userTaskFinished: UserTaskFinishedMessage) => void | Promise<void>;

export type OnCallActivityWaitingCallback = (callActivityWaiting: CallActivityReachedMessage) => void | Promise<void>;
export type OnCallActivityFinishedCallback = (callActivityFinished: CallActivityFinishedMessage) => void | Promise<void>;

export type OnBoundaryEventWaitingCallback = (boundaryEventWaiting: BoundaryEventReachedMessage) => void | Promise<void>;
export type OnBoundaryEventFinishedCallback = (boundaryEventFinished: BoundaryEventFinishedMessage) => void | Promise<void>;

export type OnManualTaskWaitingCallback = (manualTaskWaiting: ManualTaskReachedMessage) => void | Promise<void>;
export type OnManualTaskFinishedCallback = (manualTaskFinished: ManualTaskFinishedMessage) => void | Promise<void>;

export type OnProcessStartedCallback = (processStarted: ProcessStartedMessage) => void | Promise<void>;

export type OnProcessEndedCallback = (processEnded: EndEventReachedMessage) => void | Promise<void>;
export type OnProcessTerminatedCallback = (processTerminated: TerminateEndEventReachedMessage) => void | Promise<void>;
