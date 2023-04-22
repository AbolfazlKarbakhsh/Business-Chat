
//#region  js cods in Giga Menu In NavBar

var gigaCloseNumber = 0;

function openNav(openBtn, closeBtn, widthBtnOrFother, widthPanel, closeFother, closePanel, attribute = "width") {
    const GigaMenuFother = document.querySelector(closeBtn);
    const GigaMenu = document.querySelector(openBtn);
    const body = document.querySelector("body");


    if (gigaCloseNumber == 0) {
        GigaMenuFother.style.cssText = `${attribute}:${widthBtnOrFother}`;
        GigaMenu.style.cssText = `${attribute}:${widthPanel}`;
        body.style.overflow = "hidden";
        gigaCloseNumber = 1;
    } else if (gigaCloseNumber === 1) {
        function close() {
            GigaMenu.style.cssText = `${attribute}:${closeFother}`;
            GigaMenu.removeAttribute("style");
          
            setTimeout(() => {
                GigaMenuFother.style.cssText = `${attribute}:${closePanel}`;
                body.style.overflow = "auto";
            }, 400);
            gigaCloseNumber = 0;

        }
        close();
    }
    GigaMenuFother.addEventListener("click", () => {
        openNav(openBtn, closeBtn, widthBtnOrFother, widthPanel, closeFother, closePanel);
    }, false);

}

//#endregion
