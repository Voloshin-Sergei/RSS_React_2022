import React from 'react';
import { PersonCard } from './PersonCard';
import { UserCard } from './UserCard';
import { Modal } from '../Modal';
import { Person, User } from '../../types';

import style from './ItemList.module.scss';

interface ItemListProps {
  persons?: Person[];
  users?: User[];
}

interface ItemListState {
  modalShow: boolean;
  person: Person | null;
  error: null;
}
export class ItemList extends React.Component<ItemListProps, ItemListState> {
  constructor(props: ItemListProps) {
    super(props);
    this.state = {
      modalShow: false,
      person: null,
      error: null,
    };
  }

  handleClick = (id: number) => {
    if (id) {
      this.getCharacter(id);
      this.setState({ modalShow: true });
    }
  };

  modalClose = () => {
    this.setState({ modalShow: false, person: null });
  };

  url = 'https://rickandmortyapi.com/api/character/';

  getCharacter = (id: number) => {
    fetch(`${this.url}${id}`).then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        this.setState({ person: data });
      }
      this.setState({ error: data.error });
    });
  };

  render() {
    return (
      <section className={style.itemList}>
        <Modal
          isOpen={this.state.modalShow}
          modalClose={this.modalClose}
          person={this.state.person}
        />

        <h1 className={style.itemList__title}>{this.props.persons ? 'Persons' : 'Users'}</h1>
        <div className={style.itemList__wrapper}>
          {this.props.persons?.map((item) => (
            <PersonCard onClick={() => this.handleClick(item.id)} key={item.id} person={item} />
          ))}
          {this.props.users?.map((item) => (
            <UserCard key={item.id} user={item} />
          ))}
        </div>
      </section>
    );
  }
}
