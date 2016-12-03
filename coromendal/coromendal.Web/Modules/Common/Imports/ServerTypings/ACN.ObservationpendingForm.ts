namespace coromendal.ACN {
    export class ObservationpendingForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Observationpending';

    }

    export interface ObservationpendingForm {
        Reportreference: Serenity.StringEditor;
        Briefdescription: Serenity.StringEditor;
        Originaltargetdate: Serenity.StringEditor;
        Revisedtargetdate: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }

    [['Reportreference', () => Serenity.StringEditor], ['Briefdescription', () => Serenity.StringEditor], ['Originaltargetdate', () => Serenity.StringEditor], ['Revisedtargetdate', () => Serenity.StringEditor], ['Remarks', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ObservationpendingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

