
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
            export declare const AcnFeedbackRetailId;
            export declare const Acnid;
            export declare const Ques1;
            export declare const Ques2;
            export declare const Ques3;
            export declare const Ques4;
            export declare const Ques5;
            export declare const Ques6;
            export declare const Ques7;
            export declare const Ques8;
            export declare const Name;
            export declare const Dept;
            export declare const Reviewname;
            export declare const Location;
            export declare const Remark1;
            export declare const Remark2;
            export declare const Remark3;
            export declare const Remark4;
            export declare const Remark5;
            export declare const Remark6;
            export declare const Remark7;
            export declare const Remark8;
            export declare const Date;
            export declare const Storeno;
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

        ['AcnFeedbackRetailId', 'Acnid', 'Ques1', 'Ques2', 'Ques3', 'Ques4', 'Ques5', 'Ques6', 'Ques7', 'Ques8', 'Name', 'Dept', 'Reviewname', 'Location', 'Remark1', 'Remark2', 'Remark3', 'Remark4', 'Remark5', 'Remark6', 'Remark7', 'Remark8', 'Date', 'Storeno', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate', 'AcnidUserid'].forEach(x => (<any>Fields)[x] = x);
    }
}

