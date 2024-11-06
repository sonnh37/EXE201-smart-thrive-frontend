export interface BaseQueryableQuery {
    isPagination: boolean;
    pageNumber?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: SortOrder;
    fromDate?: string;
    toDate?: string;
    id?: string;
    createdBy?: string;
    UpdatedBy?: string;
    isDeleted?: boolean[];
}

export enum SortOrder {
    ascending = 1,
    descending = -1
}