import {EventType} from './event_type';

/**
 * Describes an event that can be triggered through the ConsumerAPI.
 */

export class Event {
  /**
   * The id of the event.
   */
  public id: string;
  /**
   * Optional: The instance id of this specific FlowNode.
   */
  public flowNodeInstanceId?: string;
  /**
   * The corresponding id of the Correlation holding the event.
   */
  public correlationId: string;
  /**
   * The corresponding id of the ProcessModel.
   */
  public processModelId: string;
  /**
   * The id of the ProcessInstance.
   */
  public processInstanceId?: string;
  /**
   * The BPMN type of the event.
   */
  public bpmnType: string;
  /**
   * The type of the event.
   */
  public eventType: EventType;
  /**
   * The name of the event.
   */
  public eventName: string;
}
