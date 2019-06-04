FROM node:8

ENV PORT=8080
ENV GITUSR=Hndl
ENV APPNAME=lcache
ENV APPDIR=/usr/scr/app
ENV DBPATH=${APPDIR}/db

WORKDIR ${APPDIR} 

RUN git clone https://github.com/${GITUSR}/${APPNAME}

WORKDIR ${APPDIR}/${APPNAME}

RUN npm install

CMD ["npm","start"]

EXPOSE ${PORT}

