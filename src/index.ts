
export * from './management_context';
export * from './management_request';
export * from './imanagement_api_service';
export * from './imanagement_api_accessor';
export * from './rest_settings';

// TODO: Refactor into namespaces aswell. Should be done after the upcoming release to avoid unnecessary breaking changes.
export * from './data_models/correlation/index';
export * from './data_models/event/index';
export * from './data_models/user_task/index';
import * as execution from './data_models/process_model_execution/index';

// tslint:disable-next-line:no-namespace
export namespace ProcessModelExecution {
  export import ProcessModel = execution.ProcessModel;
  export import ProcessModelList = execution.ProcessModelList;
  export import ProcessStartRequestPayload = execution.ProcessStartRequestPayload;
  export import ProcessStartResponsePayload = execution.ProcessStartResponsePayload;
  export import StartCallbackType = execution.StartCallbackType;
  export import UpdateProcessModelRequestPayload = execution.UpdateProcessModelRequestPayload;
}
