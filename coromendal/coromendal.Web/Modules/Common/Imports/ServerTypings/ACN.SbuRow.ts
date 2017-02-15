
namespace coromendal.ACN {
    export interface SbuRow {
        Sbuid?: number;
        Sbuname?: string;
    }

    export namespace SbuRow {
        export const idProperty = 'Sbuid';
        export const nameProperty = 'Sbuname';
        export const localTextPrefix = 'ACN.Sbu';

        export namespace Fields {
            export declare const Sbuid;
            export declare const Sbuname;
        }

        ['Sbuid', 'Sbuname'].forEach(x => (<any>Fields)[x] = x);
    }
}

