import { render, screen, fireEvent, getByAltText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { debug } from 'util';
import { Form } from './Form';

describe('Form', () => {
  const onSubmit = jest.fn();
  const addUser = jest.fn();

  describe('render form elements', () => {
    it('Form snapshot', () => {
      const formComponent = render(<Form addUser={addUser} />);
      expect(formComponent).toMatchSnapshot();
    });

    it('render Form elements', () => {
      render(<Form addUser={addUser} />);
      expect(screen.getByTestId('name')).toBeInTheDocument();
      expect(screen.getByTestId('surname')).toBeInTheDocument();
      expect(screen.getByTestId('country')).toBeInTheDocument();
      expect(screen.getByTestId('gender')).toBeInTheDocument();
      expect(screen.getByTestId('avatar')).toBeInTheDocument();
      expect(screen.getByTestId('agree')).toBeInTheDocument();
      expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
      expect(screen.getByTestId('submit-btn')).toBeDisabled();
    });
  });

  describe('elements shall be changed', () => {
    it('value input "Name" element may be changed', () => {
      render(<Form addUser={addUser} />);

      const input = screen.getByTestId<HTMLInputElement>('name');
      expect(input.value).toBe('');

      fireEvent.change(input, {
        target: { value: 'test value' },
      });
      expect(input.value).toBe('test value');
    });

    it('value input "Surname" element may be changed', () => {
      render(<Form addUser={addUser} />);

      const input = screen.getByTestId<HTMLInputElement>('surname');
      expect(input.value).toBe('');

      fireEvent.change(input, {
        target: { value: 'test value' },
      });
      expect(input.value).toBe('test value');
    });

    it('value input "Birthday" element may be changed', () => {
      render(<Form addUser={addUser} />);

      const input = screen.getByTestId<HTMLInputElement>('date');
      expect(input.value).toBe('');

      fireEvent.change(input, {
        target: { value: '2022-04-25' },
      });
      expect(input.value).toBe('2022-04-25');
    });

    it('value select "Country" element may be changed', () => {
      render(<Form addUser={addUser} />);

      const select = screen.getByTestId<HTMLSelectElement>('country');
      expect(select.value).toBe('Russia');

      fireEvent.change(select, {
        target: { value: 'Belarus' },
      });
      expect(select.value).toBe('Belarus');
    });

    it('value input "Gender" element may be changed', () => {
      render(<Form addUser={addUser} />);

      const input = screen.getByTestId<HTMLInputElement>('gender');
      expect(input.checked).toBe(false);

      fireEvent.change(input, {
        target: { checked: true },
      });
      expect(input.checked).toBe(true);
    });

    it('Upload Files', () => {
      render(<Form addUser={addUser} />);
      const file = [new File(['hello'], 'hello.png', { type: 'image/png' })];
      const input = screen.getByTestId<HTMLInputElement>('avatar');

      userEvent.upload(input, file);

      expect(input.files).toHaveLength(1);
      expect(input.files[0]).toStrictEqual(file[0]);
    });
  });

  describe('with invalid inputs', () => {
    it("doesn't call the onSubmit function", async () => {
      const { getByTestId } = render(<Form addUser={addUser} />);

      await act(async () => {
        fireEvent.change(getByTestId('agree'), { target: { checked: true } });
        fireEvent.change(getByTestId('submit-btn'), { target: { disabled: false } });
      });

      await act(async () => {
        fireEvent.click(getByTestId('submit-btn'));
      });

      expect(getByTestId('submit-btn')).not.toBeDisabled();
      expect(onSubmit).not.toBeCalled();
    });

    it('render errors', async () => {
      const { getByTestId } = render(<Form addUser={addUser} />);

      await act(async () => {
        fireEvent.change(getByTestId('agree'), { target: { checked: true } });
        fireEvent.change(getByTestId('submit-btn'), { target: { disabled: false } });
      });

      await act(async () => {
        fireEvent.click(getByTestId('submit-btn'));
      });

      expect(screen.getAllByText('This field must not be empty').length).toEqual(2);
      expect(screen.getByText('Choose a date')).toBeInTheDocument();
      expect(screen.getByText('Add avatar')).toBeInTheDocument();
    });
  });

  describe('with valid inputs', () => {
    it('shall call the onSubmit function', async () => {
      const { getByTestId } = render(<Form addUser={addUser} />);
      const file = [new File(['hello'], 'hello.png', { type: 'image/png' })];

      await act(async () => {
        fireEvent.change(getByTestId('agree'), { target: { checked: true } });
        fireEvent.change(getByTestId('submit-btn'), { target: { disabled: false } });
        fireEvent.change(getByTestId('name'), {
          target: { value: 'test value' },
        });
        fireEvent.change(getByTestId('surname'), {
          target: { value: 'test value' },
        });
        fireEvent.change(getByTestId('date'), {
          target: { value: '2022-04-25' },
        });
        userEvent.upload(getByTestId('avatar'), file);
      });

      await act(async () => {
        userEvent.click(getByTestId('submit-btn'));
      });

      await (() => {
        expect(onSubmit).toBeCalled();
        expect(screen.getByText('New user added')).toBeInTheDocument();
      });
    });
  });
});
