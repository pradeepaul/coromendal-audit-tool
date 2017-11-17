
namespace coromendal.Administration {
    export interface MasterscopeRow {
        ScopeId?: number;
        Title?: string;
        AcnId?: number;
        Exclude?: number;
        AcnAcnTilte?: string;
        AcnPhaseNo?: number;
        AcnLocation?: string;
        AcnFromdate?: string;
        AcnTodate?: string;
        AcnPeriodfrom?: string;
        AcnPeriodto?: string;
        AcnCreationdate?: string;
        AcnUserid?: number;
        AcnPreview?: string;
        AcnSend?: string;
        AcnMId?: number;
        AcnStatus?: number;
        AcnStatusid?: number;
    }

    export namespace MasterscopeRow {
        export const idProperty = 'ScopeId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Administration.Masterscope';

        export namespace Fields {
            export declare const ScopeId;
            export declare const Title;
            export declare const AcnId;
            export declare const Exclude;
            export declare const AcnAcnTilte: string;
            export declare const AcnPhaseNo: string;
            export declare const AcnLocation: string;
            export declare const AcnFromdate: string;
            export declare const AcnTodate: string;
            export declare const AcnPeriodfrom: string;
            export declare const AcnPeriodto: string;
            export declare const AcnCreationdate: string;
            export declare const AcnUserid: string;
            export declare const AcnPreview: string;
            export declare const AcnSend: string;
            export declare const AcnMId: string;
            export declare const AcnStatus: string;
            export declare const AcnStatusid: string;
        }

        ['ScopeId', 'Title', 'AcnId', 'Exclude', 'AcnAcnTilte', 'AcnPhaseNo', 'AcnLocation', 'AcnFromdate', 'AcnTodate', 'AcnPeriodfrom', 'AcnPeriodto', 'AcnCreationdate', 'AcnUserid', 'AcnPreview', 'AcnSend', 'AcnMId', 'AcnStatus', 'AcnStatusid'].forEach(x => (<any>Fields)[x] = x);
    }
}

