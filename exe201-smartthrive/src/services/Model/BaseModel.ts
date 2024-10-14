export abstract class Base {
    id: string;
    createdBy: string | null;
    createdDate: Date;
    updatedBy: string | null;
    updatedDate: Date | null;
    isDeleted: boolean;

    constructor() {
        this.id = "";
        this.createdBy = null;
        this.createdDate = new Date();
        this.updatedBy = null;
        this.updatedDate = null;
        this.isDeleted = false;
    }
}
