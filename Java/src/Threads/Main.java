package Threads;

public class Main extends Thread{
    public static void main(String[] args) {
        Main thread = new Main();
        thread.start();
        System.out.println("This code is outside of the thread");
        ThreadbyClass th = new ThreadbyClass();
        th.start();
    }
    public void run() {
        System.out.println("This code is running in a thread");
    }
}
