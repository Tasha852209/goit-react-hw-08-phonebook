import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledP,
} from 'components/RegisterForm/RegisterForm.styled';
import { StyledButton } from 'components/UserMenu/UserMenu.styled';
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
    dispatch(loginThunk(data))
      .unwrap()
      .then(
        ({ user }) => Notify.success(`Welcome to your PhoneBook ${user.name}`),
        reset()
      )
      .catch(err => {
        Notify.failure('Please write the correct Email or Password');
      });
  };

  return (
    <>
      <StyledP>Login</StyledP>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel>
          <span>Email:</span>
          <StyledInput
            {...register('email', { required: true })}
            type="email"
          />
          {errors.email && onSubmit && Notify.failure('This field is required')}
        </StyledLabel>
        <StyledLabel>
          <span>Password:</span>
          <StyledInput
            {...register('password', { required: true, minLength: 7 })}
            type="password"
          />
          {errors.password &&
            onSubmit &&
            Notify.failure('This field is required with minimum 7 characters')}
        </StyledLabel>

        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </>
  );
};

export default LoginForm;
