/* eslint-disable @typescript-eslint/no-unused-vars */
import * as correlationApi from './icorrelation_management_api';
import * as cronjobApi from './icronjob_management_api';
import * as emptyActivityApi from './iempty_activity_management_api';
import * as eventApi from './ievent_management_api';
import * as flowNodeInstanceApi from './iflow_node_instance_management_api';
import * as kpiApi from './ikpi_management_api';
import * as loggingApi from './ilogging_management_api';
import * as manualTaskApi from './imanual_task_management_api';
import * as notificationApi from './inotification_management_api';
import * as processModelApi from './iprocess_model_management_api';
import * as tokenHistoryApi from './itoken_history_management_api';
import * as userTaskApi from './iuser_task_management_api';

export namespace APIs {
  export import ICorrelationManagementApi = correlationApi.ICorrelationManagementApi;
  export import ICronjobManagementApi = cronjobApi.ICronjobManagementApi;
  export import IEmptyActivityManagementApi = emptyActivityApi.IEmptyActivityManagementApi;
  export import IEventManagementApi = eventApi.IEventManagementApi;
  export import IFlowNodeInstanceManagementApi = flowNodeInstanceApi.IFlowNodeInstanceManagementApi;
  export import IKpiManagementApi = kpiApi.IKpiManagementApi;
  export import ILoggingManagementApi = loggingApi.ILoggingManagementApi;
  export import IManualTaskManagementApi = manualTaskApi.IManualTaskManagementApi;
  export import INotificationManagementApi = notificationApi.INotificationManagementApi;
  export import IProcessModelManagementApi = processModelApi.IProcessModelManagementApi;
  export import ITokenHistoryManagementApi = tokenHistoryApi.ITokenHistoryManagementApi;
  export import IUserTaskManagementApi = userTaskApi.IUserTaskManagementApi;
}
