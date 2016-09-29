
namespace coromendal.ACN {
    export interface ConformationRow {
        ConformationId?: number;
        Conformationname?: string;
    }

    export namespace ConformationRow {
        export const idProperty = 'ConformationId';
        export const nameProperty = 'Conformationname';
        export const localTextPrefix = 'ACN.Conformation';

        export namespace Fields {
            export declare const ConformationId;
            export declare const Conformationname;
        }

        ['ConformationId', 'Conformationname'].forEach(x => (<any>Fields)[x] = x);
    }
}

