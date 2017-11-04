
namespace coromendal.MasterAcn {
    export interface MasterAcnRow {
        Id?: number;
        Title?: string;
        Statusid?: number;
    }

    export namespace MasterAcnRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'MasterAcn.MasterAcn';

        export namespace Fields {
            export declare const Id;
            export declare const Title;
            export declare const Statusid;
        }

        ['Id', 'Title','Statusid'].forEach(x => (<any>Fields)[x] = x);
    }
}

