
namespace coromendal.ACN {
    export interface ScopeexcludeRow {
        ExcludeId?: number;
        Scopeid?: number;
        Aodid?: number;
        AcnId?: number;
        ScopeidTitle?: string;
        ScopeidAcnId?: number;
        AodidMeetingid?: number;
        AodidActualcomencementdate?: string;
        AodidActualcompltedate?: string;
        AodidProcessOwner?: string;
        AodidFunctionalhead?: string;
        AodidAreaofscope?: string;
        AodidExclusions?: string;
        AodidReasons?: string;
        AodidSbu?: string;
        AodidAcnid?: number;
        AodidPreview?: string;
        AodidSend?: string;
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
    }

    export namespace ScopeexcludeRow {
        export const idProperty = 'ExcludeId';
        export const localTextPrefix = 'ACN.Scopeexclude';

        export namespace Fields {
            export declare const ExcludeId;
            export declare const Scopeid;
            export declare const Aodid;
            export declare const AcnId;
            export declare const ScopeidTitle: string;
            export declare const ScopeidAcnId: string;
            export declare const AodidMeetingid: string;
            export declare const AodidActualcomencementdate: string;
            export declare const AodidActualcompltedate: string;
            export declare const AodidProcessOwner: string;
            export declare const AodidFunctionalhead: string;
            export declare const AodidAreaofscope: string;
            export declare const AodidExclusions: string;
            export declare const AodidReasons: string;
            export declare const AodidSbu: string;
            export declare const AodidAcnid: string;
            export declare const AodidPreview: string;
            export declare const AodidSend: string;
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
        }

        ['ExcludeId', 'Scopeid', 'Aodid', 'AcnId', 'ScopeidTitle', 'ScopeidAcnId', 'AodidMeetingid', 'AodidActualcomencementdate', 'AodidActualcompltedate', 'AodidProcessOwner', 'AodidFunctionalhead', 'AodidAreaofscope', 'AodidExclusions', 'AodidReasons', 'AodidSbu', 'AodidAcnid', 'AodidPreview', 'AodidSend', 'AcnAcnTilte', 'AcnPhaseNo', 'AcnLocation', 'AcnFromdate', 'AcnTodate', 'AcnPeriodfrom', 'AcnPeriodto', 'AcnCreationdate', 'AcnUserid', 'AcnPreview', 'AcnSend', 'AcnMId', 'AcnStatus'].forEach(x => (<any>Fields)[x] = x);
    }
}

