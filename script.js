let imgNum = Math.floor(Math.random() * 7);

        const glitch1 = document.getElementById('glitch1');
        const glitch2 = document.getElementById('glitch2');
        const glitch3 = document.getElementById('glitch3');

        switch(imgNum) {
            case 0:
                glitch1.style.background = "url(img/01/R.png) left bottom no-repeat";
                glitch2.style.background = "url(img/01/G.png) left bottom no-repeat";
                glitch3.style.background = "url(img/01/B.png) left bottom no-repeat";
                break;
            case 1:
                glitch1.style.background = "url(img/02/R.png) left bottom no-repeat";
                glitch2.style.background = "url(img/02/G.png) left bottom no-repeat";
                glitch3.style.background = "url(img/02/B.png) left bottom no-repeat";
                break;
            case 2:
                glitch1.style.background = "url(img/03/R.png) left bottom no-repeat";
                glitch2.style.background = "url(img/03/G.png) left bottom no-repeat";
                glitch3.style.background = "url(img/03/B.png) left bottom no-repeat";
                break;
            case 3:
                glitch1.style.background = "url(img/04/R.png) left bottom no-repeat";
                glitch2.style.background = "url(img/04/G.png) left bottom no-repeat";
                glitch3.style.background = "url(img/04/B.png) left bottom no-repeat";
                break;
            case 4:
                glitch1.style.background = "url(img/05/R.png) left bottom no-repeat";
                glitch2.style.background = "url(img/05/G.png) left bottom no-repeat";
                glitch3.style.background = "url(img/05/B.png) left bottom no-repeat";
                break;
            case 5: 
                glitch1.style.background = "url(img/secret_1/R.png) left bottom no-repeat";
                glitch2.style.background = "url(img/secret_1/G.png) left bottom no-repeat";
                glitch3.style.background = "url(img/secret_1/B.png) left bottom no-repeat";
                break;
            case 6: 
                glitch1.style.background = "url(img/secret_2/R.png) left bottom no-repeat";
                glitch2.style.background = "url(img/secret_2/G.png) left bottom no-repeat";
                glitch3.style.background = "url(img/secret_2/B.png) left bottom no-repeat";
                break;
            default: {
                glitch1.style.background = "url(img/04/R.png) left bottom no-repeat";
                glitch2.style.background = "url(img/04/G.png) left bottom no-repeat";
                glitch3.style.background = "url(img/04/B.png) left bottom no-repeat";
            };
        }