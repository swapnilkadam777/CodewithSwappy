package Design_patterns.Builders;

public class Main {
    public static void main(String[] args) {
        Students student = new Students.StudentBuilder(1,"Swapnil","swpanillearn@gmail.com").build();
        System.out.println(student.getName());
        Students student2 = new Students.StudentBuilder().setId(1).setName("sagar").setEmail("sagarshirtode@gmail.com").build();
        System.out.println(student2);
        System.out.println(student2.getName());
    }
}
