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
    async function generateHash(input) {
        const encoder = new TextEncoder();
        const data = encoder.encode(input);
    
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    
        return hashHex;
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
                generateHash(answer.trim()).then(hash => {
                if (hash == "ac1a1c7143cb2199eb400993a5db42bc2f6d98f6769bb696d04b48d84c68a56f"){
                    document.cookie = `authorization_code=0;  path=/; max-age=${60*60*24}`
                    location='main_page.html'
                } else if(hash == "e07c3320ad152c0749adb0ab3e1f0d4186ab8c671a268a545fa85fba43602edb"){
                    document.cookie = `authorization_code=1;  path=/; max-age=${60*60*24}`
                    location='main_page.html'
                } else if(hash == "ddc9e669194254cef019a29d3619a2c16592e5d52e1a81e98b01bd52319149a3"){
                    location.href ="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%82%D0%BE%D0%BD"
                } else if(hash == "640dcbd00e38411e55f0fb9f93e20cf0582fdad0107eea9cbbb55224a1e80dba" || answer == "856da70d3b719d245237ad99a498cee894117f4deec715863ce7e32d8d7c9a97" || answer == "fbbb7f994807c513f74bb2b107abbcf1fb48391c523435f66d5269fb6d376c49"){
                    location.href ="https://rozetka.com.ua/leo-roz6501036850/p448287074/"
                }else{ 
                    print("unknown command", input)
                }
                })})
            }});
    }

    print(`Login as a guest or enter an authorization code?(enter "quest" or enter authorization code)`, input)

})