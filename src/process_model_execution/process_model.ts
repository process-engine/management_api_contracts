import {Event} from '../index';

export class ProcessModel {
  public key: string;
  public startEvents: Array<Event> = [];
  public endEvents: Array<Event> = [];
}
