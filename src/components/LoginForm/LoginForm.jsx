import { Notify } from 'notiflix';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/AuthSlice';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <>
      <p>Login</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Email:</span>
          <input {...register('email', { required: true })} type="email" />
          {errors.email && onSubmit && Notify.failure('This field is required')}
        </label>
        <label>
          <span>Password:</span>
          <input
            {...register('password', { required: true, minLength: 7 })}
            type="password"
          />
          {errors.password &&
            onSubmit &&
            Notify.failure('This field is required with minimum 7 characters')}
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
