namespace coromendal.ACN {
    export interface InputfromauditeeRow {
        InputauditId?: number;
        Aodid?: number;
        Additionalareacovered?: string;
        Issues?: string;
        Newimprovements?: string;
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

    export namespace InputfromauditeeRow {
        export const idProperty = 'InputauditId';
        export const nameProperty = 'Additionalareacovered';
        export const localTextPrefix = 'ACN.Inputfromauditee';

        export namespace Fields {
            export declare const InputauditId: string;
            export declare const Aodid: string;
            export declare const Additionalareacovered: string;
            export declare const Issues: string;
            export declare const Newimprovements: string;
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

        ['InputauditId', 'Aodid', 'Additionalareacovered', 'Issues', 'Newimprovements', 'AodidMeetingid', 'AodidActualcomencementdate', 'AodidActualcompltedate', 'AodidProcessOwner', 'AodidFunctionalhead', 'AodidAreaofscope', 'AodidExclusions', 'AodidReasons', 'AodidSbu', 'AodidAcnid'].forEach(x => (<any>Fields)[x] = x);
    }
}

