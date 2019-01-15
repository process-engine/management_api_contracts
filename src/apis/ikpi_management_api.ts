import {IIdentity} from '@essential-projects/iam_contracts';

import {ActiveToken, FlowNodeRuntimeInformation} from '../data_models/kpi/index';

/**
 * The IKpiManagementApi is used to get KPI data for ProcessModels.
 */
export interface IKpiManagementApi {

  /**
   * Gets the FlowNodeRuntimeInformation for every FlowNode in a given
   * ProcessModel ID.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the PorcessModel.
   * @returns              The Runtime Informations pertaining to the given
   *                       ProcessModel.
   */
  getRuntimeInformationForProcessModel(identity: IIdentity, processModelId: string): Promise<Array<FlowNodeRuntimeInformation>>;

 /**
   * Gets the FlowNodeRuntimeInformation for a specific FlowNode inside a
   * ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel.
   * @param flowNodeId     The ID of the specific FlowNode from whcih to get
   *                       the average runtime.
   * @returns              The Runtime Information pertaining to the given
   *                       FlowNode.
   */
  getRuntimeInformationForFlowNode(identity: IIdentity, processModelId: string, flowNodeId: string): Promise<FlowNodeRuntimeInformation>;

  /**
   * Gets all active Tokens for a given ProcessModelId.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel.
   * @returns              A list of discovered active tokens for the given
   *                       ProcessModel.
   */
  getActiveTokensForProcessModel(identity: IIdentity, processModelId: string): Promise<Array<ActiveToken>>;

  /**
   * Gets all active ProcessTokens for a given CorrelationId and ProcessModelId.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param correlationId  The ID of the Correlation.
   * @param processModelId The ID of the ProcessModel.
   * @returns              A list of discovered active tokens for the given
   *                       ProcessModel.
   */
  getActiveTokensForCorrelationAndProcessModel(identity: IIdentity, correlationId: string, processModelId: string): Promise<Array<ActiveToken>>;

  /**
   * Gets all active ProcessTokens for a given ProcessInstanceId.
   *
   * @async
   * @param identity          The requesting users identity.
   * @param processInstanceId The ID of the ProcessInstance.
   * @returns                 A list of discovered active tokens for the given
   *                          ProcessModel.
   */
  getActiveTokensForProcessInstance(identity: IIdentity, processInstanceId: string): Promise<Array<ActiveToken>>;

  /**
   * Gets all active Tokens for a specific FlowNode inside a ProcessModel.
   *
   * @async
   * @param identity   The requesting users identity.
   * @param flowNodeId The ID of the sepcific FlowNode from whcih to get the
   *                   active Tokens.
   * @returns          A list of discovered active tokens for the given
   *                   FlowNode.
   */
  getActiveTokensForFlowNode(identity: IIdentity, flowNodeId: string): Promise<Array<ActiveToken>>;
}
