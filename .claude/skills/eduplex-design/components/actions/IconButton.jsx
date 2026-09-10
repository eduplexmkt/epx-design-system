import React from 'react';

/** Interaction overlay opacity per WithInteraction variant. */
const INTERACTION = {
  light: { hover: 'var(--interaction-hover-light)', active: 'var(--interaction-active-light)' },
  normal: { hover: 'var(--interaction-hover-normal)', active: 'var(--interaction-active-normal)' },
  strong: { hover: 'var(--interaction-hover-strong)', active: 'var(--interaction-active-strong)' },
};

/** Legacy shorthands kept so existing `color="assistive"` call sites keep working. */
const COLOR_ALIASES = {
  normal: 'var(--semantic-label-normal)',
  assistive: 'var(--semantic-label-alternative)',
  primary: 'var(--semantic-primary-normal)',
};

/** `outlined`/`solid` carry a real 40/32px box; `normal`/`background` are glyph-sized (24px default). */
const resolveSize = (variant, size) => {
  if (variant === 'outlined' || variant === 'solid') return size ?? 'medium';
  return typeof size === 'number' ? size : 24;
};

const toPx = (size) => (size === 'medium' ? 40 : size === 'small' ? 32 : size);

/** Boxed variants pad 10/7px at the two named sizes and 6px at any numeric size. */
const boxedPadding = (size) => (size === 'medium' ? 10 : size === 'small' ? 7 : 6);

const getInteractionVariant = (variant, alternative) => {
  switch (variant) {
    case 'solid':
      return 'strong';
    case 'background':
      return alternative ? 'normal' : 'light';
    default:
      return 'light';
  }
};

/** The interaction circle reaches past `normal`'s glyph and `background`'s pill. */
const getInteractionHeight = (variant) => {
  switch (variant) {
    case 'outlined':
    case 'solid':
      return '100%';
    case 'background':
      return 'calc(100% + 8px)';
    default:
      return 'calc(100% + 16px)';
  }
};

const alpha = (token, percent) => `color-mix(in srgb, ${token} ${percent}%, transparent)`;

/**
 * An icon action in four shapes: `normal` (bare glyph), `background` (frosted pill),
 * `outlined` (hairline box) and `solid` (filled primary box). Always give it an
 * `aria-label`.
 */
export function IconButton({
  variant = 'normal',
  size,
  color,
  interactionColor = 'var(--semantic-label-normal)',
  alternative = false,
  disabled = false,
  disableInteraction = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const resolved = resolveSize(variant, size);
  const px = toPx(resolved);
  const boxed = variant === 'outlined' || variant === 'solid';
  const padding = boxed ? boxedPadding(resolved) : variant === 'background' ? 2 : 0;
  const fontSize = boxed ? px - padding * 2 : variant === 'background' ? px - 4 : px;

  const tint = COLOR_ALIASES[color] || color;
  const interaction = INTERACTION[getInteractionVariant(variant, alternative)];
  const overlayOn = !disabled && !disableInteraction;
  const overlay = !overlayOn ? 0 : press ? interaction.active : hover ? interaction.hover : 0;
  // `normal` is the only variant whose overlay grows into place on hover.
  const overlayScale = variant === 'normal' && !hover ? 0.95 : 1;

  const paint = () => {
    switch (variant) {
      case 'solid':
        return disabled
          ? { color: 'var(--semantic-label-disable)', backgroundColor: 'var(--semantic-fill-normal)', backdropFilter: 'blur(32px)' }
          : { color: tint || 'var(--semantic-static-white)', backgroundColor: 'var(--semantic-primary-normal)' };
      case 'outlined':
        return {
          color: disabled ? 'var(--semantic-label-disable)' : tint || 'var(--semantic-label-normal)',
          backgroundColor: disabled ? 'var(--semantic-background-normal-normal)' : 'transparent',
          boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)',
        };
      case 'background':
        return {
          backgroundColor: 'transparent',
          color: disabled
            ? alpha('var(--atomic-coolNeutral-50)', 22)
            : tint ||
              (alternative
                ? alpha('var(--semantic-static-white)', 88)
                : alpha('var(--semantic-static-black)', 43)),
        };
      default:
        return {
          backgroundColor: 'transparent',
          color: disabled ? 'var(--semantic-label-disable)' : tint || 'var(--semantic-label-normal)',
        };
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
      data-wds="icon-button"
      data-variant={variant}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onPointerDown={() => setPress(true)}
      onPointerUp={() => setPress(false)}
      {...rest}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        border: 'none',
        borderRadius: 9999,
        padding,
        width: boxed ? px : 'fit-content',
        height: boxed ? px : 'fit-content',
        fontSize,
        lineHeight: 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        pointerEvents: disabled ? 'none' : undefined,
        transition: 'var(--transition-color)',
        ...paint(),
        ...style,
      }}
    >
      {variant === 'background' && (
        <span
          data-role="icon-button-background"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',
            height: 'calc(100% + 8px)',
            aspectRatio: '1 / 1',
            borderRadius: 'inherit',
            backgroundColor: disabled
              ? 'var(--semantic-fill-alternative)'
              : alternative
                ? alpha('var(--atomic-coolNeutral-30)', 61)
                : alpha('var(--semantic-static-white)', 52),
            backdropFilter: disabled || alternative ? undefined : 'blur(32px) saturate(150%) brightness(150%)',
          }}
        />
      )}
      {variant === 'background' && !alternative && !disabled && (
        <span
          data-role="icon-button-background-blend"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',
            height: 'calc(100% + 8px)',
            aspectRatio: '1 / 1',
            borderRadius: 'inherit',
            backgroundColor: alpha('var(--semantic-static-black)', 5),
          }}
        />
      )}
      {overlayOn && (
        <span
          data-wds="with-interaction"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${overlayScale})`,
            width: 'auto',
            height: getInteractionHeight(variant),
            aspectRatio: '1 / 1',
            borderRadius: 'inherit',
            backgroundColor: interactionColor,
            opacity: overlay,
            transition: 'opacity 0.15s ease, transform 0.15s ease',
            pointerEvents: 'none',
          }}
        />
      )}
      {/* Boxed variants let the glyph fill the padded box; the bare ones let it
          keep its own size, which is what makes the button fit-content. */}
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: boxed ? '100%' : undefined,
          height: boxed ? '100%' : undefined,
        }}
      >
        {children}
      </span>
    </button>
  );
}
