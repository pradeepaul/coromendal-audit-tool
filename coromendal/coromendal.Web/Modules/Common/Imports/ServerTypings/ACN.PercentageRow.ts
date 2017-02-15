
namespace coromendal.ACN {
    export interface PercentageRow {
        Percentageid?: number;
        Percentagename?: string;
    }

    export namespace PercentageRow {
        export const idProperty = 'Percentageid';
        export const nameProperty = 'Percentagename';
        export const localTextPrefix = 'ACN.Percentage';

        export namespace Fields {
            export declare const Percentageid;
            export declare const Percentagename;
        }

        ['Percentageid', 'Percentagename'].forEach(x => (<any>Fields)[x] = x);
    }
}

