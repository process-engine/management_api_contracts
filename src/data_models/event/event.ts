import {EventType} from './event_type';

/**
 * Describes a triggerable event.
 */

export class Event {
  /**
   * The model ID of the event, as it is declared in the ProcessModel.
   */
  public id: string;
  /**
   * The name of the event, as it is declared in the ProcessModel.
   */
  public eventName: string;
  /**
   * The BPMN type of the event (StartEvent, EndEvent, etc).
   */
  public bpmnType: string;
  /**
   * The type of the event (Message, Signal, etc).
   */
  public eventType: EventType;
  /**
   * The instance ID of the event.
   */
  public flowNodeInstanceId?: string;
  /**
   * The ID of the Correlation that the event belongs to.
   */
  public correlationId: string;
  /**
   * The ID of the ProcessModel that the event belongs to.
   */
  public processModelId: string;
  /**
   * The ID of the ProcessInstance that the event belongs to.
   */
  public processInstanceId?: string;
}
