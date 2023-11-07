import { Notify } from 'notiflix';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/AuthSlice';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <>
      <p>Register</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Name:</span>
          <input
            {...register('name', { required: true })}
            type="text"
            placeholder="name or/and surname"
          />
          {errors.name && onSubmit && Notify.failure('This field is required')}
        </label>
        <label>
          <span>Email:</span>
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="example@mail.com"
          />
          {errors.email && onSubmit && Notify.failure('This field is required')}
        </label>
        <label>
          <span>Password:</span>
          <input
            {...register('password', { required: true, minLength: 7 })}
            type="password"
            placeholder="minimum 7 characters"
          />
          {errors.password &&
            onSubmit &&
            Notify.failure('This field is required with 7 characters')}
        </label>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
