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
  id: number;
}
export class ItemList extends React.Component<ItemListProps, ItemListState> {
  constructor(props: ItemListProps) {
    super(props);
    this.state = {
      modalShow: false,
      id: 0,
    };
  }

  handleClick = (id: number) => {
    console.log(id);
    if (id) {
      this.setState({ modalShow: true, id });
    }
  };

  onCancel = () => {
    this.setState({ modalShow: false });
  };

  render() {
    return (
      <section className={style.itemList}>
        <Modal id={this.state.id} isOpen={this.state.modalShow} onCancel={this.onCancel} />
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
