/**
 * Describes a maual task that belongs to an active correlation.
 */
export class ManualTask {
  /**
   * The id of the ManualTask.
   */
  public id: string;
  /**
   * The name of the ManualTask.
   */
  public name: string;
  /**
   * The id of the correlation that the ManualTask belongs to.
   */
  public correlationId: string;
  /**
   * The id of the process model that the ManualTask belongs to.
   */
  public processModelId: string;
  /**
   * The id of the process instance that the ManualTask belongs to.
   */
  public processInstanceId?: string;
  /**
   * The token payload the ManualTask got suspended with.
   */
  public tokenPayload: any;
}
