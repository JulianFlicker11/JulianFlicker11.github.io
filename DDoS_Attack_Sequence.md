```mermaid
sequenceDiagram
actor Attacker
participant BotNet
participant WebServer
participant Firewall
Attacker->>BotNet: Attack WebServer
BotNet->>WebServer: spam requests
WebServer->>Firewall: Analyze traffic
Firewall->>WebServer: Blacklist IP's of BotNet
BotNet->>WebServer: spam requests
WebServer->>Firewall: Analyze traffic
Firewall->>WebServer: Recognize IP and block it
```
