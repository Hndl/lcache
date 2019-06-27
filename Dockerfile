FROM node:8

ENV PORT=8080
ENV GITUSR=Hndl
ENV APPNAME=lcache
ENV APPDIR=/usr/scr/app/${APPNAME}
ENV DBPATH=${APPDIR}/dbvol

WORKDIR ${APPDIR}


#
# said to copy everything. However, there is a .dockerignore file which restricts what
# gets copy as part of the build context.
#
COPY . .

RUN npm install

CMD ["npm","start"]

EXPOSE ${PORT}

