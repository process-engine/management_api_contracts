/**
 * Describes a maual task that belongs to an active correlation.
 */
export class ManualTask {
  /**
   * The ID of the ManualTask.
   */
  public id: string;
  /**
   * The name of the ManualTask.
   */
  public name: string;
  /**
   * The ID of the correlation that the ManualTask belongs to.
   */
  public correlationId: string;
  /**
   * The ID of the process model that the ManualTask belongs to.
   */
  public processModelId: string;
  /**
   * The ID of the process instance that the ManualTask belongs to.
   */
  public processInstanceId?: string;
  /**
   * The token payload the ManualTask got suspended with.
   */
  public tokenPayload: any;
}
