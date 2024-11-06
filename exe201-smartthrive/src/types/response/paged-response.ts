interface PagedResponse<TData> {
    results?: TData[];
    totalPages?: number;
    totalRecordsPerPage?: number;
    totalRecords?: number;
    pageNumber?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: SortOrder;
}

enum SortOrder {
    Ascending = 'Ascending',
    Descending = 'Descending'
}
