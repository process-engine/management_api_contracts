import {
  ProcessStartRequestPayload,
  ProcessStartResponsePayload,
  StartCallbackType,
} from './process_model_execution/index';

import {EventList} from './data_models/index';
import {ManagementContext} from './management_context';

export interface IManagementApiService {
  startProcessInstance(context: ManagementContext,
                       processModelKey: string,
                       startEventKey: string,
                       payload: ProcessStartRequestPayload,
                       startCallbackType: StartCallbackType,
                       endEventKey?: string): Promise<ProcessStartResponsePayload>;
  getEventsForProcessModel(context: ManagementContext, processModelKey: string): Promise<EventList>;
}
