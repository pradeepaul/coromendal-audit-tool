
namespace coromendal.Administration {
    export interface LocationRow {
        Locid?: number;
        Locname?: string;
    }

    export namespace LocationRow {
        export const idProperty = 'Locid';
        export const nameProperty = 'Locname';
        export const localTextPrefix = 'Administration.Location';

        export namespace Fields {
            export declare const Locid;
            export declare const Locname;
        }

        ['Locid', 'Locname'].forEach(x => (<any>Fields)[x] = x);
    }
}

