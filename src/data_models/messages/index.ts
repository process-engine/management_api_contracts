import * as callbackTypes from './callback_types';
import * as eventAggregatorSettings from './event_aggregator_settings';

import * as internalMessages from './internal/index';
import * as publicMessages from './public/index';

// tslint:disable-next-line:no-namespace
export namespace Messages {
  export import CallbackTypes = callbackTypes;
  export import EventAggregatorSettings = eventAggregatorSettings;
  export import Internal = internalMessages;
  export import Public = publicMessages;
}
