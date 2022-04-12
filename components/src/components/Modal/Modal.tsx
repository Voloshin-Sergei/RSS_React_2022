import React from 'react';

import style from './Modal.module.scss';

interface ModalProps {
  id: number;
  isOpen: boolean;
  onCancel: () => void;
}

export class Modal extends React.Component<ModalProps> {
  constructor(props: ModalProps) {
    super(props);

    this.state = {
      character: {},
    };
  }

  url = 'https://rickandmortyapi.com/api/character/';

  getCharacter = (id: number) => {
    console.log('>>>', id);
    // this.setState({ persons: [] });
    fetch(`${this.url}${id}`).then(async (response) => {
      // this.setState({ isLoader: true });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        this.setState({ character: data });
      }

      // this.setState({ error: data.error });
      // this.setState({ isLoader: false });
    });
  };

  componentDidUpdate(prevProps: ModalProps) {
    if (this.props.id !== prevProps.id) {
      this.getCharacter(this.props.id);
    }
  }

  render() {
    return (
      <>
        {this.props.isOpen && (
          <div className={style.layout} onClick={this.props.onCancel}>
            <div className={style.modal}>
              <button className={style.modal__btn} onClick={this.props.onCancel}>
                &#10006;
              </button>
              {/* <div className={style.person} onClick={this.props.onClick}>
        <img className={style.person__img} src={`${image}`} />
        <div className={style.person__info}>
          <h2 className={style.person__name}>{name}</h2>
          <p className={style.person__species}>
            <span className={style.person__type}>species: </span>
            <span className={style.person__text}>{species}</span>
          </p>
          <p className={style.person__gender}>
            <span className={style.person__type}>gender: </span>
            <span className={style.person__text}>{gender}</span>
          </p>
          <p className={style.person__status}>
            <span className={style.person__type}>status: </span>
            <span className={style.person__text}>{status}</span>
          </p>
          <p className={style.person__location}>
            <span className={style.person__type}>location: </span>
            <span className={style.person__text}>{location.name}</span>
          </p>
        </div>
      </div> */}
            </div>
          </div>
        )}
      </>
    );
  }
}
