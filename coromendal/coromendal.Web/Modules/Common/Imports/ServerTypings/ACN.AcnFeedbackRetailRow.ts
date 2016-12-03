namespace coromendal.ACN {
    export interface AcnFeedbackRetailRow {
        AcnFeedbackRetailId?: number;
        Acnid?: number;
        Ques1?: number;
        Ques2?: number;
        Ques3?: number;
        Ques4?: number;
        Ques5?: number;
        Ques6?: number;
        Ques7?: number;
        Ques8?: number;
        Name?: string;
        Dept?: string;
        Reviewname?: string;
        Location?: string;
        Remark1?: string;
        Remark2?: string;
        Remark3?: string;
        Remark4?: string;
        Remark5?: string;
        Remark6?: string;
        Remark7?: string;
        Remark8?: string;
        Date?: string;
        Storeno?: string;
        Comments?: string;
        AcnidAcnTilte?: string;
        AcnidPhaseNo?: number;
        AcnidLocation?: string;
        AcnidFromdate?: string;
        AcnidTodate?: string;
        AcnidPeriodfrom?: string;
        AcnidPeriodto?: string;
        AcnidCreationdate?: string;
        AcnidUserid?: number;
    }

    export namespace AcnFeedbackRetailRow {
        export const idProperty = 'AcnFeedbackRetailId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'ACN.AcnFeedbackRetail';

        export namespace Fields {
            export declare const AcnFeedbackRetailId: string;
            export declare const Acnid: string;
            export declare const Ques1: string;
            export declare const Ques2: string;
            export declare const Ques3: string;
            export declare const Ques4: string;
            export declare const Ques5: string;
            export declare const Ques6: string;
            export declare const Ques7: string;
            export declare const Ques8: string;
            export declare const Name: string;
            export declare const Dept: string;
            export declare const Reviewname: string;
            export declare const Location: string;
            export declare const Remark1: string;
            export declare const Remark2: string;
            export declare const Remark3: string;
            export declare const Remark4: string;
            export declare const Remark5: string;
            export declare const Remark6: string;
            export declare const Remark7: string;
            export declare const Remark8: string;
            export declare const Date: string;
            export declare const Storeno: string;
            export declare const Comments: string;
            export declare const AcnidAcnTilte: string;
            export declare const AcnidPhaseNo: string;
            export declare const AcnidLocation: string;
            export declare const AcnidFromdate: string;
            export declare const AcnidTodate: string;
            export declare const AcnidPeriodfrom: string;
            export declare const AcnidPeriodto: string;
            export declare const AcnidCreationdate: string;
            export declare const AcnidUserid: string;
        }

        ['AcnFeedbackRetailId', 'Acnid', 'Ques1', 'Ques2', 'Ques3', 'Ques4', 'Ques5', 'Ques6', 'Ques7', 'Ques8', 'Name', 'Dept', 'Reviewname', 'Location', 'Remark1', 'Remark2', 'Remark3', 'Remark4', 'Remark5', 'Remark6', 'Remark7', 'Remark8', 'Date', 'Storeno', 'Comments', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate', 'AcnidUserid'].forEach(x => (<any>Fields)[x] = x);
    }
}

