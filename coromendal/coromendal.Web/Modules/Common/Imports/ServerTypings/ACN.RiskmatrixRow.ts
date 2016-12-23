
namespace coromendal.ACN {
    export interface RiskmatrixRow {
        Riskmatrixid?: number;
        Likelihood?: number;
        Consequence?: number;
        Value?: string;
    }

    export namespace RiskmatrixRow {
        export const idProperty = 'Riskmatrixid';
        export const nameProperty = 'Value';
        export const localTextPrefix = 'ACN.Riskmatrix';

        export namespace Fields {
            export declare const Riskmatrixid;
            export declare const Likelihood;
            export declare const Consequence;
            export declare const Value;
        }

        ['Riskmatrixid', 'Likelihood', 'Consequence', 'Value'].forEach(x => (<any>Fields)[x] = x);
    }
}

