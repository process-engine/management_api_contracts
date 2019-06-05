import {IIdentity} from '@essential-projects/iam_contracts';

import {FlowNodeInstanceList} from '../data_models/flow_node';

export interface IFlowNodeManagementApi {

  getFlowNodeInstancesForProcessInstance(identity: IIdentity, processInstanceId: string): Promise<FlowNodeInstanceList>;
}
