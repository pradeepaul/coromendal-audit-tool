namespace coromendal.ACN {

    @Serenity.Decorators.registerFormatter()
    export class likeFormatter implements Slick.Formatter {
       
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as number;
            alert(idList);
            if (!idList)
                return "";
            var name = "";
            var byId = LikeliwoodvalueRow.getLookup().itemById;
            for (var key in byId) {

                if (idList == byId[key].Likeliwoodvalueid) {
                    name = byId[key].Likeliwoodvaluename;
                }
            }
            return name;
        }
    }
}