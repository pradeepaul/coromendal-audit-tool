﻿

namespace coromendal.Administration {
    export class MasterAcnForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.MasterAcn';
    }

    export interface MasterAcnForm {
        Title: Serenity.StringEditor;
        Statusid: Serenity.IntegerEditor;
    }

    [['Title', () => Serenity.StringEditor], ['Statusid', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(MasterAcnForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}