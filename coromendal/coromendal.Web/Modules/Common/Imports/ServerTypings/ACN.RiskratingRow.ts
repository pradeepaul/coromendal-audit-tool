
namespace coromendal.ACN {
    export interface RiskratingRow {
        Riskratingid?: number;
        Riskratingname?: string;
    }

    export namespace RiskratingRow {
        export const idProperty = 'Riskratingid';
        export const nameProperty = 'Riskratingname';
        export const localTextPrefix = 'ACN.Riskrating';

        export namespace Fields {
            export declare const Riskratingid;
            export declare const Riskratingname;
        }

        ['Riskratingid', 'Riskratingname'].forEach(x => (<any>Fields)[x] = x);
    }
}

