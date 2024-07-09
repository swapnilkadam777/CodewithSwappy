package Threads;

public class ThreadbyInterface implements Runnable{
    public void run(){
        System.out.println(Thread.currentThread().getName());
    }
}
