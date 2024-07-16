package Concurrency.Executors;

public class PrintHello implements Runnable{
    int number = 0;
    PrintHello(int number){
        this.number = number;
    }
    @Override
    public void run(){
        System.out.println("Hello ="+this.number+"Thread="+Thread.currentThread().getName());
    }
}
