import {IIdentity} from '@essential-projects/iam_contracts';

import {TokenHistoryEntry, TokenHistoryGroup} from '../data_models/token_history/index';

/**
 * The ITokenHistoryManagementApi is used to read the TokenHistory for
 * FlowNodes and ProcessModels.
 */
export interface ITokenHistoryManagementApi {

  /**
   * Gets the token history for a specific FlowNodeInstance of a
   * ProcessModel.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   correlationId      The ID of the Correlation.
   * @param   processModelId     The ID of the ProcessModel.
   * @param   flowNodeId         The ID of the specific FlowNode.
   * @returns                    A list of tokens that belong to the given FlowNode.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getTokensForFlowNodeInstance(
    identity: IIdentity,
    correlationId: string,
    processModelId: string,
    flowNodeId: string,
  ): Promise<Array<TokenHistoryEntry>>;

  /**
   * Gets the token history for a given CorrelationId and ProcessModelId.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   correlationId      The ID of the Correlation.
   * @param   processModelId     The ID of the ProcessModel.
   * @returns                    A list of discovered tokens for the given
   *                             ProcessModel.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getTokensForCorrelationAndProcessModel(identity: IIdentity, correlationId: string, processModelId: string): Promise<TokenHistoryGroup>;

  /**
   * Gets the token history for a given ProcessInstanceId.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processInstanceId  The ID of the ProcessInstance.
   * @returns                    A list of discovered tokens for the given
   *                             ProcessModel.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getTokensForProcessInstance(identity: IIdentity, processInstanceId: string): Promise<TokenHistoryGroup>;
}
