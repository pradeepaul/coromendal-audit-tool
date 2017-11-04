namespace coromendal.ACN {

    @Serenity.Decorators.registerFormatter()
    export class ACNNameFormatter implements Slick.Formatter {
       
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as number;
            if (!idList)
                return "";
            var name = "";
            var byId = AcnRow.getLookup().itemById;
            for (var key in byId) {

                if (idList == byId[key].AcnId) {
                    name = byId[key].AcnTilte;
                }
            }
            return name;
        }
    }
}