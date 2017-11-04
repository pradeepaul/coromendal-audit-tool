
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AuditobservationGrid extends Serenity.EntityGrid<AuditobservationRow, any> {
        protected getColumnsKey() { return 'ACN.Auditobservation'; }
        protected getDialogType() { return AuditobservationDialog; }
        protected getIdProperty() { return AuditobservationRow.idProperty; }
        protected getLocalTextPrefix() { return AuditobservationRow.localTextPrefix; }
        protected getService() { return AuditobservationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            var fld = ACN.AuditobservationRow.Fields;
            if ((Authorization.userDefinition.RoleId == 4) || (Authorization.userDefinition.RoleId == 1)) {
                Q.first(columns, x => x.field == fld.Agreeobservation).format =
                    ctx => `<a href="" class="send sendbtn"></a>`;
            }
            return columns;
        }
        protected onClick(e: JQueryEventObject, row: number, cell: number): void {
            super.onClick(e, row, cell);
            if (e.isDefaultPrevented()) {
                return;
            }
            var item = this.itemAt(row);
            var target = $(e.target);           
            if (target.hasClass("sendbtn")) {
                e.preventDefault();
                var request = Q.deepClone(this.getView().params) as Serenity.ListRequest;
                request.ContainsField = String(item.AuditobservationId);
                request.ContainsText = "mail";
                //Q.serviceCall({ service: 'ACN/Acn/Sendmail', request: request, onSuccess: this.preview });
                Q.postToService({ service: 'ACN/Auditobservation/Sendmail', request: request, target: '_blank' });
            }
        }
        protected preview(respose) {
            Q.iframeDialog({ html: respose });
            // console.log(respose);        
        }
    }
}