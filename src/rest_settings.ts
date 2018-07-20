// tslint:disable:typedef
const params = {
  processModelKey: ':process_model_key',
  startEventKey: ':start_event_key',
};

const paths = {
  startProcessInstance: `/process_models/${params.processModelKey}/start_events/${params.startEventKey}/start`,
  processModelEvents: `/process_models/${params.processModelKey}/events`,
};

export const restSettings = {
  params: params,
  paths: paths,
};
