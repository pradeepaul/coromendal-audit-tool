namespace coromendal.ACN {
    @Serenity.Decorators.registerEditor()
    export class transfusetextarea extends Serenity.TextAreaEditor {

        constructor(input: JQuery, opt?: Serenity.TextAreaEditorOptions) {
            super(input, opt);
            this.inputelement = input;
        }
        public inputelement: JQuery;
       // get_readOnly(): boolean;
        // set_readOnly(value: boolean): void; 
        public toggleReadOnly(readonly: boolean) {
            debugger;
            if (readonly)
                this.inputelement.attr("disabled", "disabled");
            else
                this.inputelement.removeAttr("disabled");
           
        }
       
    }
}