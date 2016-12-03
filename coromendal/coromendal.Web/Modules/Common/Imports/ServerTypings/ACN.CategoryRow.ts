namespace coromendal.ACN {
    export interface CategoryRow {
        Categoryid?: number;
        Categoryname?: string;
    }

    export namespace CategoryRow {
        export const idProperty = 'Categoryid';
        export const nameProperty = 'Categoryname';
        export const localTextPrefix = 'ACN.Category';
        export const lookupKey = 'ACN.CategoryRow';

        export function getLookup(): Q.Lookup<CategoryRow> {
            return Q.getLookup<CategoryRow>('ACN.CategoryRow');
        }

        export namespace Fields {
            export declare const Categoryid: string;
            export declare const Categoryname: string;
        }

        ['Categoryid', 'Categoryname'].forEach(x => (<any>Fields)[x] = x);
    }
}

