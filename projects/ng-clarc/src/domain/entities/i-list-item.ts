import { IEntitySummary } from './i-entity-summary';

export interface IListItem<TKey>  {

  summary: IEntitySummary<TKey>;
}
