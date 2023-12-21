const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join("./db/contacts.json")

async function contactsList () {
    const contacts = await fs.readFile(contactsPath, "utf-8"); 
    console.log(contacts);  
}

async function getContactById(contactId) {
const contacts =contactsList();
}

async function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}


function addContact(name, email, phone) {
  // ...твой код. Возвращает объект добавленного контакта. 
}