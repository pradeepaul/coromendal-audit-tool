
namespace coromendal.Administration {
    export interface AcnMasterRow {
        AcnId?: number;
        AcnTilte?: string;
        PhaseNo?: number;
        Location?: string;
        Fromdate?: string;
        Todate?: string;
        Periodfrom?: string;
        Periodto?: string;
        Creationdate?: string;
        Userid?: number;
        Preview?: string;
        Send?: string;
        UseridUsername?: string;
        UseridDisplayName?: string;
        UseridEmail?: string;
        UseridSource?: string;
        UseridPasswordHash?: string;
        UseridPasswordSalt?: string;
        UseridInsertDate?: string;
        UseridInsertUserId?: number;
        UseridUpdateDate?: string;
        UseridUpdateUserId?: number;
        UseridIsActive?: number;
        UseridLastDirectoryUpdate?: string;
        UseridRoleId?: number;
    }

    export namespace AcnMasterRow {
        export const idProperty = 'AcnId';
        export const nameProperty = 'AcnTilte';
        export const localTextPrefix = 'Administration.AcnMaster';

        export namespace Fields {
            export declare const AcnId;
            export declare const AcnTilte;
            export declare const PhaseNo;
            export declare const Location;
            export declare const Fromdate;
            export declare const Todate;
            export declare const Periodfrom;
            export declare const Periodto;
            export declare const Creationdate;
            export declare const Userid;
            export declare const Preview;
            export declare const Send;
            export declare const UseridUsername: string;
            export declare const UseridDisplayName: string;
            export declare const UseridEmail: string;
            export declare const UseridSource: string;
            export declare const UseridPasswordHash: string;
            export declare const UseridPasswordSalt: string;
            export declare const UseridInsertDate: string;
            export declare const UseridInsertUserId: string;
            export declare const UseridUpdateDate: string;
            export declare const UseridUpdateUserId: string;
            export declare const UseridIsActive: string;
            export declare const UseridLastDirectoryUpdate: string;
            export declare const UseridRoleId: string;
        }

        ['AcnId', 'AcnTilte', 'PhaseNo', 'Location', 'Fromdate', 'Todate', 'Periodfrom', 'Periodto', 'Creationdate', 'Userid', 'Preview', 'Send', 'UseridUsername', 'UseridDisplayName', 'UseridEmail', 'UseridSource', 'UseridPasswordHash', 'UseridPasswordSalt', 'UseridInsertDate', 'UseridInsertUserId', 'UseridUpdateDate', 'UseridUpdateUserId', 'UseridIsActive', 'UseridLastDirectoryUpdate', 'UseridRoleId'].forEach(x => (<any>Fields)[x] = x);
    }
}

