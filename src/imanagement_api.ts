import {APIs} from './apis/index';

/**
 * The primary access point for the ConsumerAPI.
 * This service contains all functions that the ConsumerAPI employs to
 * communicate with the ProcessEngine.
 */
export interface IManagementApi
  extends APIs.ICorrelationManagementApi,
          APIs.IEventManagementApi,
          APIs.IKpiManagementApi,
          APIs.ILoggingManagementApi,
          APIs.IManualTaskManagementApi,
          APIs.INotificationManagementApi,
          APIs.IProcessModelManagementApi,
          APIs.ITokenHistoryManagementApi,
          APIs.IUserTaskManagementApi {}
