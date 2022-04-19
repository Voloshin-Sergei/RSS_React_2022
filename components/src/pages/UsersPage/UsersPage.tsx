import React, { useState } from 'react';
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
  avatar: FileList;
};

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [avatar, setAvatar] = useState('');
  const [modal, setModal] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    // console.log('data >>>>', data);
    const { name, surname, country, avatar } = data;
    const id = users.length + 1;
    const birthday = handleBirthday(data.birthday);
    const gender = handleGender(data.gender);

    const newUser = { id, name, surname, birthday, country, gender, avatar };

    setUsers([...users, newUser]);
    // setAvatar('');
    showModal();
    reset();
  };

  const isAgree = watch('agree');
  const pic = watch('avatar');
  console.log(pic);

  const handleGender = (param: boolean | undefined): string => {
    return param ? 'Female' : 'Male';
  };

  const handleBirthday = (data: string): string => {
    return data.split('-').reverse().join('.');
  };

  const handleAvatar = (e: React.FormEvent<HTMLInputElement>) => {
    console.log('handleAvatar', e.currentTarget.files);
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
    <div className={style.usersPage}>
      {modal && (
        <div className={style.modal}>
          <h2 className={style.modal__title}>New user added</h2>
        </div>
      )}
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
              {errors.name && (
                <p className={`${style.form__text} ${style.form__text_error}`}>
                  This field must not be empty
                </p>
              )}
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
              {errors.surname && (
                <p className={`${style.form__text} ${style.form__text_error}`}>
                  This field must not be empty
                </p>
              )}
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
              {errors.birthday && (
                <p className={`${style.form__text} ${style.form__text_error}`}>Choose a date</p>
              )}
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

        <Controller
          name="gender"
          control={control}
          defaultValue={false}
          rules={{ required: false }}
          render={({ field }) => (
            <div className={`${style.form__group} ${style.form__group_switch}`}>
              <p className={style.form__text}>Male</p>
              <label className={style.switch}>
                <input type="checkbox" {...register('gender')} className={style.switch__input} />
                <span className={style.switch__slider}></span>
              </label>
              <p className={style.form__text}>Female</p>
            </div>
          )}
        />

        <Controller
          name="avatar"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div className={`${style.form__group} ${style.file}`}>
              <p className={`${style.form__text} ${style.file__text}`}>Choose a profile picture:</p>

              <input
                id="avatar"
                type="file"
                className={style.file__input}
                accept="image/png, image/jpeg"
                {...register('avatar', {
                  onChange: (e) => handleAvatar(e),
                })}
              />
              <label htmlFor="avatar" className={style.form__btn}>
                {avatar ? avatar : 'Add file'}
              </label>
              {errors.avatar && (
                <p className={`${style.form__text} ${style.form__text_error}`}>Add avatar</p>
              )}
            </div>
          )}
        />

        <Controller
          name="agree"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={({ field }) => (
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
          )}
        />

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
      <ItemList users={users} />
    </div>
  );
};
