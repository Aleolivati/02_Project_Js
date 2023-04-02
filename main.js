const contactForm = document.getElementById('contact-form') ;
const contactName = document.getElementById('nome-contato') ;
const contactPhone = document.getElementById('telefone-contato') ;
let lines = '' ;
const arrayName = [] ;
const arrayPhone = [] ;

contactForm.addEventListener('submit',function(e) {

    e.preventDefault() ;

    if (arrayName.includes(contactName.value)) {

        alert(`O nome ${contactName.value} já foi adicionado anteriormente! Favor escrever um novo nome.`) ;

    } else if (arrayPhone.includes(contactPhone.value)) {
        alert(`O telefone ${contactPhone.value} já foi adicionado em um dos contatos! Favor escrever um novo telefone.`) ;

    } else {
        arrayName.push(contactName.value) ;
        arrayPhone.push(contactPhone.value) ;

        addLine() ;
        refreshTable() ;
        
    }

    contactName.value = '' ;
    contactPhone.value = '' ;

})

function addLine () {

    let line =  `<tr>` ;
    line += `<td>${contactName.value}</td>` ;
    line += `<td>${contactPhone.value}</td>` ;
    line += `</tr>` ;

    lines += line ;
}

function refreshTable () {
    const contactTable = document.querySelector('tbody') ;
    contactTable.innerHTML = lines ;
}
