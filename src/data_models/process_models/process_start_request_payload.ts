/**
 * Describes the payload that a process model can be started with.
 */
export class ProcessStartRequestPayload {
  /**
   * Optional: If set, the process engine will use this as the id for the
   * correlation in which the process model will be executed.
   * If not provided, the process engine will generated a correlation id by
   * itself.
   */
  public correlationId?: string;
   /**
    * Optional: Contains a process instance id and must only ever be set,
    * when a subprocess is to be started.
    */
  public callerId?: string;
  /**
   * Contains the arguments with which to start the process model.
   */
  public inputValues: any;
}
