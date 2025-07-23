FROM ubuntu:jammy

RUN apt update && apt upgrade -y && apt install -y curl sudo

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
RUN apt install -y nodejs

EXPOSE 8081

COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

WORKDIR /home/server

ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]
