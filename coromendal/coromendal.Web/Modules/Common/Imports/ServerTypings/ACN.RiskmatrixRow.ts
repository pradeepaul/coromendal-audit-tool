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
            export declare const Riskmatrixid: string;
            export declare const Likelihood: string;
            export declare const Consequence: string;
            export declare const Value: string;
        }

        ['Riskmatrixid', 'Likelihood', 'Consequence', 'Value'].forEach(x => (<any>Fields)[x] = x);
    }
}

