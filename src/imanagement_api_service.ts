import {
  ProcessStartRequestPayload,
  ProcessStartResponsePayload,
  StartCallbackType,
} from './process_model_execution/index';

import {ManagementContext} from './index';

export interface IManagementApiService {
  startProcessInstance(context: ManagementContext,
                       processModelKey: string,
                       startEventKey: string,
                       payload: ProcessStartRequestPayload,
                       startCallbackType: StartCallbackType,
                       endEventKey?: string): Promise<ProcessStartResponsePayload>;
}
