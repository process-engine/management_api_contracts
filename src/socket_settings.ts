// tslint:disable:typedef
const paths = {
  userTaskWaiting: `user_task_waiting`,
  userTaskFinished: `user_task_finished`,
  processEnded: `process_ended`,
  processTerminated: `process_terminated`,
};

const namespace: string = 'management_api';

export const socketSettings = {
  namespace: namespace,
  paths: paths,
};
