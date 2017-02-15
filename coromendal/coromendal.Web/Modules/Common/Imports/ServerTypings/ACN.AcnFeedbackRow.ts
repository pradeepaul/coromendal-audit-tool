namespace coromendal.ACN {
    export interface AcnFeedbackRow {
        AcnFeedbackId?: number;
        Acnid?: number;
        Ques1?: number;
        Remark1?: string;
        Ques2?: number;
        Remark2?: string;
        Ques3?: number;
        Remark3?: string;
        Ques4?: number;
        Remark4?: string;
        Ques5?: number;
        Remark5?: string;
        Ques6?: number;
        Remark6?: string;
        Ques7?: number;
        Remark7?: string;
        Ques8?: number;
        Remark8?: string;
        Ques9?: number;
        Remark9?: string;
        Ques10?: number;
        Remark10?: string;
        Ques11?: number;
        Remark11?: string;
        Ques12?: number;
        Remark12?: string;
        Ques13?: number;
        Remark13?: string;
        Ques14?: number;
        Remark14?: string;
        Name?: string;
        Dept?: string;
        Reviewname?: string;
        Location?: string;
        Comments?: string;
        Preview?: string;
        Send?: string;
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
            export declare const AcnFeedbackId: string;
            export declare const Acnid: string;
            export declare const Ques1: string;
            export declare const Remark1: string;
            export declare const Ques2: string;
            export declare const Remark2: string;
            export declare const Ques3: string;
            export declare const Remark3: string;
            export declare const Ques4: string;
            export declare const Remark4: string;
            export declare const Ques5: string;
            export declare const Remark5: string;
            export declare const Ques6: string;
            export declare const Remark6: string;
            export declare const Ques7: string;
            export declare const Remark7: string;
            export declare const Ques8: string;
            export declare const Remark8: string;
            export declare const Ques9: string;
            export declare const Remark9: string;
            export declare const Ques10: string;
            export declare const Remark10: string;
            export declare const Ques11: string;
            export declare const Remark11: string;
            export declare const Ques12: string;
            export declare const Remark12: string;
            export declare const Ques13: string;
            export declare const Remark13: string;
            export declare const Ques14: string;
            export declare const Remark14: string;
            export declare const Name: string;
            export declare const Dept: string;
            export declare const Reviewname: string;
            export declare const Location: string;
            export declare const Comments: string;
            export declare const Preview: string;
            export declare const Send: string;
            export declare const AcnidAcnTilte: string;
            export declare const AcnidPhaseNo: string;
            export declare const AcnidLocation: string;
            export declare const AcnidFromdate: string;
            export declare const AcnidTodate: string;
            export declare const AcnidPeriodfrom: string;
            export declare const AcnidPeriodto: string;
            export declare const AcnidCreationdate: string;
        }

        ['AcnFeedbackId', 'Acnid', 'Ques1', 'Remark1', 'Ques2', 'Remark2', 'Ques3', 'Remark3', 'Ques4', 'Remark4', 'Ques5', 'Remark5', 'Ques6', 'Remark6', 'Ques7', 'Remark7', 'Ques8', 'Remark8', 'Ques9', 'Remark9', 'Ques10', 'Remark10', 'Ques11', 'Remark11', 'Ques12', 'Remark12', 'Ques13', 'Remark13', 'Ques14', 'Remark14', 'Name', 'Dept', 'Reviewname', 'Location', 'Comments', 'Preview', 'Send', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate'].forEach(x => (<any>Fields)[x] = x);
    }
}

