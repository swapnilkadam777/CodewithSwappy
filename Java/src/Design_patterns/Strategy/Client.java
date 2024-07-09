package Design_patterns.Strategy;

public class Client {
    public static void main(String[] args) {
        GoogleMaps gMap = new GoogleMaps();
        gMap.findPath("Chiplun","Mumbai",TravlingMode.Car);
    }
}

