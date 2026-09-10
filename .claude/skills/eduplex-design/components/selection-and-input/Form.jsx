import React, { Children, cloneElement, createContext, isValidElement, useContext, useId } from 'react';

const FormFieldContext = createContext(null);

function useFormField() {
  const ctx = useContext(FormFieldContext);
  const id = ctx ? ctx.id : '';
  return {
    id,
    formLabelId: `${id}-form-label`,
    formFieldId: `${id}-form-field`,
    formMessageId: `${id}-form-field-message`,
    formErrorMessageId: `${id}-form-field-error-message`,
  };
}

/** One labelled row of a form. Stacks label, control and messages in a column
 * with an 8px gap, and hands every child the same generated id. */
export function FormField({ children, style, ...rest }) {
  const id = useId();
  return (
    <FormFieldContext.Provider value={{ id }}>
      <div data-wds="form-field" {...rest} style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
        {children}
      </div>
    </FormFieldContext.Provider>
  );
}

/** Label wired to the field's control via htmlFor. */
export function FormLabel({ required = false, display = 'inline-block', children, style, ...rest }) {
  const { formLabelId, formFieldId } = useFormField();
  return (
    <label
      data-wds="form-label"
      id={formLabelId}
      htmlFor={formFieldId}
      {...rest}
      style={{
        display,
        color: 'var(--semantic-label-neutral)',
        fontFamily: 'var(--font-family-core)',
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: '0.0145em',
        fontWeight: 600,
        ...style,
      }}
    >
      {children}
      {required && (
        <span
          aria-hidden="true"
          style={{ display: 'inline-block', marginLeft: 4, color: 'var(--semantic-status-negative)', fontSize: 14, lineHeight: '20px', letterSpacing: '0.0145em', fontWeight: 500 }}
        >
          *
        </span>
      )}
    </label>
  );
}

/** Renders nothing of its own — it forwards the field's id and aria wiring onto
 * the single control passed as its child. */
export function FormControl({ children, ...rest }) {
  const { formFieldId, formLabelId, formMessageId, formErrorMessageId } = useFormField();
  const child = Children.only(children);
  if (!isValidElement(child)) return child;
  return cloneElement(child, {
    id: formFieldId,
    'aria-describedby': `${formMessageId} ${formErrorMessageId}`,
    'aria-labelledby': formLabelId,
    ...rest,
  });
}

/** Neutral helper text under the control. Renders nothing when empty. */
export function FormMessage({ children, style, ...rest }) {
  const { formMessageId } = useFormField();
  if (!children) return null;
  return (
    <p
      data-wds="form-message"
      id={formMessageId}
      {...rest}
      style={{
        margin: 0,
        color: 'var(--semantic-label-alternative)',
        fontFamily: 'var(--font-family-core)',
        fontSize: 13,
        lineHeight: '18px',
        letterSpacing: '0.0194em',
        fontWeight: 400,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

/** Error text under the control. Same type as FormMessage, negative colour. */
export function FormErrorMessage({ children, style, ...rest }) {
  const { formErrorMessageId } = useFormField();
  if (!children) return null;
  return (
    <p
      data-wds="form-error-message"
      id={formErrorMessageId}
      {...rest}
      style={{
        margin: 0,
        color: 'var(--semantic-status-negative)',
        fontFamily: 'var(--font-family-core)',
        fontSize: 13,
        lineHeight: '18px',
        letterSpacing: '0.0194em',
        fontWeight: 400,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

/** Plain <form> wrapper. The system has no styled form element — the visual
 * rules live in FormField and its parts — but a file-level `Form` export keeps
 * the component name and the filename in step, which some bundlers require. */
export function Form({ children, style, ...rest }) {
  return (
    <form {...rest} style={style}>
      {children}
    </form>
  );
}
