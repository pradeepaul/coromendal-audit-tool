﻿
namespace coromendal.ACN {
    export interface MeetingAbsentRow {
        MeetingAbsentId?: number;
        MeetingId?: number;
        AbsentUser?: number;
        Reason?: string;
        MeetingAcnid?: number;
        MeetingTitle?: string;
        MeetingAuditscope?: string;
        MeetingPeriod?: string;
        MeetingTime?: number;
        MeetingVenue?: string;
        MeetingAuditor?: number;
        MeetingAuditee?: number;
        MeetingDownload?: number;
        MeetingUserid?: number;
    }

    export namespace MeetingAbsentRow {
        export const idProperty = 'MeetingAbsentId';
        export const nameProperty = 'Reason';
        export const localTextPrefix = 'ACN.MeetingAbsent';

        export namespace Fields {
            export declare const MeetingAbsentId;
            export declare const MeetingId;
            export declare const AbsentUser;
            export declare const Reason;
            export declare const MeetingAcnid: string;
            export declare const MeetingTitle: string;
            export declare const MeetingAuditscope: string;
            export declare const MeetingPeriod: string;
            export declare const MeetingTime: string;
            export declare const MeetingVenue: string;
            export declare const MeetingAuditor: string;
            export declare const MeetingAuditee: string;
            export declare const MeetingDownload: string;
            export declare const MeetingUserid: string;
        }

        ['MeetingAbsentId', 'MeetingId', 'AbsentUser', 'Reason', 'MeetingAcnid', 'MeetingTitle', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid'].forEach(x => (<any>Fields)[x] = x);
    }
}

