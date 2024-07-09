package Design_patterns.Strategy;

public class pathCalculatorStrategyFactory {
    static PathCalculator getPathStrategyByMode(TravlingMode mode){
        PathCalculator pk= null;
        if(mode.equals(TravlingMode.Bike)){
            pk=new BikePathCalculator();
        } else if (mode.equals(TravlingMode.Car)) {
            pk=new CarPathCalculator();
        } else if (mode.equals(TravlingMode.Walk)) {
            pk=new WalkPathCalculator();
        }
        return pk;
    }
}
