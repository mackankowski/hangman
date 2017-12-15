class View {

    constructor(id) {
        this.id = id;
        this.section = "section";
        this.content = ".content";
        this.loadTemplate();
    }

    loadTemplate() {

        this.ajaxRequest(this);
        this.toogleReturnBtn();

    }

    ajaxRequest(ref) {
        

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                switch (ref.id) {
                    case 'main':
                        ref.active = new Main(ref, this.responseText);
                        break;
                    case 'game':
                        ref.active = new Game(ref, this.responseText);
                        break;
                    case 'categories':
                        ref.active = new Categories(ref, this.responseText);
                        break;
                    case 'scoreboard':
                        ref.active = new Scoreboard(ref, this.responseText);
                        break;
                    case 'summary':
                        ref.active = new Summary(ref, this.responseText);
                        break;
                    default:
                        document.querySelector(ref.section).innerHTML = "<p>Content not found!</p>";
                }

                

            }
        };
        xhttp.open("GET", "views/" + this.id + ".html", true);
        xhttp.send();

    }

    toogleReturnBtn() {

        if (this.id == 'main') {
            document.querySelector(".main").style.display = 'none';
        } else {
            document.querySelector(".main").style.display = 'inline-block';
        }

    }

    refresh(id) {

        this.id = id;
        this.loadTemplate();

    }

}