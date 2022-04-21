import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { User } from '../../types';
import style from './Form.module.scss';

type FormInputs = {
  name: string;
  surname: string;
  birthday: string;
  country: string;
  gender: boolean;
  agree: boolean;
  avatar: FileList;
};

interface FormProps {
  addUser: (data: any) => void;
}

export const Form = (props: FormProps) => {
  const { addUser } = props;
  const [avatar, setAvatar] = useState('');
  const [modal, setModal] = useState(false);

  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const { name, surname, country } = data;
    const birthday = handleBirthday(data.birthday);
    const gender = handleGender(data.gender);
    const avatar = data.avatar[0];
    const newUser = { name, surname, birthday, country, gender, avatar };
    addUser(newUser);
    showModal();
    reset();
  };

  const isAgree = watch('agree');

  const handleGender = (param: boolean | undefined): string => {
    return param ? 'Female' : 'Male';
  };

  const handleBirthday = (data: string): string => {
    return data.split('-').reverse().join('.');
  };

  const handleAvatar = (e: React.FormEvent<HTMLInputElement>) => {
    const avatarName = e.currentTarget.value.split(`\\`).pop();
    setAvatar(avatarName || '');
  };

  const showModal = () => {
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 2000);
  };

  return (
    <>
      {modal && (
        <div className={style.modal}>
          <h2 className={style.modal__title}>New user added</h2>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.form__group}>
          <label htmlFor="name">
            <p className={style.form__text}>Name:</p>
            <input
              type="text"
              {...register('name', { required: true })}
              className={style.form__input}
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
            <input {...register('surname', { required: true })} className={style.form__input} />
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
              type="date"
              {...register('birthday', { required: true })}
              className={style.form__input}
            />
          </label>
          {errors.birthday && (
            <p className={`${style.form__text} ${style.form__text_error}`}>Choose a date</p>
          )}
        </div>

        <div className={style.form__group}>
          <label htmlFor="country">
            <p className={style.form__text}>Country:</p>
            <select {...register('country')} className={style.form__input}>
              <option value="Russia">Russia</option>
              <option value="Belarus">Belarus</option>
              <option value="Ukraine">Ukraine</option>
            </select>
          </label>
        </div>

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
            id="avatar"
            type="file"
            className={style.file__input}
            accept=".png, .jpeg, .jpg, .svg"
            {...register('avatar', { required: true })}
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
              type="checkbox"
              {...register('agree', { required: true })}
              className={style.check__input}
            />
            <span className={style.check__box}></span>
          </label>
        </div>

        <div className={style.form__group}>
          <button className={style.form__btn} type="submit" disabled={!isAgree}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
