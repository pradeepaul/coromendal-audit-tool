namespace coromendal.ACN {

    @Serenity.Decorators.registerFormatter()
    export class FinalTextFormat implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as number;
            if (!idList)
                return "";
            var name = "";
            var byId = ACN.FinalstatusvalueRow.getLookup().itemById;
            for (var key in byId) {

                if (idList == byId[key].Finalstatusid) {
                    name = byId[key].Value;
                }
            }
            return name ;
        }
    }
}