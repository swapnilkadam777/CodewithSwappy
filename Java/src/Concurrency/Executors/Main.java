package Concurrency.Executors;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {
    public static void main(String[] args) {
        ExecutorService ex = Executors.newScheduledThreadPool(5);
        for (int i = 0; i < 10; i++) {
            PrintHello task = new PrintHello(i);
            ex.submit(task);
        }
//        thy with Callable
        tryWithCallable t = new tryWithCallable();
        Thread thread = new Thread(String.valueOf(t));
        thread.start();
    }
}
