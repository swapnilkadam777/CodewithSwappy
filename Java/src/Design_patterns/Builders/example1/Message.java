package Design_patterns.Builders.example1;

@WithBuilder
public class Message {

    private MessageType messageType;
    private String content;
    private String sender;
    private String recipient;
    private boolean isDelivered;
    private long timestamp;
    public static MessageBuilder builder(){
        return  new MessageBuilder();
    }
    public Message(MessageType messageType, String content, String sender, String recipient, boolean isDelivered, long timestamp) {
        this.messageType = messageType;
        this.content = content;
        this.sender = sender;
        this.recipient = recipient;
        this.isDelivered = isDelivered;
        this.timestamp = timestamp;
    }

    public MessageType getMessageType() {
        return messageType;
    }

    public String getContent() {
        return content;
    }

    public String getSender() {
        return sender;
    }

    public String getRecipient() {
        return recipient;
    }

    public boolean isDelivered() {
        return isDelivered;
    }

    public long getTimestamp() {
        return timestamp;
    }
    public static class MessageBuilder {
        private MessageType messageType;
        private String content;
        private String sender;
        private String recipient;
        private boolean isDelivered;
        private long timestamp;

        public MessageBuilder messageType(MessageType messageType) {
            this.messageType = messageType;
            return this;
        }

        public MessageBuilder content(String content) {
            this.content = content;
            return this;
        }

        public MessageBuilder sender(String sender) {
            this.sender = sender;
            return this;
        }

        public MessageBuilder recipient(String recipient) {
            this.recipient = recipient;
            return this;
        }

        public MessageBuilder delivered(boolean delivered) {
            isDelivered = delivered;
            return this;
        }

        public MessageBuilder timestamp(long timestamp) {
            this.timestamp = timestamp;
            return this;
        }
        public Message build() {
            return new Message(messageType,content,sender,recipient,isDelivered,timestamp);
        }
    }
}