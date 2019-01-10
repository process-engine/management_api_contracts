import {IIdentity} from '@essential-projects/iam_contracts';

import {BaseBpmnEventMessage} from './base_bpmn_event_message';

/**
 * Encapsulates a Message for the EventAggregator, describing a
 * MessageEvent.
 */
export class SignalEventReachedMessage extends BaseBpmnEventMessage {

  public signalReference: string;

  constructor(signalReference: string,
              correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, currentToken);

    this.signalReference = signalReference;
  }
}
