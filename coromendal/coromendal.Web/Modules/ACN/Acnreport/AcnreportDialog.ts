
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnreportDialog extends Serenity.EntityDialog<AcnreportRow, any> {
        protected getFormKey() { return AcnreportForm.formKey; }
        protected getIdProperty() { return AcnreportRow.idProperty; }
        protected getLocalTextPrefix() { return AcnreportRow.localTextPrefix; }
        protected getNameProperty() { return AcnreportRow.nameProperty; }
        protected getService() { return AcnreportService.baseUrl; }

        protected form = new AcnreportForm(this.idPrefix);
        constructor() {
            super();

            this.form.Acnid.changeSelect2(e => {
                var MeetingID = this.form.Acnid.value;
                console.log(this.form.Acnid.value);
                if (Q.isEmptyOrNull(MeetingID)) {
                    this.setMeetingDetails();
                    return;
                }
                else {
                    
                    this.setMeetingDetails();
                }

            });
        }
        private setMeetingDetails() {
            //
            //alert("hi");
            this.form.userid.value = 2;

        }
    }
}