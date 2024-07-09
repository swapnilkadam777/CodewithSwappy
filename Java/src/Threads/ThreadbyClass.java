package Threads;

public class ThreadbyClass extends Thread{
    public void run(){
        System.out.println("Thread Name="+Thread.currentThread().getName());
    }
}
