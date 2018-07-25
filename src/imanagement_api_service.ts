import {
  Correlation,
  EventList,
  ProcessModel,
  ProcessModelList,
  ProcessStartRequestPayload,
  ProcessStartResponsePayload,
  StartCallbackType,
  UserTaskList,
  UserTaskResult,
} from './data_models/index';

import {ManagementContext} from './management_context';

export interface IManagementApiService {
  // Correlations
  getAllActiveCorrelations(context: ManagementContext): Promise<Array<Correlation>>;
  // Process Models
  getProcessModels(context: ManagementContext): Promise<ProcessModelList>;
  getProcessModelById(context: ManagementContext, processModelKey: string): Promise<ProcessModel>;
  startProcessInstance(context: ManagementContext,
                       processModelKey: string,
                       startEventKey: string,
                       payload: ProcessStartRequestPayload,
                       startCallbackType: StartCallbackType,
                       endEventKey?: string): Promise<ProcessStartResponsePayload>;
  getEventsForProcessModel(context: ManagementContext, processModelKey: string): Promise<EventList>;
  // UserTasks
  getUserTasksForProcessModel(context: ManagementContext, processModelKey: string): Promise<UserTaskList>;
  getUserTasksForCorrelation(context: ManagementContext, correlationId: string): Promise<UserTaskList>;
  getUserTasksForProcessModelInCorrelation(context: ManagementContext, processModelKey: string, correlationId: string): Promise<UserTaskList>;
  finishUserTask(context: ManagementContext,
                 processModelKey: string,
                 correlationId: string,
                 userTaskId: string,
                 userTaskResult: UserTaskResult): Promise<void>;
}
