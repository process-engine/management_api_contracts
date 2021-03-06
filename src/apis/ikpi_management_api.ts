import {IIdentity} from '@essential-projects/iam_contracts';

import {ActiveTokenList, FlowNodeRuntimeInformation, FlowNodeRuntimeInformationList} from '../data_models/kpi/index';

/**
 * The IKpiManagementApi is used to get KPI data for ProcessModels.
 */
export interface IKpiManagementApi {

  /**
   * Gets the FlowNodeRuntimeInformation for every FlowNode in a given
   * ProcessModel ID.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processModelId     The ID of the PorcessModel.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    The Runtime Informations pertaining to the
   *                             given ProcessModel.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getRuntimeInformationForProcessModel(
    identity: IIdentity,
    processModelId: string,
    offset?: number,
    limit?: number,
  ): Promise<FlowNodeRuntimeInformationList>;

  /**
   * Gets the FlowNodeRuntimeInformation for a specific FlowNode inside a
   * ProcessModel.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processModelId     The ID of the ProcessModel.
   * @param   flowNodeId         The ID of the specific FlowNode from whcih to
   *                             get the average runtime.
   * @returns                    The Runtime Information pertaining to the
   *                             given FlowNode.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getRuntimeInformationForFlowNode(identity: IIdentity, processModelId: string, flowNodeId: string): Promise<FlowNodeRuntimeInformation>;

  /**
   * Gets all active Tokens for a given ProcessModelId.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processModelId     The ID of the ProcessModel.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of discovered active tokens for the
   *                             given ProcessModel.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getActiveTokensForProcessModel(identity: IIdentity, processModelId: string, offset?: number, limit?: number): Promise<ActiveTokenList>;

  /**
   * Gets all active ProcessTokens for a given CorrelationId and ProcessModelId.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   correlationId      The ID of the Correlation.
   * @param   processModelId     The ID of the ProcessModel.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of discovered active tokens for the
   *                             given ProcessModel.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getActiveTokensForCorrelationAndProcessModel(
    identity: IIdentity,
    correlationId: string,
    processModelId: string,
    offset?: number,
    limit?: number,
  ): Promise<ActiveTokenList>;

  /**
   * Gets all active ProcessTokens for a given ProcessInstanceId.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processInstanceId  The ID of the ProcessInstance.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of discovered active tokens for the
   *                             givenProcessModel.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getActiveTokensForProcessInstance(identity: IIdentity, processInstanceId: string, offset?: number, limit?: number): Promise<ActiveTokenList>;

  /**
   * Gets all active Tokens for a specific FlowNode inside a ProcessModel.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   flowNodeId         The ID of the sepcific FlowNode from whcih to
   *                             get the active Tokens.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of discovered active tokens for the
   *                             given FlowNode.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getActiveTokensForFlowNode(identity: IIdentity, flowNodeId: string, offset?: number, limit?: number): Promise<ActiveTokenList>;
}
