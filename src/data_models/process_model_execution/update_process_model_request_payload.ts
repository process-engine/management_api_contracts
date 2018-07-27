/**
 * Contains the payload that has to be provided with an updateProcessModel request.
 */
export class UpdateProcessModelRequestPayload {
  /**
   * The xml code with which to update the process model.
   */
  public xml: string;
  /**
   * If set to true, the import will overwrite existing process models with the same name.
   * If set to false, attempting to overwrite an already existing process model will cause an error.
   */
  public overwriteExisting?: boolean;
}
