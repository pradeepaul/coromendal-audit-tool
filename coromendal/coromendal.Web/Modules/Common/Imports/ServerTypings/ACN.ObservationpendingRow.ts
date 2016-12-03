namespace coromendal.ACN {
    export interface ObservationpendingRow {
        ObservationpendingId?: number;
        Reportreference?: string;
        Briefdescription?: string;
        Originaltargetdate?: string;
        Revisedtargetdate?: string;
        Remarks?: string;
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

    export namespace ObservationpendingRow {
        export const idProperty = 'ObservationpendingId';
        export const nameProperty = 'Reportreference';
        export const localTextPrefix = 'ACN.Observationpending';

        export namespace Fields {
            export declare const ObservationpendingId: string;
            export declare const Reportreference: string;
            export declare const Briefdescription: string;
            export declare const Originaltargetdate: string;
            export declare const Revisedtargetdate: string;
            export declare const Remarks: string;
            export declare const Aodid: string;
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

        ['ObservationpendingId', 'Reportreference', 'Briefdescription', 'Originaltargetdate', 'Revisedtargetdate', 'Remarks', 'Aodid', 'AodidMeetingid', 'AodidActualcomencementdate', 'AodidActualcompltedate', 'AodidProcessOwner', 'AodidFunctionalhead', 'AodidAreaofscope', 'AodidExclusions', 'AodidReasons', 'AodidSbu', 'AodidAcnid'].forEach(x => (<any>Fields)[x] = x);
    }
}

