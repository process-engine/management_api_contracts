import {TokenHistoryEntry} from './token_history_entry';

/**
 * Describes a Group of Process Token of a specific Process Instance.
 */
export type TokenHistoryGroup = Map<string, Array<TokenHistoryEntry>>;
