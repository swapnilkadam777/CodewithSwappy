package Design_patterns.Builders.Ex3;

import Design_patterns.Builders.ex2.Query;
import Design_patterns.Builders.example1.Message;
import Design_patterns.Builders.example1.MessageType;

@WithBuilder
public class DatabaseConfiguration {

    private String databaseUrl;
    private String username;
    private String password;
    private int maxConnections;
    private boolean enableCache;
    private boolean isReadOnly;
    public static DatabaseConfigurationBuilder builder(){
        return  new DatabaseConfigurationBuilder();
    }
    public DatabaseConfiguration(String databaseUrl, String username, String password, int maxConnections, boolean enableCache, boolean isReadOnly) {
        this.databaseUrl = databaseUrl;
        this.username = username;
        this.password = password;
        this.maxConnections = maxConnections;
        this.enableCache = enableCache;
        this.isReadOnly = isReadOnly;
    }

    public String getDatabaseUrl() {
        return databaseUrl;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public int getMaxConnections() {
        return maxConnections;
    }

    public boolean isEnableCache() {
        return enableCache;
    }

    public boolean isReadOnly() {
        return isReadOnly;
    }
    public static class DatabaseConfigurationBuilder {
        private String databaseUrl;
        private String username;
        private String password;
        private int maxConnections;
        private boolean enableCache;
        private boolean isReadOnly;

        public DatabaseConfigurationBuilder(String databaseUrl, String username, String password, int maxConnections, boolean enableCache, boolean isReadOnly) {
            this.databaseUrl = databaseUrl;
            this.username = username;
            this.password = password;
            this.maxConnections = maxConnections;
            this.enableCache = enableCache;
            this.isReadOnly = isReadOnly;
        }

        public DatabaseConfigurationBuilder() {

        }

        public DatabaseConfigurationBuilder databaseUrl(String databaseUrl) {
            this.databaseUrl = databaseUrl;
            return this;
        }

        public DatabaseConfigurationBuilder username(String username) {
            this.username = username;
            return this;
        }

        public DatabaseConfigurationBuilder password(String password) {
            this.password = password;
            return this;
        }

        public DatabaseConfigurationBuilder maxConnections(int maxConnections) {
            this.maxConnections = maxConnections;
            return this;
        }

        public DatabaseConfigurationBuilder enableCache(boolean enableCache) {
            this.enableCache = enableCache;
            return this;
        }

        public DatabaseConfigurationBuilder readOnly(boolean isReadOnly) {
            this.isReadOnly = isReadOnly;
            return this;
        }
        public DatabaseConfiguration build() {
            return new DatabaseConfiguration(databaseUrl, username, password, maxConnections, enableCache, isReadOnly);
        }
    }
}
