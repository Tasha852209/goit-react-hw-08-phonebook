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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Name:</span>
        <input {...register('name', { required: true })} type="text" />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        <span>Email:</span>
        <input
          {...register('email', { required: true })}
          type="email"
          placeholder="example@mail.com"
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        <span>Password:</span>
        <input
          {...register('password', { required: true, minLength: 7 })}
          type="password"
          placeholder="minimum 7 characters"
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
