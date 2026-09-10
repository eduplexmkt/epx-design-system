import React, { useRef, useState } from 'react';

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const percent = (value, min, max) => ((value - min) / (max - min)) * 100;

/** Range control. One or more 20px thumbs on a 4px track, sized by the values
 * array — pass two values for a range, one for a single point. */
export function Slider({
  title,
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = [min],
  disabled = false,
  onValueChange,
  onValueChangeComplete,
  name,
  style,
  ...rest
}) {
  const [inner, setInner] = useState(defaultValue);
  const values = value ?? inner;
  const trackRef = useRef(null);
  const dragging = useRef(-1);

  const commit = (next, done) => {
    if (value === undefined) setInner(next);
    onValueChange?.(next);
    if (done) onValueChangeComplete?.(next);
  };

  const setAt = (index, raw, done) => {
    const snapped = clamp(Math.round((raw - min) / step) * step + min, min, max);
    const next = [...values];
    next[index] = snapped;
    next.sort((a, b) => a - b);
    if (next.toString() === values.toString() && !done) return;
    commit(next, done);
  };

  const valueFromPointer = (clientX) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return min;
    return min + ((clientX - rect.left) / rect.width) * (max - min);
  };

  const closestIndex = (v) => {
    let best = 0;
    values.forEach((cur, i) => {
      if (Math.abs(cur - v) < Math.abs(values[best] - v)) best = i;
    });
    return best;
  };

  const lo = Math.min(...values);
  const hi = Math.max(...values);

  return (
    <span data-wds="slider" {...rest} style={{ display: 'flex', flexDirection: 'column', width: '100%', ...style }}>
      {title !== undefined && (
        <span
          data-role="slider-title"
          style={{
            display: 'block',
            margin: '0 auto 32px auto',
            textAlign: 'center',
            color: disabled ? 'var(--semantic-label-disable)' : 'var(--semantic-label-normal)',
            fontFamily: 'var(--font-family-core)',
            fontSize: 17,
            lineHeight: '24px',
            letterSpacing: '0em',
            fontWeight: 600,
          }}
        >
          {typeof title === 'function' ? title({ values, disabled, min, max }) : title}
        </span>
      )}

      <span
        ref={trackRef}
        data-role="slider-progress-wrapper"
        style={{ display: 'block', position: 'relative', padding: 8, borderRadius: 1000, cursor: disabled ? 'initial' : 'pointer' }}
        onPointerDown={(event) => {
          if (disabled) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          const raw = valueFromPointer(event.clientX);
          dragging.current = closestIndex(raw);
          setAt(dragging.current, raw);
        }}
        onPointerMove={(event) => {
          if (disabled || dragging.current < 0) return;
          setAt(dragging.current, valueFromPointer(event.clientX));
        }}
        onPointerUp={(event) => {
          if (disabled || dragging.current < 0) return;
          event.currentTarget.releasePointerCapture(event.pointerId);
          setAt(dragging.current, valueFromPointer(event.clientX), true);
          dragging.current = -1;
        }}
      >
        <span
          data-role="slider-progress-range"
          style={{
            display: 'block',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            height: 4,
            borderRadius: 'inherit',
            backgroundColor: disabled ? 'var(--semantic-interaction-disable)' : 'var(--semantic-fill-strong)',
          }}
        >
          <span
            data-role="slider-progress"
            style={{
              position: 'absolute',
              height: '100%',
              borderRadius: 'inherit',
              backgroundColor: disabled ? 'var(--semantic-interaction-disable)' : 'var(--semantic-primary-normal)',
              left: `${values.length > 1 ? percent(lo, min, max) : 0}%`,
              right: `${100 - percent(hi, min, max)}%`,
            }}
          />
        </span>

        {values.map((v, index) => (
          <SliderThumb
            key={index}
            value={v}
            min={min}
            max={max}
            step={step}
            name={name ? (values.length > 1 ? `${name}[]` : name) : undefined}
            disabled={disabled}
            onStep={(delta, done) => setAt(index, v + delta, done)}
            onJump={(target, done) => setAt(index, target, done)}
          />
        ))}
      </span>

      {label !== undefined && (
        <span data-role="slider-label-wrapper" style={{ display: 'block', position: 'relative', height: 20, marginTop: 8 }}>
          {values.map((v, index) => {
            const rendered = typeof label === 'function' ? label({ value: v, index, min, max, disabled }) : label;
            if (!rendered) return null;
            const p = percent(v, min, max);
            return (
              <span
                key={index}
                data-role="slider-label"
                style={{
                  display: 'inline-block',
                  position: 'absolute',
                  width: 'max-content',
                  left: `${p}%`,
                  transform: `translateX(-${p}%)`,
                  color: disabled ? 'var(--semantic-label-disable)' : 'var(--semantic-label-normal)',
                  fontFamily: 'var(--font-family-core)',
                  fontSize: 14,
                  lineHeight: '20px',
                  letterSpacing: '0.0145em',
                  fontWeight: 500,
                }}
              >
                {rendered}
              </span>
            );
          })}
        </span>
      )}
    </span>
  );
}

function SliderThumb({ value, min, max, step, name, disabled, onStep, onJump }) {
  const [halo, setHalo] = useState(false);
  const p = percent(value, min, max);

  return (
    <span
      role="slider"
      data-role="slider-thumb"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onMouseEnter={() => setHalo(true)}
      onMouseLeave={() => setHalo(false)}
      onFocus={() => setHalo(true)}
      onBlur={() => setHalo(false)}
      onKeyDown={(event) => {
        if (disabled) return;
        if (event.key === 'Home' || event.key === 'End') {
          event.preventDefault();
          onJump(event.key === 'Home' ? min : max, true);
          return;
        }
        const back = ['ArrowDown', 'ArrowLeft', 'PageDown'].includes(event.key);
        const forward = ['ArrowUp', 'ArrowRight', 'PageUp'].includes(event.key);
        if (!back && !forward) return;
        event.preventDefault();
        // Page keys and shift-arrows move ten steps at a time.
        const multiplier = event.key.startsWith('Page') || event.shiftKey ? 10 : 1;
        onStep((back ? -1 : 1) * step * multiplier, true);
      }}
      style={{
        display: 'block',
        position: 'absolute',
        top: 0,
        width: 20,
        height: 20,
        borderRadius: 9999,
        backgroundColor: disabled ? 'var(--semantic-interaction-disable)' : 'var(--semantic-primary-normal)',
        boxShadow: '0 0 0 2px var(--semantic-background-normal-normal)',
        outline: 'none',
        pointerEvents: disabled ? 'none' : undefined,
        cursor: disabled ? 'initial' : 'pointer',
        left: `${p}%`,
        transform: `translateX(-${p}%)`,
      }}
    >
      <span
        data-role="slider-thumb-interaction"
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'calc(100% + 12px)',
          height: 'calc(100% + 12px)',
          borderRadius: 'inherit',
          backgroundColor: 'var(--semantic-primary-normal)',
          opacity: disabled || !halo ? 0 : 0.075,
          transition: 'opacity 0.15s ease',
        }}
      />
      {name && <input type="hidden" name={name} value={value} readOnly />}
    </span>
  );
}
