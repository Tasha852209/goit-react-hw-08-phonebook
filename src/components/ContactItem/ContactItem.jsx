import { StyledSpan } from 'components/Navigation/Navigation.styled';
import { StyledButton } from 'components/UserMenu/UserMenu.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id}>
      <StyledSpan>{name}:</StyledSpan>
      <StyledSpan> {number}</StyledSpan>
      <StyledButton
        className="delete"
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </StyledButton>
    </li>
  );
};
