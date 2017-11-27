
namespace coromendal.ACN {
    export interface ExcludeRow {
        ExcludeId?: number;
        Scopeid?: number;
        Aodid?: number;
        AcnId?: number;
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
    }

    export namespace ExcludeRow {
        export const idProperty = 'ExcludeId';
        export const localTextPrefix = 'ACN.Exclude';

        export namespace Fields {
            export declare const ExcludeId;
            export declare const Scopeid;
            export declare const Aodid;
            export declare const AcnId;
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
        }

        ['ExcludeId', 'Scopeid', 'Aodid', 'AcnId', 'AodidMeetingid', 'AodidActualcomencementdate', 'AodidActualcompltedate', 'AodidProcessOwner', 'AodidFunctionalhead', 'AodidAreaofscope', 'AodidExclusions', 'AodidReasons', 'AodidSbu', 'AodidAcnid', 'AodidPreview', 'AodidSend'].forEach(x => (<any>Fields)[x] = x);
    }
}

