```mermaid
sequenceDiagram
participant Attacker
participant BotNet
participant WebServer
participant Firewall
Attacker->>BotNet: Attack WebServer
BotNet->>WebServer: spam requests
BotNet->>WebServer: spam requests
BotNet->>WebServer: spam requests
WebServer->>Firewall: Analyze traffic
Firewall->>WebServer: block IP of BotNet

```
