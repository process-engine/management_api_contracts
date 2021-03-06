import {IIdentity} from '@essential-projects/iam_contracts';

import {TokenHistoryEntryList, TokenHistoryGroup} from '../data_models/token_history/index';

/**
 * The ITokenHistoryManagementApi is used to read the TokenHistory for
 * FlowNodes and ProcessModels.
 */
export interface ITokenHistoryManagementApi {

  /**
   * Gets the token history for a specific FlowNode of a ProcessModel.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   correlationId      The ID of the Correlation.
   * @param   processModelId     The ID of the ProcessModel.
   * @param   flowNodeId         The ID of the specific FlowNode.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of tokens that belong to the given FlowNode.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getTokensForFlowNode(
    identity: IIdentity,
    correlationId: string,
    processModelId: string,
    flowNodeId: string,
    offset?: number,
    limit?: number,
  ): Promise<TokenHistoryEntryList>;

  /**
   * Gets the token history for a specific FlowNodeInstance of a
   * ProcessInstance.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processInstanceId  The ID of the ProcessInstance.
   * @param   flowNodeId         The ID of the specific FlowNode.
   * @returns                    A list of tokens that belong to the given FlowNode.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getTokensForFlowNodeByProcessInstanceId(
    identity: IIdentity,
    processInstanceId: string,
    flowNodeId: string,
  ): Promise<TokenHistoryGroup>;

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
