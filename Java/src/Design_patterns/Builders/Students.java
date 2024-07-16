package Design_patterns.Builders;

public class Students {
    private int id;
    private String name;
    private String email;
    private Students(StudentBuilder sb) {
        this.id = sb.id;
        this.name = sb.name;
        this.email = sb.email;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public static class StudentBuilder{
        private int id;
        private String name;
        private String email;
        public StudentBuilder(int id,String name,String email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }

        public StudentBuilder() {

        }

        public StudentBuilder setId(int id) {
            this.id = id;
            return this;
        }

        public StudentBuilder setName(String name) {
            this.name = name;
            return this;
        }

        public StudentBuilder setEmail(String email) {
            this.email = email;
            return this;
        }
        public Students build(){
            return new Students(this);
        }
    }
}
