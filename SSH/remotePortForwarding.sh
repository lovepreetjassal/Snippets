#Forward traffic to local port 80 and from remote port 8080 @ server 'server'
ssh -R 0.0.0.0:8080:localhost:80 user@server
