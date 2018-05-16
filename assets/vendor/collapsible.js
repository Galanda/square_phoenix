{
    const acc = document.getElementsByClassName("sq-collapsible");
    let i;
    for (i = 0; i < acc.length; i++){
        acc[i].addEventListener('click', function(){

            this.classList.toggle('sq-collapsed');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            }else{
                panel.style.maxHeight = `${panel.scrollHeight}px`;
            }
        });
    }
};

