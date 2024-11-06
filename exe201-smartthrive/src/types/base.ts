export interface BaseEntity {
    id: string;
    createdBy?: string;
    createdDate?: string;
    updatedBy?: string;
    updatedDate?: string;
    isDeleted?: boolean;
}

