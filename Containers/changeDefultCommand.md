# Compose
```yml
version: "3"
services:
  ubuntu:
    container_name: ubuntu
    image: ubuntu
    command: "tail -f /dev/null"
```