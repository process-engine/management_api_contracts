/**
 * Describes a MaualTask that belongs to an active Correlation.
 */
export class ManualTask {
  /**
   * The model ID of the ManualTask, as it is declared in the ProcessModel.
   */
  public id: string;
  /**
   * The name of the ManualTask, as it is declared in the ProcessModel.
   */
  public name: string;
  /**
   * The instance ID of the ManualTask.
   */
  public flowNodeInstanceId?: string;
  /**
   * The ID of the Correlation that the ManualTask belongs to.
   */
  public correlationId: string;
  /**
   * The ID of the ProcessModel that the ManualTask belongs to.
   */
  public processModelId: string;
  /**
   * The ID of the ProcessInstance that the ManualTask belongs to.
   */
  public processInstanceId?: string;
  /**
   * The token payload the ManualTask got suspended with.
   */
  public tokenPayload: any;
}
