import {Subscription} from '@essential-projects/event_aggregator_contracts';

/**
 * The base class for definining cronjob messages.
 */
export class CronjobBaseEventMessage {

  public readonly subscription: Subscription;
  public readonly startEventId: string;
  public readonly cronjob: string;

  constructor(
    subscription: Subscription,
    startEventId: string,
    cronjob: string,
  ) {
    this.subscription = subscription;
    this.startEventId = startEventId;
    this.cronjob = cronjob;

  }

}
