--Select Query
        -- # Write your MySQL query statement below
        SELECT product_id
        FROM Products 
        WHERE low_fats = 'Y' AND recyclable = 'Y'

        -- -- # Write your MySQL query statement below
        SELECT name
        FROM Customer
        WHERE referee_id IS NULL OR referee_id <> 2;

        -- # Write your MySQL query statement below
        SELECT name,population,area
        FROM World
        WHERE area >= 3000000  OR population >= 25000000

        -- # Write your MySQL query statement below
        SELECT DISTINCT author_id as id
        FROM Views
        WHERE author_id = viewer_id 
        ORDER BY id ASC;

        -- # Write your MySQL query statement below
        SELECT tweet_id
        FROM Tweets
        WHERE LENGTH(content) >= 15;

-- Join Query statement






