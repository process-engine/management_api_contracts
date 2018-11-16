/**
 * Describes a maual task that belongs to an active correlation.
 */
export class ManualTask {
  public id: string;
  public name: string;
  public correlationId: string;
  public processModelId: string;
  public processInstanceId?: string;
  public tokenPayload: any;
}
