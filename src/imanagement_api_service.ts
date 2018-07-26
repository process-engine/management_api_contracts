import {
  Correlation,
  EventList,
  ProcessModel,
  ProcessModelList,
  ProcessStartRequestPayload,
  ProcessStartResponsePayload,
  StartCallbackType,
  UpdateProcessModelRequestPayload,
  UserTaskList,
  UserTaskResult,
} from './data_models/index';

import {ManagementContext} from './management_context';

export interface IManagementApiService {
  // Correlations
  getAllActiveCorrelations(context: ManagementContext): Promise<Array<Correlation>>;
  // Process Models
  getProcessModels(context: ManagementContext): Promise<ProcessModelList>;
  getProcessModelById(context: ManagementContext, processModelId: string): Promise<ProcessModel>;
  updateProcessModel(context: ManagementContext, processModelId: string, payload: UpdateProcessModelRequestPayload): Promise<void>;
  startProcessInstance(context: ManagementContext,
                       processModelId: string,
                       startEventId: string,
                       payload: ProcessStartRequestPayload,
                       startCallbackType: StartCallbackType,
                       endEventId?: string): Promise<ProcessStartResponsePayload>;
  getEventsForProcessModel(context: ManagementContext, processModelId: string): Promise<EventList>;
  // UserTasks
  getUserTasksForProcessModel(context: ManagementContext, processModelId: string): Promise<UserTaskList>;
  getUserTasksForCorrelation(context: ManagementContext, correlationId: string): Promise<UserTaskList>;
  getUserTasksForProcessModelInCorrelation(context: ManagementContext, processModelId: string, correlationId: string): Promise<UserTaskList>;
  finishUserTask(context: ManagementContext,
                 processModelId: string,
                 correlationId: string,
                 userTaskId: string,
                 userTaskResult: UserTaskResult): Promise<void>;
}
