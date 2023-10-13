#Forward traffic to local port 80 and from remote port 8080 @ server 'server'
#Might need to add GatewayPorts yes to sshd_config
ssh -R 0.0.0.0:8080:localhost:80 user@server
# To run tunnel in background
ssh -f -N -R 0.0.0.0:8080:localhost:80 user@server
