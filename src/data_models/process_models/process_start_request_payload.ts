/**
 * Describes the payload that a ProcessModel can be started with.
 */
export class ProcessStartRequestPayload {

  /**
   * Optional: If set, the ProcessEngine will use this as the ID for the
   * Correlation in which the ProcessModel will be executed.
   * If not provided, the ProcessEngine will generated a Correlation ID by
   * itself.
   */
  public correlationId?: string;
  /**
    * Optional: Contains a ProcessInstance ID and must only ever be set,
    * when a SubProcess is to be started.
    */
  public callerId?: string;
  /**
   * Contains the arguments with which to start the ProcessModel.
   */
  public inputValues?: any;

}
