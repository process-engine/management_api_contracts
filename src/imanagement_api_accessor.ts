import {IManagementApiService} from './imanagement_api_service';

/**
 * This interface wraps the accessor that the ManagementApiClientService will use to connect to an internal or external process engine.
 * It is derived from IManagementApiService, because the accessor will have to perform the same type of requests as the service,
 * regardless of which type of process engine is used.
 */
export interface IManagementApiAccessor extends IManagementApiService {}
