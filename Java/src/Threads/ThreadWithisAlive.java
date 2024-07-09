package Threads;

public class ThreadWithisAlive extends Thread{
    public static int count = 0;

    public static void main(String[] args) {
        Thread th = new ThreadWithisAlive();
        th.start();
        while(th.isAlive()){
            System.out.println("Waiting");
        }
        System.out.println(count);
        count++;
        System.out.println(count);
    }
    public void run(){
        count++;
    }
}
