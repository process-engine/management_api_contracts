/* eslint-disable @typescript-eslint/no-unused-vars */
import * as correlationHttpController from './icorrelation_http_controller';
import * as cronjobHttpController from './icronjob_http_controller';
import * as emptyActivityHttpController from './iempty_activity_http_controller';
import * as eventHttpController from './ievent_http_controller';
import * as flowNodeInstanceHttpController from './iflow_node_instance_http_controller';
import * as kpiHttpController from './ikpi_http_controller';
import * as loggingHttpController from './ilogging_http_controller';
import * as manualTaskHttpController from './imanual_task_http_controller';
import * as processModelHttpController from './iprocess_model_http_controller';
import * as tokenHistoryHttpController from './itoken_history_http_controller';
import * as userTaskHttpController from './iuser_task_http_controller';
import * as swaggerHttpController from './iswagger_http_controller';

export namespace HttpController {
  export import ICorrelationHttpController = correlationHttpController.ICorrelationHttpController;
  export import ICronjobHttpController = cronjobHttpController.ICronjobHttpController;
  export import IEmptyActivityHttpController = emptyActivityHttpController.IEmptyActivityHttpController;
  export import IEventHttpController = eventHttpController.IEventHttpController;
  export import IFlowNodeInstanceHttpController = flowNodeInstanceHttpController.IFlowNodeInstanceHttpController;
  export import IKpiHttpController = kpiHttpController.IKpiHttpController;
  export import ILoggingHttpController = loggingHttpController.ILoggingHttpController;
  export import IManualTaskHttpController = manualTaskHttpController.IManualTaskHttpController;
  export import IProcessModelHttpController = processModelHttpController.IProcessModelHttpController;
  export import ITokenHistoryHttpController = tokenHistoryHttpController.ITokenHistoryHttpController;
  export import IUserTaskHttpController = userTaskHttpController.IUserTaskHttpController;
  export import ISwaggerHttpController = swaggerHttpController.ISwaggerHttpController;
}
