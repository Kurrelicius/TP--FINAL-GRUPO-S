addEventListener("DOMContentLoaded", function(){
    const btn_menu = this.document.querySelector(".btn_menu");
    if (btn_menu){
        btn_menu.addEventListener("click", function(){
            const menu_items = document.querySelector(".menu_items");
            menu_items.classList.toggle("show");
        });
    }
});

