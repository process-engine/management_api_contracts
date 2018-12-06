import {TokenHistoryEntry} from './token_history_entry';

/**
 * Describes a group of orocess token of a specific process instance.
 */
export type TokenHistoryGroup = Map<string, Array<TokenHistoryEntry>>;
