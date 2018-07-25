// TODO: Refactor into namespaces aswell. Should be done after the impending release to avoid unnecessary breaking changes.
export * from './correlation/index';
export * from './event/index';
export * from './user_task/index';

import * as execution from './process_model_execution/index';

// tslint:disable-next-line:no-namespace
export namespace ProcessModelExecution {
  export import ProcessModel = execution.ProcessModel;
  export import ProcessModelList = execution.ProcessModelList;
  export import ProcessStartRequestPayload = execution.ProcessStartRequestPayload;
  export import ProcessStartResponsePayload = execution.ProcessStartResponsePayload;
  export import StartCallbackType = execution.StartCallbackType;
}
