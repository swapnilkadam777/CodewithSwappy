package Design_patterns.Builders.ex2;
@WithBuilder
public class Query {

    private String select;
    private String from;
    private String where;
    private String join;
    private String orderBy;
    private String groupBy;
    public static QueryBuilder builder(){
        return  new QueryBuilder();
    }
    public Query(String select, String from, String where, String join, String orderBy, String groupBy) {
        this.select = select;
        this.from = from;
        this.where = where;
        this.join = join;
        this.orderBy = orderBy;
        this.groupBy = groupBy;
    }

    public String getSelect() {
        return select;
    }

    public String getFrom() {
        return from;
    }

    public String getWhere() {
        return where;
    }

    public String getJoin() {
        return join;
    }

    public String getOrderBy() {
        return orderBy;
    }

    public String getGroupBy() {
        return groupBy;
    }

    public static class QueryBuilder {

        private String select;
        private String from;
        private String where;
        private String join;
        private String orderBy;
        private String groupBy;

        public QueryBuilder() {
        }

        public QueryBuilder select(String select) {
            this.select = select;
            return this;
        }

        public QueryBuilder from(String from) {
            this.from = from;
            return this;
        }

        public QueryBuilder where(String where) {
            this.where = where;
            return this;
        }

        public QueryBuilder join(String join) {
            this.join = join;
            return this;
        }

        public QueryBuilder orderBy(String orderBy) {
            this.orderBy = orderBy;
            return this;
        }

        public QueryBuilder groupBy(String groupBy) {
            this.groupBy = groupBy;
            return this;
        }

        public Query build() {
            return new Query(select, from, where, join, orderBy, groupBy);
        }
    }

}
