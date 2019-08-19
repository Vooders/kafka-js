FROM ubuntu:18.04

# Install libraries
RUN apt-get update && \
    apt-get -y install --no-install-recommends --no-install-suggests curl

# Install java
RUN apt-get -y install openjdk-8-jdk-headless

# Install kafka
RUN curl -LO http://apache.mirror.anlx.net/kafka/2.2.0/kafka_2.12-2.2.0.tgz \
    && mkdir /opt/kafka \
    && tar -xzf kafka_2.12-2.2.0.tgz -C /opt/kafka --strip-components 1 \
    && rm kafka_2.12-2.2.0.tgz

RUN curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.11.0/bin/linux/amd64/kubectl \
  && mv kubectl /usr/local/bin \
  && chmod +x /usr/local/bin/kubectl

# Install Node
RUN apt-get install curl \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install -y nodejs

COPY package*.json ./kafka-cli/

RUN cd kafka-cli \
    && npm install

COPY . ./kafka-cli/

RUN cd kafka-cli && npm run build
RUN chmod +x kafka-cli/dist/bin/*.js
RUN cd kafka-cli && npm link
