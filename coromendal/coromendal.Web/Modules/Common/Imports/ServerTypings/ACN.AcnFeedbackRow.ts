
namespace coromendal.ACN {
    export interface AcnFeedbackRow {
        AcnFeedbackId?: number;
        Acnid?: number;
        Ques1?: number;
        Ques2?: number;
        Ques3?: number;
        Ques4?: number;
        Ques5?: number;
        Ques6?: number;
        Ques7?: number;
        Ques8?: number;
        Ques9?: number;
        Ques10?: number;
        Ques11?: number;
        Ques12?: number;
        Ques13?: number;
        Ques14?: number;
        Name?: string;
        Dept?: string;
        Reviewname?: string;
        Location?: string;
        AcnidAcnTilte?: string;
        AcnidPhaseNo?: number;
        AcnidLocation?: string;
        AcnidFromdate?: string;
        AcnidTodate?: string;
        AcnidPeriodfrom?: string;
        AcnidPeriodto?: string;
        AcnidCreationdate?: string;
    }

    export namespace AcnFeedbackRow {
        export const idProperty = 'AcnFeedbackId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'ACN.AcnFeedback';

        export namespace Fields {
            export declare const AcnFeedbackId;
            export declare const Acnid;
            export declare const Ques1;
            export declare const Ques2;
            export declare const Ques3;
            export declare const Ques4;
            export declare const Ques5;
            export declare const Ques6;
            export declare const Ques7;
            export declare const Ques8;
            export declare const Ques9;
            export declare const Ques10;
            export declare const Ques11;
            export declare const Ques12;
            export declare const Ques13;
            export declare const Ques14;
            export declare const Name;
            export declare const Dept;
            export declare const Reviewname;
            export declare const Location;
            export declare const AcnidAcnTilte: string;
            export declare const AcnidPhaseNo: string;
            export declare const AcnidLocation: string;
            export declare const AcnidFromdate: string;
            export declare const AcnidTodate: string;
            export declare const AcnidPeriodfrom: string;
            export declare const AcnidPeriodto: string;
            export declare const AcnidCreationdate: string;
        }

        ['AcnFeedbackId', 'Acnid', 'Ques1', 'Ques2', 'Ques3', 'Ques4', 'Ques5', 'Ques6', 'Ques7', 'Ques8', 'Ques9', 'Ques10', 'Ques11', 'Ques12', 'Ques13', 'Ques14', 'Name', 'Dept', 'Reviewname', 'Location', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate'].forEach(x => (<any>Fields)[x] = x);
    }
}

