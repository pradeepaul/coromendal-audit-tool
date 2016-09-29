
namespace coromendal.ACN {
    export interface CategoryRow {
        Categoryid?: number;
        Categoryname?: string;
    }

    export namespace CategoryRow {
        export const idProperty = 'Categoryid';
        export const nameProperty = 'Categoryname';
        export const localTextPrefix = 'ACN.Category';

        export namespace Fields {
            export declare const Categoryid;
            export declare const Categoryname;
        }

        ['Categoryid', 'Categoryname'].forEach(x => (<any>Fields)[x] = x);
    }
}

