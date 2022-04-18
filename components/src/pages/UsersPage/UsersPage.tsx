import React, { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ItemList } from '../../components/ItemList';
import { User } from '../../types';
import style from './UsersPage.module.scss';

type FormInputs = {
  name: string;
  surname: string;
  birthday: string;
  country: string;
  gender: boolean;
  agree: boolean;
  avatar: any;
};

export const UsersPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data.agree);
    console.log(data, isValid);
    reset();
  };

  const isAgree = watch('agree');

  console.log(errors);

  // const [name, setName] = useState('');
  // const [surname, setSurname] = useState('');
  // const [birthday, setBirthday] = useState('');
  // const [avatar, setAvatar] = useState('');
  // const [country, setCountry] = useState('Russia');
  // const [gender, setGender] = useState(false);
  // const [users, setUsers] = useState([]);
  // const [errors, setErrors] = useState({ name: '', surname: '', birthday: '', avatar: '' });
  // const [agree, setAgree] = useState(false);
  // const [isModal, setIsModal] = useState(false);

  // const userAvatar = useRef(null);

  // const handleSubmit = (e: React.FormEvent<EventTarget>) => {
  //   e.preventDefault();
  //   const id = users.length + 1;
  //   // const name = name.current!.value;
  //   // const surname = this.surname.current!.value;
  //   const userBirthday = handleBirthday(birthday);
  //   // const country = this.country.current!.value;
  //   const userGender = handleGender(gender);
  //   // const avatar = userAvatar.current.value;

  //   const newUser = { id, name, surname, userBirthday, country, userGender, avatar };

  //   if (name && surname && birthday && avatar) {
  //     console.log(newUser);
  //     // setUsers([...users, newUser]);
  //     resetForm();
  //     setModal();
  //   }

  //   validate();
  // };

  // const handleGender = (param: boolean | undefined): string => {
  //   return param ? 'Female' : 'Male';
  // };

  // const handleBirthday = (data: string): string => {
  //   return data.split('-').reverse().join('.');
  // };

  // const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const name = e.currentTarget.name;
  //   const value = e.currentTarget.value;
  //   console.log(name);
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'surname':
  //       setSurname(value);
  //       break;
  //     case 'birthday':
  //       setBirthday(value);
  //       break;
  //     case 'gender':
  //       setGender(!gender);
  //       break;
  //     case 'country':
  //       setCountry(value);
  //       break;
  //     default:
  //       break;
  //   }

  //   if (value) {
  //     setErrors({ ...errors, [name]: '' });
  //   }
  // };

  const handleAvatar = (e: React.FormEvent<HTMLInputElement>) => {
    // handleChange(e);
    console.log(e.currentTarget.files);
    const avatarName = e.currentTarget.value.split(`\\`).pop();
    // setAvatar(avatarName || '');
  };

  // const handleAgree = () => {
  //   setAgree(!agree);
  // };

  // const resetForm = () => {
  //   setName('');
  //   setSurname('');
  //   setBirthday('');
  //   setCountry('Russia');
  //   setGender(false);
  //   setAgree(false);
  //   setAvatar('');
  // };
  // const validate = () => {
  //   if (name === '') {
  //     setErrors({ ...errors, name: 'name' });
  //   }
  //   if (surname === '') {
  //     setErrors({ ...errors, surname: 'surname' });
  //   }

  //   if (birthday === '') {
  //     setErrors({ ...errors, birthday: 'birthday' });
  //   }

  //   if (avatar === '') {
  //     setErrors({ ...errors, avatar: 'avatar' });
  //   }
  // };

  // const setModal = () => {
  //   setIsModal(true);
  //   setTimeout(() => {
  //     setIsModal(false);
  //   }, 2000);
  // };

  return (
    <div className={style.usersPage}>
      {/* {isModal && (
        <div className={style.modal}>
          <h2 className={style.modal__title}>New user added</h2>
        </div>
      )} */}
      <h1 className={style.usersPage__title}>Users</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <Controller
          name="name"
          control={control}
          defaultValue={''}
          rules={{ required: true }}
          render={({ field }) => (
            <div className={style.form__group}>
              <label htmlFor="name">
                <p className={style.form__text}>Name:</p>
                <input {...field} className={style.form__input} />
              </label>
            </div>
          )}
        />

        <Controller
          name="surname"
          control={control}
          defaultValue={''}
          rules={{ required: true }}
          render={({ field }) => (
            <div className={style.form__group}>
              <label htmlFor="surname">
                <p className={style.form__text}>Surname:</p>
                <input {...field} className={style.form__input} />
              </label>
            </div>
          )}
        />

        <Controller
          name="birthday"
          control={control}
          defaultValue={''}
          rules={{ required: true }}
          render={({ field }) => (
            <div className={style.form__group}>
              <label htmlFor="birthday">
                <p className={style.form__text}>Birthday:</p>
                <input type="date" {...field} className={style.form__input} />
              </label>
            </div>
          )}
        />

        <Controller
          name="country"
          control={control}
          defaultValue={'Russia'}
          rules={{ required: true }}
          render={({ field }) => (
            <div className={style.form__group}>
              <label htmlFor="country">
                <p className={style.form__text}>Country:</p>
                <select {...field} className={style.form__input}>
                  <option value="Russia">Russia</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Ukraine">Ukraine</option>
                </select>
              </label>
            </div>
          )}
        />

        <div className={`${style.form__group} ${style.form__group_switch}`}>
          <p className={style.form__text}>Male</p>
          <label className={style.switch}>
            <input type="checkbox" {...register('gender')} className={style.switch__input} />
            <span className={style.switch__slider}></span>
          </label>
          <p className={style.form__text}>Female</p>
        </div>

        <div className={`${style.form__group} ${style.file}`}>
          <p className={`${style.form__text} ${style.file__text}`}>Choose a profile picture:</p>
          <input
            type="file"
            id="avatar"
            className={style.file__input}
            accept="image/png, image/jpeg"
            {...register('avatar', { required: true })}
            onChange={handleAvatar}
          />
          <label htmlFor="avatar" className={style.form__btn}>
            Add file
          </label>
        </div>

        <div className={style.form__group}>
          <label className={style.check}>
            <p className={style.form__text}>I gree</p>
            <input
              type="checkbox"
              {...register('agree', { required: true })}
              className={style.check__input}
            />
            <span className={style.check__box}></span>
          </label>
        </div>

        <div className={style.form__group}>
          <button
            className={style.form__btn}
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={!isAgree}
          >
            Submit
          </button>
        </div>
      </form>

      {/* {isModal && (
        <div className={style.modal}>
          <h2 className={style.modal__title}>New user added</h2>
        </div>
      )}
      
      <form className={style.form}>
        <h2 className={style.form__title}>Add new user</h2>
        <div className={style.form__group}>
          <label htmlFor="name">
            <p className={style.form__text}>Name:</p>

            <input
              className={style.form__input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          {errors.name && (
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
              value={surname}
              onChange={handleChange}
            />
          </label>
          {errors.surname && (
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
              onChange={handleChange}
              value={birthday}
            />
          </label>
          {errors.birthday && (
            <p className={`${style.form__text} ${style.form__text_error}`}>Choose a date</p>
          )}
        </div>

        <div className={style.form__group}>
          <p className={style.form__text}>Country:</p>
          <select
            className={style.form__input}
            value={country}
            onChange={handleChange}
            name="country"
          >
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="Ukraine">Ukraine</option>
          </select>
        </div>

        <div className={`${style.form__group} ${style.form__group_switch}`}>
          <p className={style.form__text}>Male</p>
          <label className={style.switch}>
            <input
              name="gender"
              type="checkbox"
              checked={gender}
              onChange={handleChange}
              className={style.switch__input}
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
            onChange={handleAvatar}
            ref={userAvatar}
          />
          <label htmlFor="avatar" className={style.form__btn}>
            {avatar ? avatar : 'Add file'}
          </label>
          {errors.avatar && (
            <p className={`${style.form__text} ${style.form__text_error}`}>Add avatar</p>
          )}
        </div>

        <div className={style.form__group}>
          <label className={style.check}>
            <p className={style.form__text}>I gree</p>
            <input
              className={style.check__input}
              type="checkbox"
              checked={agree}
              onChange={handleAgree}
            />
            <span className={style.check__box}></span>
          </label>
        </div>

        <div className={style.form__group}>
          <button
            className={style.form__btn}
            type="submit"
            onClick={handleSubmit}
            disabled={
              !agree ||
              errors.name != '' ||
              errors.surname != '' ||
              errors.birthday != '' ||
              errors.avatar != ''
            }
          >
            Submit
          </button>
        </div>
      </form>
      <ItemList users={users} /> */}
    </div>
  );
};
