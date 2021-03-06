/**
 * Describes a cronjob.
 */
export type CronjobConfiguration = {
  /**
   * The ID of the ProcessModel that contains the cronjob.
   */
  processModelId: string;
  /**
   * The ID of the StartEvent that contains the cronjob.
   */
  startEventId: string;
  /**
   * The crontab that describs the cronjob.
   */
  crontab: string;
  /**
   * The next time the cronjob will be triggered.
   */
  nextExecution: Date;
}
