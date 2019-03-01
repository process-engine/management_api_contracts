import * as correlations from './correlation/index';
import * as emptyActivities from './empty_activity/index';
import * as events from './event/index';
import * as kpi from './kpi/index';
import * as logging from './logging/index';
import * as manualTasks from './manual_task/index';
import * as processModels from './process_models/index';
import * as tokenHistory from './token_history/index';
import * as userTasks from './user_task/index';

// tslint:disable-next-line:no-namespace
export namespace DataModels {
  export import Correlations = correlations;
  export import EmptyActivities = emptyActivities;
  export import Events = events;
  export import Kpi = kpi;
  export import Logging = logging;
  export import ManualTasks = manualTasks;
  export import ProcessModels = processModels;
  export import TokenHistory = tokenHistory;
  export import UserTasks = userTasks;
}
