import React from 'react';
import { ItemList } from '../../components/ItemList';
import { User } from '../../types';
import style from './UsersPage.module.scss';
interface UsersPageState {
  name: string;
  surname: string;
  birthday: string;
  users: User[];
  avatar: string;
  errors: {
    name: string;
    surname: string;
    birthday: string;
    avatar: string;
  };
  agree: boolean;
  isModal: boolean;
}

interface UsersPageProps {
  props?: null;
}
export class UsersPage extends React.Component<UsersPageProps, UsersPageState> {
  private name = React.createRef<HTMLInputElement>();
  private surname = React.createRef<HTMLInputElement>();
  private birthday = React.createRef<HTMLInputElement>();
  private country = React.createRef<HTMLSelectElement>();
  private gender = React.createRef<HTMLInputElement>();
  private file = React.createRef<HTMLInputElement>();
  private agree = React.createRef<HTMLInputElement>();

  constructor(props: UsersPageProps) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      birthday: '',
      avatar: '',
      users: [],
      errors: { name: '', surname: '', birthday: '', avatar: '' },
      agree: false,
      isModal: false,
    };
  }

  handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const id = this.state.users.length + 1;
    const name = this.name.current!.value;
    const surname = this.surname.current!.value;
    const birthday = this.handleBirthday(this.birthday.current!.value);
    const country = this.country.current!.value;
    const gender = this.handleGender(this.gender.current!.checked);
    const avatar = this.file.current!.files![0];

    const newUser = { id, name, surname, birthday, country, gender, avatar };

    if (name && surname && birthday && avatar) {
      this.setState({ users: [...this.state.users, newUser] });
      this.resetForm();
      this.setModal();
    }

    this.validate();
  };

  handleGender = (param: boolean | undefined): string => {
    return param ? 'Female' : 'Male';
  };

  handleBirthday = (data: string): string => {
    return data.split('-').reverse().join('.');
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({ ...this.state, [name]: value });

    if (value) {
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          [name]: '',
        },
      }));
    }
  };

  handleAvatar = (e: React.FormEvent<HTMLInputElement>) => {
    this.handleChange(e);
    const avatarName = e.currentTarget.value.split(`\\`).pop();
    this.setState({ avatar: avatarName || '' });
  };

  handleAgree = () => {
    this.setState({ ...this.state, agree: !this.state.agree });
  };

  resetForm = () => {
    this.name.current!.value = '';
    this.surname.current!.value = '';
    this.birthday.current!.value = '';
    this.country.current!.value = 'Russia';
    this.gender.current!.checked = false;
    this.agree.current!.checked = false;
    this.file.current!.value = '';
    this.setState({ avatar: '' });
    this.setState({ agree: false });
  };

  validate = () => {
    if (this.state.name === '') {
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          name: 'name',
        },
      }));
    }
    if (this.state.surname === '') {
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          surname: 'surname',
        },
      }));
    }

    if (this.state.birthday === '') {
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          birthday: 'birthday',
        },
      }));
    }

    if (this.state.avatar === '') {
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          avatar: 'avatar',
        },
      }));
    }
  };

  setModal = () => {
    this.setState({ isModal: true });
    setTimeout(() => {
      this.setState({ isModal: false });
    }, 2000);
  };

  render() {
    return (
      <div className={style.usersPage}>
        {this.state.isModal && (
          <div className={style.modal}>
            <h2 className={style.modal__title}>New user added</h2>
          </div>
        )}
        <h1 className={style.usersPage__title}>Users</h1>
        <form className={style.form}>
          <h2 className={style.form__title}>Add new user</h2>
          <div className={style.form__group}>
            <label htmlFor="name">
              <p className={style.form__text}>Name:</p>

              <input
                className={style.form__input}
                type="text"
                name="name"
                ref={this.name}
                onChange={this.handleChange}
              />
            </label>
            {this.state.errors.name && (
              <p className={`${style.form__text} ${style.form__text_error}`}>
                This field must not be empty
              </p>
            )}
          </div>

          <div className={style.form__group}>
            <label htmlFor="surname">
              <p className={style.form__text}>Surname:</p>
              <input
                className={style.form__input}
                type="text"
                name="surname"
                ref={this.surname}
                onChange={this.handleChange}
              />
            </label>
            {this.state.errors.surname && (
              <p className={`${style.form__text} ${style.form__text_error}`}>
                This field must not be empty
              </p>
            )}
          </div>
          <div className={style.form__group}>
            <label htmlFor="birthday">
              <p className={style.form__text}>Birthday:</p>
              <input
                className={style.form__input}
                type="date"
                name="birthday"
                onChange={this.handleChange}
                ref={this.birthday}
              />
            </label>
            {this.state.errors.birthday && (
              <p className={`${style.form__text} ${style.form__text_error}`}>Choose a date</p>
            )}
          </div>

          <div className={style.form__group}>
            <p className={style.form__text}>Country:</p>
            <select className={style.form__input} ref={this.country}>
              <option value="Russia">Russia</option>
              <option value="Belarus">Belarus</option>
              <option value="Ukraine">Ukraine</option>
            </select>
          </div>

          <div className={`${style.form__group} ${style.form__group_switch}`}>
            <p className={style.form__text}>Male</p>
            <label className={style.switch}>
              <input
                type="checkbox"
                ref={this.gender}
                className={style.switch__input}
                defaultChecked={false}
              />
              <span className={style.switch__slider}></span>
            </label>
            <p className={style.form__text}>Female</p>
          </div>

          <div className={`${style.form__group} ${style.file}`}>
            <p className={`${style.form__text} ${style.file__text}`}>Choose a profile picture:</p>
            <input
              name="avatar"
              type="file"
              id="avatar"
              className={style.file__input}
              accept="image/png, image/jpeg"
              onChange={this.handleAvatar}
              ref={this.file}
            />
            <label htmlFor="avatar" className={style.form__btn}>
              {this.state.avatar ? this.state.avatar : 'Add file'}
            </label>
            {this.state.errors.avatar && (
              <p className={`${style.form__text} ${style.form__text_error}`}>Add avatar</p>
            )}
          </div>

          <div className={style.form__group}>
            <label className={style.check}>
              <p className={style.form__text}>I gree</p>
              <input
                className={style.check__input}
                type="checkbox"
                ref={this.agree}
                onChange={this.handleAgree}
              />
              <span className={style.check__box}></span>
            </label>
          </div>

          <div className={style.form__group}>
            <button
              className={style.form__btn}
              type="submit"
              onClick={this.handleSubmit}
              disabled={
                !this.state.agree ||
                this.state.errors.name != '' ||
                this.state.errors.surname != '' ||
                this.state.errors.birthday != '' ||
                this.state.errors.avatar != ''
              }
            >
              Submit
            </button>
          </div>
        </form>
        <ItemList users={this.state.users} />
      </div>
    );
  }
}
