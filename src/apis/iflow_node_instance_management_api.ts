import {IIdentity} from '@essential-projects/iam_contracts';

import {FlowNodeInstance} from '../data_models/flow_node_instance';

export interface IFlowNodeInstanceManagementApi {

  getFlowNodeInstancesForProcessInstance(identity: IIdentity, processInstanceId: string): Promise<Array<FlowNodeInstance>>;
}
