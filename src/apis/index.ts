import * as correlationApi from './icorrelation_management_api';
import * as eventApi from './ievent_management_api';
import * as kpiApi from './ikpi_management_api';
import * as loggingApi from './ilogging_management_api';
import * as manualTaskApi from './imanual_task_management_api';
import * as processModelApi from './iprocess_model_management_api';
import * as tokenHistoryApi from './itoken_history_management_api';
import * as userTaskApi from './iuser_task_management_api';

// tslint:disable-next-line:no-namespace
export namespace APIs {
  export import ICorrelationManagementApi = correlationApi.ICorrelationManagementApi;
  export import IEventManagementApi = eventApi.IEventManagementApi;
  export import IKpiManagementApi = kpiApi.IKpiManagementApi;
  export import ILoggingManagementApi = loggingApi.ILoggingManagementApi;
  export import IManualTaskManagementApi = manualTaskApi.IManualTaskManagementApi;
  export import IProcessModelManagementApi = processModelApi.IProcessModelManagementApi;
  export import ITokenHistoryManagementApi = tokenHistoryApi.ITokenHistoryManagementApi;
  export import IUserTaskManagementApi = userTaskApi.IUserTaskManagementApi;
}
