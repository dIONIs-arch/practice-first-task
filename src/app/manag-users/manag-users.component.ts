import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manag-users',
  templateUrl: './manag-users.component.html',
  styleUrls: ['./manag-users.component.css']
})
export class ManagUsersComponent implements OnInit {

  users = [
    {
      removed: true,
      login: "Alina228",
      surname: "Марошкова",
      name: "Алина",
      patronymic: "Денисовна",
      position: "",
      password: "1111",
      role: {
        admin: true,
        dispetcher: false,
        supervisor: false
      }
    },
    {
      removed: true,
      login: "Antopnio1234",
      surname: "Антонов",
      name: "Антон",
      patronymic: "Антонович",
      position: "",
      password: "2222",
      role: {
        admin: false,
        dispetcher: false,
        supervisor: false
      }
    },
    {
      removed: false,
      login: "Avrora555",
      surname: "Артемович",
      name: "Артем",
      patronymic: "Артемонович",
      position: "",
      password: "3333",
      role: {
        admin: false,
        dispetcher: true,
        supervisor: false
      }
    },
    {
      removed: false,
      login: "Danila673",
      surname: "Данилов",
      name: "Даня",
      patronymic: "Даниилович",
      position: "",
      password: "4444",
      role: {
        admin: false,
        dispetcher: false,
        supervisor: true
      }
    },
    {
      removed: false,
      login: "Dionis",
      surname: "Клюев",
      name: "Денис",
      patronymic: "Максимович",
      position: "",
      password: "5555",
      role: {
        admin: false,
        dispetcher: false,
        supervisor: false
      }
    },
    {
      removed: true,
      login: "Alina228",
      surname: "Марошкова",
      name: "Алина",
      patronymic: "Денисовна",
      position: "",
      password: "1111",
      role: {
        admin: true,
        dispetcher: false,
        supervisor: false
      }
    },
    {
      removed: true,
      login: "Antopnio1234",
      surname: "Антонов",
      name: "Антон",
      patronymic: "Антонович",
      position: "",
      password: "2222",
      role: {
        admin: false,
        dispetcher: false,
        supervisor: false
      }
    },
    {
      removed: false,
      login: "Avrora555",
      surname: "Артемович",
      name: "Артем",
      patronymic: "Артемонович",
      position: "",
      password: "3333",
      role: {
        admin: false,
        dispetcher: true,
        supervisor: false
      }
    },
    {
      removed: false,
      login: "Danila673",
      surname: "Данилов",
      name: "Даня",
      patronymic: "Даниилович",
      position: "",
      password: "4444",
      role: {
        admin: false,
        dispetcher: false,
        supervisor: true
      }
    },
    {
      removed: false,
      login: "Dionis",
      surname: "Клюев",
      name: "Денис",
      patronymic: "Максимович",
      position: "",
      password: "5555",
      role: {
        admin: false,
        dispetcher: false,
        supervisor: false
      }
    },
    {
      removed: true,
      login: "Alina228",
      surname: "Марошкова",
      name: "Алина",
      patronymic: "Денисовна",
      position: "",
      password: "1111",
      role: {
        admin: true,
        dispetcher: false,
        supervisor: false
      }
    },
    {
      removed: true,
      login: "Antopnio1234",
      surname: "Антонов",
      name: "Антон",
      patronymic: "Антонович",
      position: "",
      password: "2222",
      role: {
        admin: false,
        dispetcher: false,
        supervisor: false
      }
    },
    {
      removed: false,
      login: "Avrora555",
      surname: "Артемович",
      name: "Артем",
      patronymic: "Артемонович",
      position: "",
      password: "3333",
      role: {
        admin: false,
        dispetcher: true,
        supervisor: false
      }
    },
    {
      removed: false,
      login: "Danila673",
      surname: "Данилов",
      name: "Даня",
      patronymic: "Даниилович",
      position: "",
      password: "4444",
      role: {
        admin: false,
        dispetcher: false,
        supervisor: true
      }
    },
    {
      removed: false,
      login: "Dionis",
      surname: "Клюев",
      name: "Денис",
      patronymic: "Максимович",
      position: "",
      password: "5555",
      role: {
        admin: false,
        dispetcher: false,
        supervisor: false
      }
    },
    {
      removed: true,
      login: "Alina228",
      surname: "Марошкова",
      name: "Алина",
      patronymic: "Денисовна",
      position: "",
      password: "1111",
      role: {
        admin: true,
        dispetcher: false,
        supervisor: false
      }
    },
    {
      removed: true,
      login: "Antopnio1234",
      surname: "Антонов",
      name: "Антон",
      patronymic: "Антонович",
      position: "",
      password: "2222",
      role: {
        admin: false,
        dispetcher: false,
        supervisor: false
      }
    },
    {
      removed: false,
      login: "Avrora555",
      surname: "Артемович",
      name: "Артем",
      patronymic: "Артемонович",
      position: "",
      password: "3333",
      role: {
        admin: false,
        dispetcher: true,
        supervisor: false
      }
    },
    {
      removed: false,
      login: "Danila673",
      surname: "Данилов",
      name: "Даня",
      patronymic: "Даниилович",
      position: "",
      password: "4444",
      role: {
        admin: false,
        dispetcher: false,
        supervisor: true
      }
    },
    {
      removed: false,
      login: "Dionis",
      surname: "Клюев",
      name: "Денис",
      patronymic: "Максимович",
      position: "",
      password: "5555",
      role: {
        admin: false,
        dispetcher: false,
        supervisor: false
      }
    }
  ]
  forExemple: string = "dsda";


  change: boolean = false;
  userRemoved: string;
  
  id: number;

  removed: boolean;
  login: string;
  surname: string;
  name: string;
  patronymic: string;
  position: string;
  password: string;

  saveRemoved: boolean;
  saveLogin: string;
  saveSurname: string;
  saveName: string;
  savePatronymic: string;
  savePosition: string;



  reset() {
    this.removed = false;
    this.userRemoved = "";
    this.login = "";
    this.surname = "";
    this.name = "";
    this.patronymic = "";
    this.position = "";
    this.password = "";
  }

  userClick(a: number) {
    if (this.change) {
      this.notSave();
    } else {
      if (this.users[a].removed) {
        this.userRemoved = "Удален";
      }
      else {
        this.userRemoved = "";
      }
      this.id = a;
      this.login = this.users[a].login;
      this.surname = this.users[a].surname;
      this.name = this.users[a].name;
      this.patronymic = this.users[a].patronymic;
      this.position = this.users[a].position;
      this.password = this.users[a].password;

      this.saveRemoved = this.users[a].removed;
      this.saveLogin = this.users[a].login;
      this.saveSurname = this.users[a].surname;
      this.saveName = this.users[a].name;
      this.savePatronymic = this.users[a].patronymic;
      this.savePosition = this.users[a].position;
    }
  }
  saveUser() {
    if (this.id === -1) {
      
      alert("Новый пользователь добавлен");
      // НЕ СМОГ Сделать добавление, но это из-за массива с объектами. Если складывать в БД, то должно быть нормально

      // ВОПРОС!!!, как объявить массив, в котором буду объекты. 

      // 
      // this.users.push({
      //   removed: true,
      //   login: "",
      //   surname: "",
      //   name: "",
      //   patronymic: "",
      //   position: "",
      //   password: ""
      // });
    } else {
      this.users[this.id].login = this.login;
      this.users[this.id].surname = this.surname;
      this.users[this.id].name = this.name;
      this.users[this.id].patronymic =  this.patronymic;
      this.users[this.id].position = this.position;
    }
    this.change = false;
  }

  deleteUser() {
    if (this.id !== undefined) {
      if (this.users[this.id].removed !== true) {
        this.users[this.id].removed = true;
        this.userRemoved = "Удален";
        this.changeUser();
      }
    }
  }

  changeUser() {    
    this.change = true;
  }

  addUser() {
    this.reset();
    this.id = -1;
  }

  notSave() {
    alert("Были внесены изменения, требуется сохранить информацию.")
  }

  searchUser(a: string) {
    for (let user of this.users) {
      
      if (`${user.surname} ${user.name} ${user.patronymic}`.indexOf(a) !== -1) {
        console.log(1)
      }

    }
  }



  ngOnInit(): void {
    this.reset();

    
  }
}