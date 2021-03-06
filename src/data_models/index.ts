/* eslint-disable @typescript-eslint/no-unused-vars */
import * as correlations from './correlation/index';
import * as cronjobs from './cronjob/index';
import * as emptyActivities from './empty_activity/index';
import * as events from './event/index';
import * as flowNodeInstances from './flow_node_instance/index';
import * as kpi from './kpi/index';
import * as logging from './logging/index';
import * as manualTasks from './manual_task/index';
import * as processModels from './process_models/index';
import * as tokenHistory from './token_history/index';
import * as userTasks from './user_task/index';

export namespace DataModels {
  export import Correlations = correlations;
  export import Cronjobs = cronjobs;
  export import EmptyActivities = emptyActivities;
  export import Events = events;
  export import FlowNodeInstances = flowNodeInstances;
  export import Kpi = kpi;
  export import Logging = logging;
  export import ManualTasks = manualTasks;
  export import ProcessModels = processModels;
  export import TokenHistory = tokenHistory;
  export import UserTasks = userTasks;
}
