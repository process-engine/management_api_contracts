import {APIs} from './apis/index';

/**
 * The client provides endpoints for all UseCases the ManagementAPI employs.
 */
export interface IManagementApiClient
  extends APIs.ICorrelationManagementApi,
  APIs.ICronjobManagementApi,
  APIs.IEmptyActivityManagementApi,
  APIs.IEventManagementApi,
  APIs.IFlowNodeInstanceManagementApi,
  APIs.IKpiManagementApi,
  APIs.ILoggingManagementApi,
  APIs.IManualTaskManagementApi,
  APIs.INotificationManagementApi,
  APIs.IProcessModelManagementApi,
  APIs.ITokenHistoryManagementApi,
  APIs.IUserTaskManagementApi {}
