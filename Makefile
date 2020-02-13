# Usage :
# make clean		Clean Build Folder
# make build-firefox	Packaging Extension to Firefox Platform

BUILD_DIR = build
OUT_DIR = _out

.SILENT: build-firefox clean

clean:
	if [ -d "${BUILD_DIR}" ]; then \
		echo "*** Removing existing build"; \
		rm -rf ${BUILD_DIR}; \
	fi

	if [ -d "${OUT_DIR}" ]; then \
		echo "*** Removing existing output"; \
		rm -rf ${OUT_DIR}; \
	fi

build-firefox:
	$(MAKE) clean
	echo "*** Create new directory to build"
	mkdir -p ${BUILD_DIR}
	mkdir -p ${OUT_DIR}
	
	echo "*** Copying file to build directory"
	cp -r src/* ${BUILD_DIR}

	echo "*** Optimize files"
	rm -rf ${BUILD_DIR}/img/icon_128.png
	
	echo "*** Packaging the extension"
	cd ${BUILD_DIR}; zip ../${OUT_DIR}/url-qr.xpi -qr *
	
	echo "*** Removing build directory"
	rm -rf ${BUILD_DIR}

	echo "*** Done"
