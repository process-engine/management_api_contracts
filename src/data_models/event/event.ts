import {EventType} from './event_type';

/**
 * Describes an event that can be triggered through the ManagementAPI.
 */

export class Event {
  public id: string;
  public flowNodeInstanceId?: string;
  public correlationId: string;
  public processModelId: string;
  public processInstanceId?: string;
  /**
   * The BPMN type of the event (StartEvent, EndEvent, etc.).
   */
  public bpmnType: string;
  /**
   * The type of the event (Message, Signal, etc).
   */
  public eventType: EventType;
  /**
   * The name of the event.
   */
  public eventName: string;
}
