import {APIs} from './apis/index';

/**
 * The primary access point for the ManagementApi.
 * This service contains all functions that the ManagementApi employs to
 * communicate with the ProcessEngine.
 */
export interface IManagementApi
  extends APIs.ICorrelationManagementApi,
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
