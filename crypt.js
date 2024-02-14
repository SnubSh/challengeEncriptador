let text = '';
let textEncrypt = '';
let textDecrypt = '';
const wordsCif = ['enter', 'imes', 'ai', 'ober', 'ufat'];
const words = ['e', 'i', 'a', 'o', 'u'];
showButtonCopy(false, 'copy-text-cif');
showButtonCopy(false, 'copy-text-descif');

function textEncrypter() {
  let itemsText = [];
  text = document.getElementById('text-a-cif').value;
  if (text.length > 0) {
    for (let index = 0; index < text.length; index++) {
      let temp = text.charAt(index).toLocaleLowerCase();
      switch (temp) {
        case 'a':
          let a = temp.replace('a', 'ai');
          itemsText.push(a);
          break;
        case 'e':
          let e = temp.replace('e', 'enter');
          itemsText.push(e);
          break;
        case 'i':
          let i = temp.replace('i', 'imes');
          itemsText.push(i);
          break;
        case 'o':
          let o = temp.replace('o', 'ober');
          itemsText.push(o);
          break;
        case 'u':
          let u = temp.replace('u', 'ufat');
          itemsText.push(u);
          break;
        default:
          itemsText.push(temp);
          break;
      }
    }
    textEncrypt = itemsText.join('');
    itemsText = [];
    displayMsg(textEncrypt.toLocaleUpperCase(), '#text-view-cif');
    document.querySelector('#text-a-descif').value = textEncrypt.toLocaleUpperCase();
    showButton(true, 'btn-clear-cif');
    showButtonCopy(true, 'copy-text-cif');
    displayMsg('', '#msg-alert-c');
  } else {
    displayMsg('Debe ingresar un texto, para cifrar', '#msg-alert-c');
  }
}

function displayMsg(msg, id){
  document.querySelector(`${id}`).innerHTML = `${msg}`;
}

function textDecrypter() {
  text = document.getElementById('text-a-descif').value;
  let newItems = [];
  if (text.length > 0) {
    let items = text.split(' ');
    for (let index = 0; index < items.length; index++) {
      // Palabra cifrada
      var it = items[index].replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
      newItems.push(it);
    }
    textDecrypt = newItems.join(' ');
    displayMsg(textDecrypt.toLocaleUpperCase(), '#text-view-descif');
    showButton(true, 'btn-clear-descif');
    showButtonCopy(true, 'copy-text-descif');
    displayMsg('', '#msg-alert-d');
  } else { 
    displayMsg('Debe ingresar un texto, para descifrar', '#msg-alert-d');
  }
}

function clearText(id, idB, idMsg, idBC){
  document.querySelector(`#${id}`).value = '';
  displayMsg('', idMsg);
  showButton(false, idB);
  showButtonCopy(false, idBC);
}

function showButton(show, idB){
  if (show) {
    document.getElementById(idB).style.display = 'block';
  } else {
    document.getElementById(idB).style.display = 'none';
  }
}
function showButtonCopy(show, id){
  if (show) {
    document.getElementById(id).style.display = 'block';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}

async function copyText(idCopy) {
  let text = document.querySelector(idCopy).innerHTML;
  try {
    let textCopy = await navigator.clipboard.writeText(text);
    console.log(textCopy);
    alert("¡Texto copiado!");
  } catch (error) {
    displayMsg(`${error}`, '#msg-alert-c');
  }
}