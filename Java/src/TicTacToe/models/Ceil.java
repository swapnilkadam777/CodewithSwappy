package TicTacToe.models;

public class Ceil {
    private int row;
    private int col;
    private Symbol symbol;
    private CeilState ceilState;

    public CeilState getCeilState() {
        return ceilState;
    }

    public void setCeilState(CeilState ceilState) {
        this.ceilState = ceilState;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getCol() {
        return col;
    }

    public void setCol(int col) {
        this.col = col;
    }

    public Symbol getSymbol() {
        return symbol;
    }

    public void setSymbol(Symbol symbol) {
        this.symbol = symbol;
    }
}
