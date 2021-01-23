class User {
  email;
 
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
  // Пиши код ниже этой строки
class Admin extends User {
   accessLevel;
  
constructor ({email, accessLevel}) {
  
  super(email);
 this.accessLevel = accessLevel;
  
}

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser