import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { User } from './models';

export const dummyUsers: User[] = [
  {
    _id: '0',
    username: 'Ethan Gonzalez',
    password: 'password',
    profile: {
      phone: '+222222222',
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
      status: "Salut j'utilise WhatsApp !",
    },
  },
  {
    _id: '1',
    username: 'Bryan Wallace',
    password: 'password',
    profile: {
      phone: '+333333333',
      picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
      status: "Salut j'utilise WhatsApp !",
    },
  },
  {
    _id: '2',
    username: 'Avery Stewart',
    password: 'password',
    profile: {
      phone: '+444444444',
      picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
      status: "Salut j'utilise WhatsApp !",
    },
  },
  {
    _id: '3',
    username: 'Katie Peterson',
    password: 'password',
    profile: {
      phone: '+555555555',
      picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
      status: "Salut j'utilise WhatsApp !",
    },
  },
  {
    _id: '4',
    username: 'Ray Edwards',
    password: 'password',
    profile: {
      phone: '+666666666',
      picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
      status: "Salut j'utilise WhatsApp !",
    },
  },
  {
    _id: '5',
    username: 'Samy Smith',
    password: 'password',
    profile: {
      phone: '+777777777',
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
      status: "Salut j'utilise WhatsApp !",
    },
  },
  {
    _id: '6',
    username: 'John Smith',
    password: 'password',
    profile: {
      phone: '+888888888',
      picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
      status: "Salut j'utilise whatsapp",
    },
  },
  {
    _id: '7',
    username: 'Adrianna Scott',
    password: 'password',
    profile: {
      phone: '+999999999',
      picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
      status: "Salut j'utilise WhatsApp !",
    },
  },
  {
    _id: '8',
    username: 'Julienne Smith',
    password: 'password',
    profile: {
      phone: '+999999999',
      picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
      status: "Salut j'utilise WhatsApp !",
    },
  },
  {
    _id: '9',
    username: 'Marco',
    password: 'password',
    profile: {
      phone: '+101010101',
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
      status: "Salut j'utilise WhatsApp !",
    },
  },
];

Meteor.methods({
  'user.login': ({ username, phone, password }) => {
    const user = Accounts.findUserByUsername(username);
    let exist = !!user;
    if (exist) {
      console.log('User exists', user);
      return true;
    } else {
      console.log("User doesn't exist");
      return Accounts.createUser({
        username,
        password,
        profile: { phone, status: "Salut, j'utilise WhatsApp !" },
      });
    }
  },
});