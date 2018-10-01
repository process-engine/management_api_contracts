/**
 * Contains a response from the ProcessEngine, which will be send after a
 * ProcessInstance was started.
 * Depending on the type of start callback used, this will also contain
 * information about EndEvent that was reached and the overall result.
 */
export class ProcessStartResponsePayload {
  public correlationId: string;
  public endEventId?: string;
  public tokenPayload?: string;
}
