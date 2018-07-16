export class ProcessStartRequestPayload {
  public correlationId?: string;
   // Note: The CallerId contains a process instance ID and must only ever be set, when a subprocess is to be started.
  public callerId?: string;
  public inputValues: any;
}
