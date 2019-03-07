import {TokenHistoryEntry} from './token_history_entry';

/**
 * Describes a group of ProcessTokens for a specific ProcessInstance.
 */
export type TokenHistoryGroup = {[processInstanceId: string]: Array<TokenHistoryEntry>};
