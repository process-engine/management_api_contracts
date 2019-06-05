import { IIdentity } from "@essential-projects/iam_contracts";

import { BpmnType } from "./types";
import { EventType } from "../event";
import { FlowNodeInstanceState } from "./flow_node_instance_state";
import { ProcessToken } from "./process_token";

export class FlowNodeInstance {

  public id: string;
  public flowNodeId: string;

  public flowNodeType: BpmnType;
  public eventType?: EventType;
  public correlationId: string;
  public processModelId: string;
  public processInstanceId: string;

  public parentProcessInstanceId?: string;
  public tokens: Array<ProcessToken>;
  public state: FlowNodeInstanceState;
  public error?: string;
  public owner: IIdentity;
  public previousFlowNodeInstanceId?: string;

}
