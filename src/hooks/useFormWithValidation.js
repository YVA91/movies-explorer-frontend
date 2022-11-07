import { useState, useCallback, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function useFormWithValidation() {
  const currentUser = useContext(CurrentUserContext);
  const [values, setValues] = useState({name: currentUser.name, email: currentUser.email});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'name' && target.validity.patternMismatch) {
      target.setCustomValidity('Модет содержать только латиницу, кириллицу, пробел или дефис. Не может начинаться с пробела')
    } else {
      target.setCustomValidity('');
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );



  return { values, handleChange, errors, isValid, resetForm, setValues };
}