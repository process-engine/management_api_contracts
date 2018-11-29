// tslint:disable:typedef
const pathParams = {
  processModelId: 'process_model_id',
};

const paths = {
  userTaskWaiting: `user_task_waiting`,
  userTaskFinished: `user_task_finished`,
  manualTaskWaiting: `manual_task_waiting`,
  manualTaskFinished: `manual_task_finished`,
  processStarted: `process_started`,
  processEnded: `process_ended`,
  processTerminated: `process_terminated`,
  processInstanceStarted: `/process_instance_started/${pathParams.processModelId}`,
};

const namespace: string = 'management_api';

export const socketSettings = {
  namespace: namespace,
  paths: paths,
  pathParams: pathParams,
};
