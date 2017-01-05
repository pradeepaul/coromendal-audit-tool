namespace coromendal.ACN {
    export class LikeliwoodvalueForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Likeliwoodvalue';

    }

    export interface LikeliwoodvalueForm {
        Likeliwoodvaluename: Serenity.StringEditor;
    }

    [['Likeliwoodvaluename', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(LikeliwoodvalueForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

