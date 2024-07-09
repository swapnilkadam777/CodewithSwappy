Threads
	Threads allows a program to operate more efficiently by doing multiple things at the same time.
	Threads can be used to perform complicated tasks in the background without interrupting the main program.
Creating a Thread
	two ways to create a thread
	    1) created by extending the Thread class and overriding its run() method:
		    public class Main extends Thread {
			  public void run() {
			    System.out.println("This code is running in a thread");
			  }
			}
		2) create a thread is to implement the Runnable interface:
			public class Main implements Runnable {
			  public void run() {
			    System.out.println("This code is running in a thread");
			  }
			}

Running Threads
        extends the Thread class,
                Main thread = new Main();
                thread.start();

        implements the Runnable interface
                Main obj = new Main();
                Thread thread = new Thread(obj);
                thread.start();

Concurrency Problems