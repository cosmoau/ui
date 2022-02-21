import { styled } from '../../stitches.config';

export default function InputStyles() {
  const CheckboxWrapper = styled('div', {
    whiteSpace: 'nowrap',
    display: 'table-row-group',

    variants: {
      disabled: {
        false: {
          opacity: 1,
          '*': {
            cursor: 'pointer',
          },
          svg: {
            color: '$navy100',
          },
        },
        true: {
          opacity: 0.5,
          '*': {
            cursor: 'not-allowed',
          },
          svg: {
            color: '$navy100',
          },
        },
      },
    },
  });

  const CheckboxLabelWrapper = styled('label', {
    display: 'table-cell',
    verticalAlign: 'middle',
    paddingLeft: '$3',

    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',

    variants: {
      size: {
        1: {
          ft: '$h5',
        },
        2: {
          ft: '$h6',
        },
      },
    },
  });

  const CheckboxTooltipWrapper = styled('div', {
    verticalAlign: 'middle',
    alignContent: 'center',
    display: 'table-cell',

    svg: {
      marginLeft: '$3',
      cursor: 'pointer',
      verticalAlign: 'middle !important',
      opacity: 0.5,
      transition: '$1',

      '&:hover': {
        opacity: 1,
      },
    },
  });

  const FieldWrapper = styled('div', {
    display: 'inline-flex',
    position: 'relative',
    height: '3.5rem',
    alignContent: 'center',
    borderRadius: '$2',
    backgroundColor: '$baseContrast100',
    border: '0.1rem solid $border200',
    paddingTop: '$2',
    paddingBottom: '$2',
    paddingLeft: 'calc($5 / 1.5)',
    paddingRight: 'calc($5 / 1.5)',
    boxShadow: '$1',
    transition: '$1',
    '&:hover': {
      boxShadow: '$2',
      border: '0.1rem solid $border100',
    },
    '&:focus-within': {
      boxShadow: '$2',
      border: '0.1rem solid $border100',
    },
    '&:active': {
      boxShadow: '$2',
      border: '0.1rem solid $border100',
    },

    '*': {
      verticalAlign: 'middle',
    },
  });

  const FieldIconWrapper = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'auto',
    height: '100%',
    marginRight: '$3',
    position: 'relative',
  });

  const FieldInputWrapper = styled('input', {
    appearance: 'none',
    display: 'inline-flex',
    fontSize: '16px !important',
    fontFamily: '$body',
    margin: 0,
    outline: 'none',
    padding: 0,
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    border: 0,
    backgroundColor: 'transparent',
    color: '$base100',
    fontWeight: 'normal',
    textAlign: 'left',
    transition: '$1',
    boxSizing: 'border-box',
    alignItems: 'center',
    verticalAlign: 'middle',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
    variants: {
      width: {
        1: {
          width: '12rem',
        },
        2: {
          width: '18rem',
        },
        3: {
          width: '26rem',
        },
        4: {
          width: '34rem',
        },
        5: {
          width: '100%',
        },
      },
    },
  });

  const FieldFunctionWrapper = styled('div', {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'auto',
    height: '100%',
    position: 'relative',
    verticalAlign: 'middle',
    marginLeft: '$3',
    '*': {
      verticalAlign: 'middle',
    },
    button: {
      marginLeft: '$2',
      ft: '$h6',
      lineHeight: '$1',
      paddingTop: '$1',
      paddingBottom: '$1',
      paddingLeft: '$3',
      paddingRight: '$3',
    },
    svg: {
      height: '1.85rem',
      width: 'auto',
    },
  });

  const TextareaWrapper = styled('div', {
    display: 'inline-flex',
    position: 'relative',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '$2',
    backgroundColor: '$baseContrast100 !important',
    border: '0.1rem solid $border100',
    padding: 'calc($5 / 1.5)',
    boxShadow: '$1',
    transition: '$1',

    '&:hover': {
      boxShadow: '$2',
      border: '0.1rem solid $border100',
    },
    '&:focus-within': {
      boxShadow: '$2',
      border: '0.1rem solid $border100',
    },
    '&:active': {
      boxShadow: '$2',
      border: '0.1rem solid $border100',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  });

  const TextareaInputWrapper = styled('textarea', {
    display: 'block',
    backgroundColor: 'transparent',
    color: '$base100',
    appearance: 'none',
    width: '100%',
    border: '0',
    margin: '0 auto',
    fontSize: '16px !important',
    '&:after': {
      clear: 'both',
      content: '""',
    },
  });

  const TextareaFunctionWrapper = styled('div', {
    display: 'block',
    opacity: 0.4,
    lineHeight: 0,
    '&:after': {
      clear: 'both',
      content: '""',
    },
  });

  return {
    CheckboxWrapper,
    CheckboxLabelWrapper,
    CheckboxTooltipWrapper,
    FieldWrapper,
    FieldIconWrapper,
    FieldInputWrapper,
    FieldFunctionWrapper,
    TextareaWrapper,
    TextareaInputWrapper,
    TextareaFunctionWrapper,
  };
}
