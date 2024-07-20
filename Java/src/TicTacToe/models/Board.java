package TicTacToe.models;
import java.util.List;
public class Board {
    private int size;

    public List<List<Ceil>> getGrid() {
        return grid;
    }

    public int getSize() {
        return size;
    }

    private List<List<Ceil>> grid;

    public void setGrid(List<List<Ceil>> grid) {
        this.grid = grid;
    }

    public void setSize(int size) {
        this.size = size;
    }
}
