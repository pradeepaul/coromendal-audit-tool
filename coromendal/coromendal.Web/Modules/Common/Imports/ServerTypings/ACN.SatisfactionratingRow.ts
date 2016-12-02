
namespace coromendal.ACN {
    export interface SatisfactionratingRow {
        SatisfactionratingId?: number;
        Documentscore?: number;
        Documentcomments?: string;
        Compliancescore?: string;
        Compliancecomment?: string;
        Processfincontrollscore?: string;
        Processfincontrollscorecmnts?: string;
        Responsescore?: string;
        Responsecmnts?: string;
        Preauditscore?: string;
        Preauditcmnts?: string;
        Newinitiative?: string;
        Totalscore?: string;
        Aodid?: number;
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
    }

    export namespace SatisfactionratingRow {
        export const idProperty = 'SatisfactionratingId';
        export const nameProperty = 'Documentcomments';
        export const localTextPrefix = 'ACN.Satisfactionrating';

        export namespace Fields {
            export declare const SatisfactionratingId;
            export declare const Documentscore;
            export declare const Documentcomments;
            export declare const Compliancescore;
            export declare const Compliancecomment;
            export declare const Processfincontrollscore;
            export declare const Processfincontrollscorecmnts;
            export declare const Responsescore;
            export declare const Responsecmnts;
            export declare const Preauditscore;
            export declare const Preauditcmnts;
            export declare const Newinitiative;
            export declare const Totalscore;
            export declare const Aodid;
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
        }

        ['SatisfactionratingId', 'Documentscore', 'Documentcomments', 'Compliancescore', 'Compliancecomment', 'Processfincontrollscore', 'Processfincontrollscorecmnts', 'Responsescore', 'Responsecmnts', 'Preauditscore', 'Preauditcmnts', 'Newinitiative', 'Totalscore', 'Aodid', 'AodidMeetingid', 'AodidActualcomencementdate', 'AodidActualcompltedate', 'AodidProcessOwner', 'AodidFunctionalhead', 'AodidAreaofscope', 'AodidExclusions', 'AodidReasons', 'AodidSbu', 'AodidAcnid'].forEach(x => (<any>Fields)[x] = x);
    }
}

