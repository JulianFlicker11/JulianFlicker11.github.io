```mermaid
sequenceDiagram
participant Attacker
participant BotNet
participant WebServer
participant Firewall
Attacker->>BotNet: Attack WebServer
BotNet->>WebServer: spam requests
WebServer->>Firewall: Analyze traffic
Firewall->>WebServer: Blacklist IP's of BotNet
BotNet->>WebSerer: spam requests
WebServer->>Firewall: Analyze traffic
WebServer->>Firewall: Recognize IP and block it
```
