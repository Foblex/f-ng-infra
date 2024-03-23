import { IHasKey } from './i-has-key';

export interface IEntitySummary<TKey> extends IHasKey<TKey> {

  name: string;
}
