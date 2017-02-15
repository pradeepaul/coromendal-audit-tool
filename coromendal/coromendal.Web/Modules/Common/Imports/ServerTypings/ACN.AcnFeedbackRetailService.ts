namespace coromendal.ACN {
    export namespace AcnFeedbackRetailService {
        export const baseUrl = 'ACN/AcnFeedbackRetail';

        export declare function Create(request: Serenity.SaveRequest<AcnFeedbackRetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AcnFeedbackRetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AcnFeedbackRetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcnFeedbackRetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Sendmail(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AcnFeedbackRetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Create: string;
            export declare const Update: string;
            export declare const Delete: string;
            export declare const Retrieve: string;
            export declare const List: string;
            export declare const Sendmail: string;
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List', 'Sendmail'].forEach(x => {
            (<any>AcnFeedbackRetailService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

