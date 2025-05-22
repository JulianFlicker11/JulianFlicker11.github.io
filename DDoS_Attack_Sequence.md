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
Firewall->>WebServer: Recognize IP and deny access 
```

## In-depth analysis of the DDoS attack

The Attacker sends a command to the botnet to attack the web server, leading the collection of bots to spam
the server with multiple requests. On the web server's end, it directs the traffic to the firewall to 
analyze the traffic and try to detect suspicious activity; in this case, the firewall does. After the firewall detects 
the attack it try's to blacklist(block) the IP's of as many attackers that it can recognize. 
Once the Ip is blacklisted further attempts from recognized to attackers on the server becomes null. 
The detection process repeats until the attackers are completely blocked or until the attack is over



