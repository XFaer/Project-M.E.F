window.addEventListener("load", function() {    var answer =""
    function print(text, callback) {
        const delay = 10; // Задержка в миллисекундах
        const mainContainer = document.querySelector(".main-container");
        
        // Создаём новый <p> элемент для текста
        const paragraph = document.createElement("p");
        mainContainer.appendChild(paragraph);

        let index = 0; // Индекс текущего символа

        function addNextCharacter() {
            if (index < text.length) {
                paragraph.textContent += text[index]; // Добавляем символ в текущую строку
                index++;
                setTimeout(addNextCharacter, delay); // Запускаем таймер для следующего символа
            } else if (callback) {
                console.log("callback")
                callback(); // Вызываем колбэк-функцию после завершения
            }
        }

        addNextCharacter(); // Начинаем процесс
    }

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function input(){
        const mainContainer = document.querySelector(".main-container")
        mainContainer.innerHTML += "<p><input></p>"
            document.addEventListener( 'keyup', event => {
            if( event.code === 'Enter' ){ 
                answer = document.querySelector("input").value 
                document.querySelector("input").remove()
                print(answer, function(){
                answer = answer.toLowerCase()
                if (answer == "quest"){
                    document.cookie = `authorization_code=0;  path=/; max-age=${60*60*24}`
                    location='main_page.html'
                } else if(answer == "cpxmm"){
                    document.cookie = `authorization_code=1;  path=/; max-age=${60*60*24}`
                    location='main_page.html'
                } else if(answer == "child"){
                    location.href ="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%82%D0%BE%D0%BD"
                } else if(answer == "xeno" || answer == "xenomorph" || answer == "facehugger"){
                    location.href ="https://rozetka.com.ua/leo-roz6501036850/p448287074/"
                }else{ 
                    print("unknown command", input)
                }
                })
            }});
    }

    print(`Login as a guest or enter an authorization code?(enter "quest" or enter authorization code)`, input)

})