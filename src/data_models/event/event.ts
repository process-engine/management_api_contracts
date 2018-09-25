import {EventTriggerPayload} from './event_trigger_payload';

/**
 * Describes an event.
 */
export class Event {
  public id: string;
  public processInstanceId?: string;
  public data?: EventTriggerPayload;
}
