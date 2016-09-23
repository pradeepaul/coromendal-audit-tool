
namespace coromendal.ACN {
    export interface AcnRow {
        AcnId?: number;
        AcnTilte?: string;
    }

    export namespace AcnRow {
        export const idProperty = 'AcnId';
        export const nameProperty = 'AcnTilte';
        export const localTextPrefix = 'ACN.Acn';
       
        export namespace Fields {
            export declare const AcnId;
            export declare const AcnTilte;
        }

        ['AcnId', 'AcnTilte'].forEach(x => (<any>Fields)[x] = x);
    }
}

