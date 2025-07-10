FROM ubuntu:jammy

RUN apt update && apt upgrade -y && apt install -y npm

COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

WORKDIR /home/client

ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]
