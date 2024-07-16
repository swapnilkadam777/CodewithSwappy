package Concurrency.Executors;

import java.util.concurrent.Callable;

public class tryWithCallable implements Callable<String> {
    @Override
    public String call() throws Exception {
        return "Hello";
    }
}
