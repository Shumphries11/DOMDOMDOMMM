document.addEventListener("DOMContentLoaded", function () {
    let divContainer = document.createElement('div');

    divContainer.className = "container";

    

    let button = document.createElement('button');

    let buttonText = document.createTextNode("Add Square");

    button.appendChild(buttonText);

    document.body.appendChild(button);

    document.body.appendChild(divContainer);

    let classId = '1';

    let colorsArry = ['orange', 'purple', 'green', 'red', 'black', 'yellow', 'pink', 'blue',];

    function changeColor() {
        let randomColor = colorsArry[Math.floor(Math.random() * colorsArry.length)];
        return randomColor;
    }

    button.addEventListener('click', function () {
        console.log("clicked");


        let div = document.createElement('div');
        divContainer.appendChild(div);
        div.style.backgroundColor = "black";
        div.style.height = "10em";
        div.style.width = "10em";
        div.style.cssFloat = "left";

        div.className = "square";

        div.id = classId;

        div.setAttribute('id', classId);
        classId++;

        div.addEventListener('mouseover', function () {
            let divText = document.createTextNode(div.id);
            div.appendChild(divText);
            console.log(div.id);
        });

        div.addEventListener('mouseout', function () {
            div.innerHTML = "";
        })

        div.addEventListener('click', function () {
            let randomColor = changeColor();
            div.style.backgroundColor = randomColor;
        })

        div.addEventListener('dblclick', removeDivBox);


        function removeDivBox() {
            if (div.id % 2 === 0) {
                if (div.nextSibling) {
                    div.nextSibling.remove();
                } else {
                    alert('The next box does not exist');
                }

            }
            if (div.id % 2 !== 0) {
                if (div.previousSibling) {
                div.previousSibling.remove();
                } else {
                alert('The previous sibling does not exist');
                }
            }
            




        }
    })

        
    
    


})