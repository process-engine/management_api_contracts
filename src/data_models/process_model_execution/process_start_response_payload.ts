import {ProcessStartResponsePayload as ConsumerApiProcessStartResponsePayload} from '@process-engine/consumer_api_contracts';

/**
 * Contains a response from the process engine, which will be send after a process model was started.
 * Depending on the type of start callback used, this will also contain information about the correlation result.
 */
export class ProcessStartResponsePayload extends ConsumerApiProcessStartResponsePayload {
}
