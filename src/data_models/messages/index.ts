import * as callbackTypes from './callback_types';
import * as eventAggregatorSettings from './event_aggregator_settings';

import * as bpmnEvents from './bpmn_events/index';
import * as systemEvents from './system_events/index';

// tslint:disable-next-line:no-namespace
export namespace Messages {
  export import CallbackTypes = callbackTypes;
  export import EventAggregatorSettings = eventAggregatorSettings;
  export import BpmnEvents = bpmnEvents;
  export import SystemEvents = systemEvents;
}
