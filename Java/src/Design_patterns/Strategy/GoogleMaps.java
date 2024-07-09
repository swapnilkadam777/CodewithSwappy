package Design_patterns.Strategy;

public class GoogleMaps {
    public void findPath(String source,String destination,TravlingMode mode){
        pathCalculatorStrategyFactory.getPathStrategyByMode(mode).findPath(source,destination);
    }
}
