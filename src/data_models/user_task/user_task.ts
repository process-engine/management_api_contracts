import {UserTaskConfig} from './user_task_config';

export class UserTask {
  public key: string;
  public id: string;
  public processInstanceId: string;
  public data: UserTaskConfig;
  public tokenPayload: any; // token payload the UserTask got suspended with
}
