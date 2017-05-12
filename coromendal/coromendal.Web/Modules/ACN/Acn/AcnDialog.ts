
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnDialog extends Serenity.EntityDialog<AcnRow, any> {
        protected getFormKey() { return AcnForm.formKey; }
        protected getIdProperty() { return AcnRow.idProperty; }
        protected getLocalTextPrefix() { return AcnRow.localTextPrefix; }
        protected getNameProperty() { return AcnRow.nameProperty; }
        protected getService() { return AcnService.baseUrl; }

        protected form = new AcnForm(this.idPrefix);
      
        constructor() {
            super();

            this.form.PhaseNo.addValidationRule(this.uniqueName, e => {
                if (this.form.PhaseNo.value == null)
                    return "Please Enter Phase No!";
            });
            this.form.AcnTilte.addValidationRule(this.uniqueName, e => {
                if (this.form.AcnTilte.value == null)
                    return "Please Enter Title!";
            });
            this.form.Periodfrom.addValidationRule(this.uniqueName, e => {
                if (this.form.Periodfrom.value == null)
                    return "Please Enter Period From Date!";
            });
            this.form.Periodto.addValidationRule(this.uniqueName, e => {
                if (this.form.Periodto.value == null)
                    return "Please Enter Period To Date!";
            });
            this.form.Fromdate.addValidationRule(this.uniqueName, e => {
                if (this.form.Fromdate.value == null)
                    return "Please Enter From Date!";
            });
            this.form.Todate.addValidationRule(this.uniqueName, e => {
                if (this.form.Todate.value == null)
                    return "Please Enter To Date!";
            });
            this.form.location.addValidationRule(this.uniqueName, e => {
                if (this.form.location.value == null)
                    return "Please Enter Location!";
            });
        }

    }
}