document.addEventListener("DOMContentLoaded", function() {
    let divContainer = document.createElement('div');

    divContainer.className = "container";

    document.body.appendChild(divContainer);

    let button = document.createElement('button');

    let buttonText = document.createTextNode("Add Square");

    button.appendChild(buttonText);

    divContainer.appendChild(button);

    let classId = '1';

    let colorsArry = ['orange', 'purple', 'green', 'red', 'black', 'yellow', 'pink', 'blue',];

    function changeColor() {
           let randomColor = colorsArry[Math.floor(Math.random() * colorsArry.length)];
           return randomColor;
        }

    button.addEventListener('click', function() {
        console.log("clicked");

        let div = document.createElement('div');
        document.body.appendChild(div);
        div.style.backgroundColor = "black";
        div.style.height = "10em";
        div.style.width = "10em";
        div.style.cssFloat = "left";

        div.className = "square";

        div.id = classId;

        div.setAttribute('id', classId);
        classId++;

        div.addEventListener('mouseover',function() {
            let divText = document.createTextNode(div.id);
            div.appendChild(divText);
            div.style.color = 'white';
            div.style.textAlign = 'center';
            div.style.fontSize = '20';
            console.log(div.id);
        });

        div.addEventListener('mouseout', function() {
            div.innerHTML = "";
        })

        div.addEventListener('click', function() {
            let randomColor = changeColor();
            div.style.backgroundColor = randomColor;
        })

        div.addEventListener('dblclick', removeDivBox);


        function removeDivBox () {
            if(div.id % 2 === 0) {
                div.nextSibling.remove();
                    
            } else { 
                div.previousSibling.remove();
            }
            
        }

        

    })
    


})