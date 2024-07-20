package TicTacToe.models;

import java.awt.image.DataBufferInt;

public class BotPlayer extends Player {
    private BotDifficultyLevel diffLevel;

    public BotDifficultyLevel getDiffLevel() {
        return diffLevel;
    }

    public void setDiffLevel(BotDifficultyLevel diffLevel) {
        this.diffLevel = diffLevel;
    }
}
