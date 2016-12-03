namespace coromendal.ACN {
    export interface RiskratingRow {
        Riskratingid?: number;
        Riskratingname?: string;
    }

    export namespace RiskratingRow {
        export const idProperty = 'Riskratingid';
        export const nameProperty = 'Riskratingname';
        export const localTextPrefix = 'ACN.Riskrating';
        export const lookupKey = 'RiskratingRow';

        export function getLookup(): Q.Lookup<RiskratingRow> {
            return Q.getLookup<RiskratingRow>('RiskratingRow');
        }

        export namespace Fields {
            export declare const Riskratingid: string;
            export declare const Riskratingname: string;
        }

        ['Riskratingid', 'Riskratingname'].forEach(x => (<any>Fields)[x] = x);
    }
}

