
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AuditobservationDialog extends Serenity.EntityDialog<AuditobservationRow, any> {
        protected getFormKey() { return AuditobservationForm.formKey; }
        protected getIdProperty() { return AuditobservationRow.idProperty; }
        protected getLocalTextPrefix() { return AuditobservationRow.localTextPrefix; }
        protected getNameProperty() { return AuditobservationRow.nameProperty; }
        protected getService() { return AuditobservationService.baseUrl; }

        protected form = new AuditobservationForm(this.idPrefix);
        constructor() {
            super();
            this.form.Likelihood.changeSelect2(e => {
                var Likelihood = this.form.Likelihood.value;
                var Consequence = this.form.Consequence.value;                
                
                if ((Q.isEmptyOrNull(Likelihood)) && (Q.isEmptyOrNull(Consequence))) {
                   
                    return;
                }   
                else {
                    if ((this.form.Likelihood.value == "1") && (this.form.Consequence.value == "1"))
                    {
                        this.form.RiskRating.value = "LOW";
                    }
                    if ((this.form.Likelihood.value == "1") && (this.form.Consequence.value == "2")) {
                        this.form.RiskRating.value = "LOW";
                    }
                    if ((this.form.Likelihood.value == "1") && (this.form.Consequence.value == "3")) {
                        this.form.RiskRating.value = "LOW";
                    }
                    if ((this.form.Likelihood.value == "1") && (this.form.Consequence.value == "4")) {
                        this.form.RiskRating.value = "Medium";
                    }

                    if ((this.form.Likelihood.value == "2") && (this.form.Consequence.value == "1")) {
                        this.form.RiskRating.value = "LOW";
                    }
                    if ((this.form.Likelihood.value == "2") && (this.form.Consequence.value == "2")) {
                        this.form.RiskRating.value = "Medium";
                    }
                    if ((this.form.Likelihood.value == "2") && (this.form.Consequence.value == "3")) {
                        this.form.RiskRating.value = "Medium";
                    }
                    if ((this.form.Likelihood.value == "2") && (this.form.Consequence.value == "4")) {
                        this.form.RiskRating.value = "Medium";
                    }

                    if ((this.form.Likelihood.value == "3") && (this.form.Consequence.value == "1")) {
                        this.form.RiskRating.value = "LOW";
                    }
                    if ((this.form.Likelihood.value == "3") && (this.form.Consequence.value == "2")) {
                        this.form.RiskRating.value = "Medium";
                    }
                    if ((this.form.Likelihood.value == "3") && (this.form.Consequence.value == "3")) {
                        this.form.RiskRating.value = "High";
                    }
                    if ((this.form.Likelihood.value == "3") && (this.form.Consequence.value == "4")) {
                        this.form.RiskRating.value = "High";
                    }

                    if ((this.form.Likelihood.value == "4") && (this.form.Consequence.value == "1")) {
                        this.form.RiskRating.value = "Medium";
                    }
                    if ((this.form.Likelihood.value == "4") && (this.form.Consequence.value == "2")) {
                        this.form.RiskRating.value = "High";
                    }
                    if ((this.form.Likelihood.value == "4") && (this.form.Consequence.value == "3")) {
                        this.form.RiskRating.value = "High";
                    }
                    if ((this.form.Likelihood.value == "4") && (this.form.Consequence.value == "4")) {
                        this.form.RiskRating.value = "High";
                    }

                   
                }
                
              

            });
        }

       
    }
}