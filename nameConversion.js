const myButton = document.getElementById("convert-btn");
const myText = document.getElementById("text");
const camelCase = document.getElementById("camel-case");
const pascalCase = document.getElementById("pascal-case");
const snakeCase = document.getElementById("snake-case");
const screamingSnakeCase = document.getElementById("screaming-snake-case");
const kebabCase = document.getElementById("kebab-case");
const screamingKebabCase = document.getElementById("screaming-kebab-case");

// camelCase Text
const camelCaseText = (str) => {
    let myStr = "";
    str = str.replace(/[0-9-;:._,]/g,"")
    str = str.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    str.split(" ").map((v, index) => {
        if(index === 0) {
            myStr = v.toLowerCase();
        } else {
            myStr += v[0].toUpperCase() + v.slice(1);
        }
    });
    return myStr;
};

// Pascal Case Text
const pascalCaseText = (str) => {
    let myStr = "";
    str = str.replace(/[0-9-;:._,]/g,"")
    str = str.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    str.split(" ").map((v) => {
        myStr += v[0].toUpperCase() + v.slice(1);
    });
    return myStr;
};

// Snake Case
const snakeCaseText = (str) => {
    let myStr = "";
    str = str.replace(/[0-9-;:._,]/g,"")
    str = str.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    str.split(" ").map((v, index) => {
        if(index === (str.split(" ").length -1)) {
            myStr += v.toLowerCase();
        } else {
            myStr += v.toLowerCase() + "_";
        }
    });
    return myStr;
};

// Screaming Snake Case
const ScreamingSnakeCaseText = (str) => {
    let myStr = "";
    str = str.replace(/[0-9-;:._,]/g,"")
    str = str.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    str.split(" ").map((v, index) => {
        if(index === (str.split(" ").length -1)) {
            myStr += v.toUpperCase();
        } else {
            myStr += v.toUpperCase() + "_";
        }
    });
    return myStr;
};

// Kebab Case
const kebabCaseText = (str) => {
    let myStr = "";
    str = str.replace(/[0-9-;:._,]/g,"")
    str = str.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    str.split(" ").map((v, index) => {
        if(index === (str.split(" ").length -1)) {
            myStr += v.toLowerCase();
        } else {
            myStr += v.toLowerCase() + "-";
        }
    });
    return myStr;
};

// Screaming Kebab Case
const screamingKebabCaseText = (str) => {
    let myStr = "";
    str = str.replace(/[0-9-;:._,]/g,"")
    str = str.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    str.split(" ").map((v, index) => {
        if(index === (str.split(" ").length -1)) {
            myStr += v.toUpperCase();
        } else {
            myStr += v.toUpperCase() + "-";
        }
    });
    return myStr;
};

function conversion() {
   camelCase.innerText = camelCaseText(myText.value)
   pascalCase.innerText = pascalCaseText(myText.value)
   snakeCase.innerText = snakeCaseText(myText.value)
   screamingSnakeCase.innerText = ScreamingSnakeCaseText(myText.value)
   kebabCase.innerText = kebabCaseText(myText.value)
   screamingKebabCase.innerText = screamingKebabCaseText(myText.value)
}
myButton.addEventListener("click", conversion);

