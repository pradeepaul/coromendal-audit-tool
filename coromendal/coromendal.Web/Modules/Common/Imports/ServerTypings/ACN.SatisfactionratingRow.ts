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
        Newinitiativescore?: string;
        Totalscore?: string;
        Aodid?: number;
        Documentrating?: string;
        Documentweigtage?: string;
        Complianceweightage?: string;
        Compliancerating?: string;
        Processfincontrollweightage?: string;
        Processfincontrollrating?: string;
        Responserating?: string;
        Responseweightage?: string;
        Preauditweightage?: string;
        Preauditrating?: string;
        Newinitiativecmnts?: string;
        Newinitiativeweight?: string;
        Newinitiativerating?: string;
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
            export declare const SatisfactionratingId: string;
            export declare const Documentscore: string;
            export declare const Documentcomments: string;
            export declare const Compliancescore: string;
            export declare const Compliancecomment: string;
            export declare const Processfincontrollscore: string;
            export declare const Processfincontrollscorecmnts: string;
            export declare const Responsescore: string;
            export declare const Responsecmnts: string;
            export declare const Preauditscore: string;
            export declare const Preauditcmnts: string;
            export declare const Newinitiativescore: string;
            export declare const Totalscore: string;
            export declare const Aodid: string;
            export declare const Documentrating: string;
            export declare const Documentweigtage: string;
            export declare const Complianceweightage: string;
            export declare const Compliancerating: string;
            export declare const Processfincontrollweightage: string;
            export declare const Processfincontrollrating: string;
            export declare const Responserating: string;
            export declare const Responseweightage: string;
            export declare const Preauditweightage: string;
            export declare const Preauditrating: string;
            export declare const Newinitiativecmnts: string;
            export declare const Newinitiativeweight: string;
            export declare const Newinitiativerating: string;
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

        ['SatisfactionratingId', 'Documentscore', 'Documentcomments', 'Compliancescore', 'Compliancecomment', 'Processfincontrollscore', 'Processfincontrollscorecmnts', 'Responsescore', 'Responsecmnts', 'Preauditscore', 'Preauditcmnts', 'Newinitiativescore', 'Totalscore', 'Aodid', 'Documentrating', 'Documentweigtage', 'Complianceweightage', 'Compliancerating', 'Processfincontrollweightage', 'Processfincontrollrating', 'Responserating', 'Responseweightage', 'Preauditweightage', 'Preauditrating', 'Newinitiativecmnts', 'Newinitiativeweight', 'Newinitiativerating', 'AodidMeetingid', 'AodidActualcomencementdate', 'AodidActualcompltedate', 'AodidProcessOwner', 'AodidFunctionalhead', 'AodidAreaofscope', 'AodidExclusions', 'AodidReasons', 'AodidSbu', 'AodidAcnid'].forEach(x => (<any>Fields)[x] = x);
    }
}

