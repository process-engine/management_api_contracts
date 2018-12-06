import {TokenHistoryEntry} from './token_history_entry';

/**
 * Describes a group of process token of a specific process instance.
 */
export type TokenHistoryGroup = Map<string, Array<TokenHistoryEntry>>;
