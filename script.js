
//ES6 Javascript
userInput = () =>{
         let text = document.getElementById("text-input").value
          document.getElementById("text-output").innerText = text;
}

makeBold = (elem) =>{
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('bold');
}

makeItalic = (elem) =>{
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle('italic');
}

makeUnderline = (elem) =>{
    elem.classList.toggle('active');
    let formattedText = document.getElementById("text-output");
    if(formattedText.classList.contains('underline'))
    {
           formattedText.classList.remove('underline');
    }
    else{
         formattedText.classList.add('underline');
    }
}

alignText = (elem, textType) =>{   
   document.getElementById('text-output').style.textAlign = textType;
   let buttons = document.getElementsByClassName('align');
   for(let value of buttons)
   {
       value.classList.remove('active');
   }
   elem.classList.toggle('active');
}
