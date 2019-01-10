import {IIdentity} from '@essential-projects/iam_contracts';

import {BaseInternalEventMessage} from '../base_internal_event_message';

/**
 * Encapsulates a Message for the EventAggregator, describing a
 * MessageEvent.
 */
export class EndEventReachedMessage extends BaseInternalEventMessage {

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              processInstanceOwner: IIdentity,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, processInstanceOwner, currentToken);
  }
}
