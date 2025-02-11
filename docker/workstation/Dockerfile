FROM ubuntu:22.04

#=========================================================================#
#                          Global arguments                               #
#=========================================================================#

LABEL maintainer="MrJmpl3 <jmpl3.soporte@gmail.com>"

ENV DEBIAN_FRONTEND=noninteractive

#=========================================================================#
#                                User                                     #
#=========================================================================#

ARG PUID=1000
ENV PUID=${PUID}
ARG PGID=1000
ENV PGID=${PGID}

RUN groupadd -g ${PGID} dockeruser && \
    useradd -l -u ${PUID} -g dockeruser -m dockeruser

#=========================================================================#
#                              Timezone                                   #
#=========================================================================#

USER root

ARG TZ=UTC
ENV TZ=${TZ}

RUN ln -snf /usr/share/zoneinfo/${TZ} /etc/localtime && \
    echo ${TZ} > /etc/timezone

#=========================================================================#
#                           Basic packages                                #
#=========================================================================#

USER root

RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y \
        fswatch \
        apt-utils \
        apt-transport-https \
        ca-certificates \
        software-properties-common \
        libxslt-dev \
        libxml2-dev \
        libzip-dev \
        zip \
        unzip \
        sqlite3 \
        git \
        curl \
        vim \
        nano

#=========================================================================#
#                                Node                                     #
#=========================================================================#

USER root

ARG NODE_VERSION=22

RUN curl -fsSL https://deb.nodesource.com/setup_$NODE_VERSION.x -o nodesource_setup.sh && \
    bash nodesource_setup.sh && \
    apt-get install -y nodejs && \
    npm install -g npm

ARG PNPM_VERSION=10.2

ENV PNPM_HOME="/home/dockeruser/.local/share/pnpm"
ENV PATH=$PATH:$PNPM_HOME

RUN mkdir -p $PNPM_HOME

RUN npm install -g corepack@latest

RUN corepack enable pnpm && \
    corepack install --global pnpm@${PNPM_VERSION} && \
    corepack use pnpm@${PNPM_VERSION}

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

#=========================================================================#
#                                 Zsh                                     #
#=========================================================================#

USER root

RUN apt install -y zsh

USER dockeruser

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh) --keep-zshrc"

#=========================================================================#
#                             Git config                                  #
#=========================================================================#

USER dockeruser

ARG GIT_EMAIL
ARG GIT_NAME

RUN git config --global user.email "${GIT_EMAIL}" && \
    git config --global user.name "${GIT_NAME}"

#=========================================================================#
#                       Certificates authorities                          #
#=========================================================================#

USER root

RUN update-ca-certificates

#=========================================================================#
#                             Final touch                                 #
#=========================================================================#

USER root

RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    rm -f /var/log/lastlog /var/log/faillog

WORKDIR /var/www/node

CMD ["tail", "-f", "/dev/null"]