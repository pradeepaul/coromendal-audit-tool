namespace coromendal.ACN {

    @Serenity.Decorators.registerFormatter()
    export class ScopeFormatter implements Slick.Formatter {
       
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as number;
            if (!idList)
                return "";
            var name = "";
            var byId = ScopeRow.getLookup().itemById;
            for (var key in byId) {

                if (idList == byId[key].ScopeId) {
                    name = byId[key].Title;
                }
            }
            return name;
        }
    }
}