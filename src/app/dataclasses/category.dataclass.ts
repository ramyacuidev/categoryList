export class Category {
    categoryId: string;
    categoryName: string;
    sequence: number;

    constructor(obj?: any) {
        if (!obj) {
            return;
        }
        this.categoryId = obj.categoryId ? obj.categoryId : '';
        this.categoryName = obj.categoryName ? obj.categoryName : '';
        this.sequence = obj.sequence ? obj.sequence : '';
    }
}