import { StyledSpan } from 'components/Navigation/Navigation.styled';
import { StyledButton } from 'components/UserMenu/UserMenu.styled';
import { ReactComponent as IconDelete } from 'images/delete-icon.svg';

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
        <IconDelete />
      </StyledButton>
    </li>
  );
};
