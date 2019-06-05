.DEFAULT_GOAL := help 
.PHONEY := help all image container clean image_clean container_clean

APPNAME = lcache
FOLDER = .
DK_IMGNAME = ${APPNAME}
DK_CNTNAME = ${APPNAME}
DK_LOCALPORT = 49160
DK_RMTPORT = 8080



help:
	@echo ":: HELP ::"
	@echo "\tavailable commands: help, all, image, container, clean"
	@echo "\tbuild image: ${DK_IMGNAME}"
	@echo "\tcontainer: ${DK_CNTNAME}"
	@echo ":: HELP :: DONE ::"

all: 	container_clean image_clean image container
	@echo ":: ALL  :: "
	@echo ":: ALL  :: DONE ::"

image_clean:
	@echo ":: BUILD - CLEAN :: "
	@echo "\tdestorying image ${DK_IMGNAME}"
	@echo "=================================================="
	-docker rmi ${DK_IMGNAME} -f
	@echo "=================================================="
	@echo ":: BUILD - CLEAN :: DONE :: "

image: image_clean 
	@echo ":: BUILD ::"
	@echo "\tbuilding docker image ${DK_IMGNAME}"
	@echo "=================================================="
	docker build -t ${DK_IMGNAME} ${FOLDER}
	@echo "=================================================="
	@echo ":: BUILD :: DONE :: "

container_clean:
	@echo ":: CONTAINER - CLEAN::"
	@echo "\tdestory containers of name ${DK_CNTNAME}"
	@echo "=================================================="
	-docker rm -f ${DK_CNTNAME}
	@echo "=================================================="
	@echo ":: CONTAINER - CLEAN :: DONE :: "

container: container_clean
	@echo ":: CONTAINER ::"
	@echo "\tstarting docker instance ${DK_CNTNAME} based on image ${DK_IMGNAME}"
	@echo "=================================================="
	docker run --name ${DK_CNTNAME} -p ${DK_LOCALPORT}:${DK_RMTPORT} -d ${DK_IMGNAME} 
	@echo "=================================================="
	@echo ":: CONTAINER :: DONE ::"

clean: container_clean image_clean
	@echo ":: CLEAN ::"
	@echo ":: CLEAN :: DONE ::"
		

