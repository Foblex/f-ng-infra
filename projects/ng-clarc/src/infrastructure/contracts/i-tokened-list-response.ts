import { ITokenedDataResponse } from './i-tokened-data-response';
import { IPaginationModel } from './i-pagination-model';
import { IFiltersModel } from './i-filters-model';

export interface ITokenedListResponse<TData> extends ITokenedDataResponse<TData> {

  pagination: IPaginationModel;

  filters: IFiltersModel;
}
