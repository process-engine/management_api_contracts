import {IIdentity} from '@essential-projects/iam_contracts';

import {BaseInternalEventMessage} from '../base_internal_event_message';

/**
 * The message which is send, when a new ProcessInstance started.
 */
export class ProcessStartedMessage extends BaseInternalEventMessage {

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              startEventId: string,
              startEventInstanceId: string,
              processInstanceOwner: IIdentity,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, startEventId, startEventInstanceId, processInstanceOwner, currentToken);
  }
}
