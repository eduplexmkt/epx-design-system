/* @ds-bundle: {"format":4,"namespace":"MontageDesignSystem_4afdc8","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Chip","sourcePath":"components/actions/Chip.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"TextButton","sourcePath":"components/actions/TextButton.jsx"},{"name":"Avatar","sourcePath":"components/contents/Avatar.jsx"},{"name":"Card","sourcePath":"components/contents/Card.jsx"},{"name":"ContentBadge","sourcePath":"components/contents/ContentBadge.jsx"},{"name":"Divider","sourcePath":"components/contents/Divider.jsx"},{"name":"Skeleton","sourcePath":"components/contents/Skeleton.jsx"},{"name":"SectionMessage","sourcePath":"components/feedback/SectionMessage.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Icon","sourcePath":"components/foundation/Icon.jsx"},{"name":"BottomNavigation","sourcePath":"components/navigations/BottomNavigation.jsx"},{"name":"Tab","sourcePath":"components/navigations/Tab.jsx"},{"name":"TopNavigation","sourcePath":"components/navigations/TopNavigation.jsx"},{"name":"Checkbox","sourcePath":"components/selection-and-input/Checkbox.jsx"},{"name":"RadioGroup","sourcePath":"components/selection-and-input/RadioGroup.jsx"},{"name":"SearchField","sourcePath":"components/selection-and-input/SearchField.jsx"},{"name":"SegmentedControl","sourcePath":"components/selection-and-input/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/selection-and-input/Select.jsx"},{"name":"Switch","sourcePath":"components/selection-and-input/Switch.jsx"},{"name":"TextField","sourcePath":"components/selection-and-input/TextField.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"acd65c5355d0","components/actions/Chip.jsx":"a12236d35f81","components/actions/IconButton.jsx":"d2448fadfab3","components/actions/TextButton.jsx":"6d9868fb97a4","components/contents/Avatar.jsx":"20b824176f9a","components/contents/Card.jsx":"561572c1a557","components/contents/ContentBadge.jsx":"6fbc92eb51c8","components/contents/Divider.jsx":"7e79332a53f9","components/contents/Skeleton.jsx":"444db763af7b","components/feedback/SectionMessage.jsx":"feea7383687b","components/feedback/Toast.jsx":"0cb140c958d2","components/feedback/Tooltip.jsx":"95f32dd404d5","components/foundation/Icon.jsx":"57d7eacd71ad","components/navigations/BottomNavigation.jsx":"42f95df25f0b","components/navigations/Tab.jsx":"0764560249ae","components/navigations/TopNavigation.jsx":"da638ccb962b","components/selection-and-input/Checkbox.jsx":"e6090fde0483","components/selection-and-input/RadioGroup.jsx":"7d2aa51c0781","components/selection-and-input/SearchField.jsx":"01711c574a1e","components/selection-and-input/SegmentedControl.jsx":"a76bcf241a80","components/selection-and-input/Select.jsx":"74b983969725","components/selection-and-input/Switch.jsx":"0a1349367f7f","components/selection-and-input/TextField.jsx":"1c4a622f54e6","ui_kits/eduplex-docs/DocPage.jsx":"f3aad28501ec","ui_kits/eduplex-docs/Gnb.jsx":"4090a277ca04","ui_kits/eduplex-docs/Lnb.jsx":"ee2582b89000","ui_kits/eduplex-docs/Sidebar.jsx":"eff7ee7fbb77"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MontageDesignSystem_4afdc8 = window.MontageDesignSystem_4afdc8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  large: {
    radius: 12,
    padding: '12px 28px',
    gap: 6,
    font: 16,
    line: '24px',
    ls: '0.0057em',
    icon: 20,
    onlyPadding: 12,
    onlyIcon: 24
  },
  medium: {
    radius: 10,
    padding: '9px 20px',
    gap: 5,
    font: 15,
    line: '22px',
    ls: '0.0096em',
    icon: 18,
    onlyPadding: 10,
    onlyIcon: 20
  },
  small: {
    radius: 8,
    padding: '7px 14px',
    gap: 4,
    font: 13,
    line: '18px',
    ls: '0.0194em',
    icon: 16,
    onlyPadding: 7,
    onlyIcon: 18
  }
};
const COLORS = {
  'solid-primary': {
    color: 'var(--semantic-static-white)',
    background: 'var(--semantic-primary-normal)',
    shadow: 'none',
    disabled: {
      color: 'var(--semantic-label-assistive)',
      background: 'var(--semantic-interaction-disable)',
      shadow: 'none'
    }
  },
  'solid-assistive': {
    color: 'var(--semantic-label-neutral)',
    background: 'var(--semantic-fill-normal)',
    shadow: 'none',
    blur: true,
    disabled: {
      color: 'var(--semantic-label-assistive)',
      background: 'var(--semantic-interaction-disable)',
      shadow: 'none'
    }
  },
  'outlined-primary': {
    color: 'var(--semantic-primary-normal)',
    background: 'transparent',
    shadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)',
    disabled: {
      color: 'var(--semantic-label-disable)',
      background: 'transparent',
      shadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)'
    }
  },
  'outlined-assistive': {
    color: 'var(--semantic-label-normal)',
    background: 'transparent',
    shadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)',
    disabled: {
      color: 'var(--semantic-label-disable)',
      background: 'transparent',
      shadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)'
    }
  }
};
function Button({
  size = 'medium',
  variant = 'solid',
  color = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  iconOnly = false,
  leadingContent,
  trailingContent,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const c = COLORS[variant + '-' + color] || COLORS['solid-primary'];
  const paint = disabled ? c.disabled : c;
  const weight = color === 'assistive' ? 500 : 600;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const overlay = disabled ? 0 : press ? 0.18 : hover ? 0.075 : 0;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    "aria-busy": loading || undefined,
    "data-wds": "button",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false)
  }, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'default' : loading ? 'wait' : 'pointer',
      overflow: 'hidden',
      isolation: 'isolate',
      width: fullWidth ? '100%' : 'fit-content',
      borderRadius: s.radius,
      padding: iconOnly ? s.onlyPadding : s.padding,
      gap: s.gap,
      fontFamily: 'var(--font-family-core)',
      fontSize: iconOnly ? s.onlyIcon : s.font,
      lineHeight: iconOnly ? 1 : s.line,
      letterSpacing: iconOnly ? undefined : s.ls,
      fontWeight: weight,
      color: paint.color,
      backgroundColor: paint.background,
      boxShadow: paint.shadow,
      backdropFilter: c.blur && !disabled ? 'blur(32px)' : undefined,
      transition: 'var(--transition-color)',
      ...style
    }
  }), !disabled && /*#__PURE__*/React.createElement("span", {
    "data-wds": "interaction",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'var(--semantic-label-normal)',
      opacity: overlay,
      transition: 'opacity 0.15s ease',
      zIndex: 0
    }
  }), leadingContent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      fontSize: s.icon,
      zIndex: 1
    }
  }, leadingContent), children != null && /*#__PURE__*/React.createElement("span", {
    style: {
      visibility: loading ? 'hidden' : 'visible',
      zIndex: 1
    }
  }, children), trailingContent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      fontSize: s.icon,
      zIndex: 1
    }
  }, trailingContent), loading && /*#__PURE__*/React.createElement(Spinner, {
    size: size === 'large' ? 18 : size === 'small' ? 14 : 16
  }));
}
function Spinner({
  size
}) {
  return /*#__PURE__*/React.createElement("svg", {
    "data-role": "button-loading",
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeDasharray: "42 14",
    opacity: "0.9"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 12 12",
    to: "360 12 12",
    dur: "0.9s",
    repeatCount: "indefinite"
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xsmall: {
    radius: 6,
    padding: '4px 7px',
    gap: 2,
    font: 12,
    line: '16px',
    ls: '0.0252em',
    icon: 12,
    textPadding: '0 1px'
  },
  small: {
    radius: 8,
    padding: '6px 8px',
    gap: 2,
    font: 14,
    line: '20px',
    ls: '0.0145em',
    icon: 14,
    textPadding: '0 2px'
  },
  medium: {
    radius: 8,
    padding: '7px 11px',
    gap: 3,
    font: 15,
    line: '22px',
    ls: '0.0096em',
    icon: 14,
    textPadding: '0 2px'
  },
  large: {
    radius: 10,
    padding: '9px 12px',
    gap: 3,
    font: 15,
    line: '22px',
    ls: '0.0096em',
    icon: 16,
    textPadding: '0 2px'
  }
};

/** A selectable filter/label control. Selection is carried by data-active. */
function Chip({
  size = 'medium',
  variant = 'solid',
  active = false,
  disabled = false,
  leadingContent,
  trailingContent,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  let paint;
  if (variant === 'outlined') {
    paint = disabled ? {
      color: 'var(--semantic-label-disable)',
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)'
    } : active ? {
      color: 'var(--semantic-primary-normal)',
      backgroundColor: 'rgba(var(--semantic-primary-normal-rgb),0.05)',
      boxShadow: 'inset 0 0 0 1px rgba(var(--semantic-primary-normal-rgb),0.43)'
    } : {
      color: 'var(--semantic-label-normal)',
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)'
    };
  } else {
    paint = disabled ? {
      color: 'var(--semantic-label-disable)',
      backgroundColor: 'var(--semantic-interaction-disable)',
      boxShadow: 'none'
    } : active ? {
      color: 'var(--semantic-inverse-label)',
      backgroundColor: 'var(--semantic-inverse-background)',
      boxShadow: 'none'
    } : {
      color: 'var(--semantic-label-normal)',
      backgroundColor: 'var(--semantic-fill-alternative)',
      boxShadow: 'none'
    };
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    "data-active": active,
    "aria-pressed": active,
    "data-wds": "chip"
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      width: 'fit-content',
      borderRadius: s.radius,
      padding: s.padding,
      gap: s.gap,
      fontFamily: 'var(--font-family-core)',
      fontSize: s.font,
      lineHeight: s.line,
      letterSpacing: s.ls,
      fontWeight: 500,
      cursor: disabled ? 'default' : 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
      ...paint,
      ...style
    }
  }), leadingContent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      fontSize: s.icon
    }
  }, leadingContent), children != null && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: s.textPadding
    }
  }, children), trailingContent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      fontSize: s.icon
    }
  }, trailingContent));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Chip.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  large: {
    box: 48,
    icon: 24
  },
  medium: {
    box: 40,
    icon: 20
  },
  small: {
    box: 32,
    icon: 18
  },
  xsmall: {
    box: 24,
    icon: 16
  }
};

/** A borderless, circular-interaction icon action — the control used in navigation
 * bars, card corners and tooltips. */
function IconButton({
  size = 'medium',
  color = 'normal',
  disabled = false,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const tint = disabled ? 'var(--semantic-label-disable)' : color === 'primary' ? 'var(--semantic-primary-normal)' : color === 'assistive' ? 'var(--semantic-label-alternative)' : 'var(--semantic-label-normal)';
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const overlay = disabled ? 0 : press ? 0.18 : hover ? 0.075 : 0;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    "data-wds": "icon-button",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false)
  }, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      fontSize: s.icon,
      color: tint,
      background: 'none',
      borderRadius: 9999,
      cursor: disabled ? 'default' : 'pointer',
      overflow: 'hidden',
      transition: 'var(--transition-color)',
      ...style
    }
  }), !disabled && /*#__PURE__*/React.createElement("span", {
    "data-wds": "interaction",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backgroundColor: 'var(--semantic-label-normal)',
      opacity: overlay,
      transition: 'opacity 0.15s ease'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  medium: {
    font: 16,
    line: '24px',
    ls: '0.0057em',
    icon: 20
  },
  small: {
    font: 14,
    line: '20px',
    ls: '0.0145em',
    icon: 16
  }
};

/** A label-only action, always bold, used inline beside content. */
function TextButton({
  size = 'medium',
  color = 'primary',
  disabled = false,
  leadingContent,
  trailingContent,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const tint = disabled ? 'var(--semantic-label-disable)' : color === 'primary' ? 'var(--semantic-primary-normal)' : 'var(--semantic-label-alternative)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    "data-wds": "text-button"
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      borderRadius: 6,
      padding: '4px 0px',
      width: 'fit-content',
      background: 'none',
      color: tint,
      fontFamily: 'var(--font-family-core)',
      fontSize: s.font,
      lineHeight: s.line,
      letterSpacing: s.ls,
      fontWeight: 600,
      cursor: disabled ? 'default' : 'pointer',
      transition: 'var(--transition-color)',
      ...style
    }
  }), leadingContent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      fontSize: s.icon
    }
  }, leadingContent), children != null && /*#__PURE__*/React.createElement("span", null, children), trailingContent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      fontSize: s.icon
    }
  }, trailingContent));
}
Object.assign(__ds_scope, { TextButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextButton.jsx", error: String((e && e.message) || e) }); }

// components/contents/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xlarge: {
    box: 56,
    radius: 14
  },
  large: {
    box: 48,
    radius: 12
  },
  medium: {
    box: 40,
    radius: 10
  },
  small: {
    box: 32,
    radius: 8
  },
  xsmall: {
    box: 24,
    radius: 6
  }
};

/** Person, company or academy avatar. Person is a circle; the others are rounded squares. */
function Avatar({
  size = 'medium',
  variant = 'person',
  src,
  alt = '',
  fallback,
  style,
  ...rest
}) {
  const s = typeof size === 'number' ? {
    box: size,
    radius: Math.ceil(size * 0.25 / 2) * 2
  } : SIZES[size] || SIZES.medium;
  const radius = variant === 'person' ? 9999 : s.radius;
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-wds": "avatar"
  }, rest, {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: s.box,
      height: s.box,
      fontSize: s.box / 1.5,
      borderRadius: radius,
      backgroundColor: 'var(--semantic-background-normal-normal)',
      overflow: 'hidden',
      ...style
    }
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      objectFit: variant === 'person' ? 'cover' : 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      backgroundColor: 'var(--semantic-fill-strong)',
      color: 'var(--semantic-static-white)',
      fontSize: Math.round(s.box * 0.4),
      fontWeight: 600
    }
  }, fallback), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      boxShadow: 'inset 0 0 0 1px rgba(var(--semantic-label-normal-rgb),0.05)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/contents/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/contents/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PLATFORM = {
  desktop: {
    gap: 8,
    ratio: '3 / 2',
    contentPad: '0 6px',
    title: {
      font: 16,
      line: '24px',
      ls: '0.0057em'
    },
    caption: {
      font: 13,
      line: '18px',
      ls: '0.0194em'
    },
    overlayPad: 14
  },
  mobile: {
    gap: 6,
    ratio: '4 / 3',
    contentPad: '0 2px',
    title: {
      font: 15,
      line: '22px',
      ls: '0.0096em'
    },
    caption: {
      font: 13,
      line: '18px',
      ls: '0.0194em'
    },
    overlayPad: 10
  }
};

/** Thumbnail-led content card. The image scales 1.025x on hover; nothing else moves. */
function Card({
  platform = 'desktop',
  width = '100%',
  src,
  alt = '',
  ratio,
  title,
  caption,
  overlay,
  badges,
  footer,
  onClick,
  style,
  ...rest
}) {
  const p = PLATFORM[platform] || PLATFORM.desktop;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-wds": "card",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: p.gap,
      width,
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: ratio || p.ratio,
      borderRadius: 12,
      overflow: 'hidden',
      backgroundColor: 'var(--semantic-fill-alternative)'
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.025)' : 'scale(1)',
      transition: 'transform 0.2s ease',
      willChange: 'transform'
    }
  }), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      padding: p.overlayPad,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      color: 'var(--semantic-static-white)',
      fontSize: platform === 'desktop' ? 13 : 11,
      lineHeight: platform === 'desktop' ? '18px' : '14px',
      fontWeight: 600
    }
  }, overlay)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: p.contentPad,
      overflow: 'hidden'
    }
  }, badges && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 2,
      marginBottom: 4
    }
  }, badges), title != null && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 2,
      color: 'var(--semantic-label-normal)',
      fontWeight: 600,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      ...p.title
    }
  }, title), caption != null && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--semantic-label-alternative)',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...p.caption
    }
  }, caption), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: platform === 'desktop' ? 8 : 6,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/contents/Card.jsx", error: String((e && e.message) || e) }); }

// components/contents/ContentBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  medium: {
    radius: 10,
    padding: '5px 8px',
    gap: 4,
    font: 13,
    line: '18px',
    ls: '0.0194em',
    icon: 14
  },
  small: {
    radius: 8,
    padding: '4px 6px',
    gap: 4,
    font: 12,
    line: '16px',
    ls: '0.0252em',
    icon: 14
  },
  xsmall: {
    radius: 8,
    padding: '3px 6px',
    gap: 2,
    font: 11,
    line: '14px',
    ls: '0.0311em',
    icon: 12
  }
};
const ACCENTS = ['red', 'redOrange', 'orange', 'lime', 'green', 'cyan', 'lightBlue', 'blue', 'violet', 'purple', 'pink', 'yellow'];

/** Read-only status/label badge. Not interactive — that's Chip. */
function ContentBadge({
  size = 'small',
  variant = 'solid',
  color = 'accent',
  accentColor = 'blue',
  leadingContent,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.small;
  const neutral = color === 'neutral';
  const accent = ACCENTS.includes(accentColor) ? accentColor : 'blue';
  const fg = neutral ? 'var(--semantic-label-neutral)' : `var(--semantic-accent-foreground-${accent})`;
  const solidBg = neutral ? 'var(--semantic-fill-normal)' : `color-mix(in srgb, var(--semantic-accent-foreground-${accent}) 8%, transparent)`;
  const border = neutral ? 'var(--semantic-line-normal-normal)' : `color-mix(in srgb, var(--semantic-accent-foreground-${accent}) 43%, transparent)`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-wds": "content-badge"
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'fit-content',
      height: 'fit-content',
      borderRadius: s.radius,
      padding: s.padding,
      gap: s.gap,
      fontFamily: 'var(--font-family-core)',
      fontSize: s.font,
      lineHeight: s.line,
      letterSpacing: s.ls,
      fontWeight: 500,
      color: fg,
      backgroundColor: variant === 'outlined' ? 'var(--semantic-background-normal-normal)' : solidBg,
      boxShadow: variant === 'outlined' ? `inset 0 0 0 1px ${border}` : undefined,
      ...style
    }
  }), leadingContent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      fontSize: s.icon
    }
  }, leadingContent), children);
}
Object.assign(__ds_scope, { ContentBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/contents/ContentBadge.jsx", error: String((e && e.message) || e) }); }

// components/contents/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hairline rule. Solid tokens for opaque separators, normal tokens for
 * separators that sit over color or imagery. */
function Divider({
  vertical = false,
  thickness = 1,
  size = '100%',
  color = 'var(--semantic-line-normal-alternative)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({
    "data-wds": "divider"
  }, rest, {
    style: {
      margin: 0,
      borderStyle: 'solid',
      borderColor: color,
      borderWidth: 0,
      ...(vertical ? {
        borderRightWidth: thickness,
        width: 0,
        height: size,
        alignSelf: 'stretch'
      } : {
        borderBottomWidth: thickness,
        height: 0,
        width: size
      }),
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/contents/Divider.jsx", error: String((e && e.message) || e) }); }

// components/contents/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Loading placeholder. Text rows are fill.normal, blocks are fill.alternative. */
function Skeleton({
  variant = 'text',
  width,
  height,
  radius,
  animation = true,
  style,
  ...rest
}) {
  const base = {
    position: 'relative',
    flexShrink: 0,
    width: variant === 'text' ? '100%' : width,
    animation: animation ? 'wds-skeleton-pulse 2s ease-in-out infinite' : undefined
  };
  const shape = variant === 'text' ? {
    display: 'inline-flex',
    padding: '2px 0px',
    borderRadius: 3,
    height: height || 22
  } : variant === 'circle' ? {
    borderRadius: '50%',
    width,
    height
  } : {
    borderRadius: radius || 12,
    width,
    height
  };
  const fill = variant === 'rectangle' ? 'var(--semantic-fill-alternative)' : 'var(--semantic-fill-normal)';
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-wds": "skeleton"
  }, rest, {
    style: {
      ...base,
      ...shape,
      ...style
    }
  }), /*#__PURE__*/React.createElement("style", null, '@keyframes wds-skeleton-pulse{0%{opacity:.5}50%{opacity:1}100%{opacity:.5}}'), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: variant === 'text' && width ? width : '100%',
      height: '100%',
      borderRadius: 'inherit',
      backgroundColor: fill
    }
  }));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/contents/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SectionMessage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TINT = {
  info: 'var(--semantic-primary-normal)',
  positive: 'var(--semantic-status-positive)',
  negative: 'var(--semantic-status-negative)',
  cautionary: 'var(--semantic-status-cautionary)',
  custom: 'var(--semantic-label-assistive)'
};

/** In-page message block: an 88% page-surface layer under a 5% status tint. */
function SectionMessage({
  variant = 'info',
  icon,
  title,
  children,
  trailingButton,
  onClose,
  style,
  ...rest
}) {
  const tint = TINT[variant] || TINT.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-wds": "section-message",
    role: "status"
  }, rest, {
    style: {
      position: 'relative',
      width: '100%',
      borderRadius: 12,
      padding: 12,
      backdropFilter: 'blur(32px)',
      overflow: 'hidden',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      backgroundColor: 'color-mix(in srgb, var(--semantic-background-normal-normal) 88%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      backgroundColor: `color-mix(in srgb, ${tint} 5%, transparent)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0,
      fontSize: 20,
      padding: '1px 0',
      color: variant === 'custom' ? 'var(--semantic-label-alternative)' : tint
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      minWidth: 0,
      padding: '1px 2px'
    }
  }, title != null && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--semantic-label-normal)',
      fontSize: 15,
      lineHeight: '22px',
      letterSpacing: '0.0096em',
      fontWeight: 600
    }
  }, title), children != null && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--semantic-label-neutral)',
      fontSize: 15,
      lineHeight: '24px',
      letterSpacing: '0.0096em',
      wordBreak: 'keep-all'
    }
  }, children)), trailingButton && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      padding: '0 8px'
    }
  }, trailingButton), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\uB2EB\uAE30",
    style: {
      flexShrink: 0,
      display: 'flex',
      color: 'var(--semantic-label-alternative)',
      cursor: 'pointer',
      margin: '1px 0'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.86349 4.86346C5.21496 4.51199 5.78481 4.51199 6.13628 4.86346L11.9999 10.7271L17.8634 4.86346C18.2149 4.51199 18.7848 4.51199 19.1362 4.86346C19.4877 5.21493 19.4877 5.78478 19.1362 6.13625L13.2726 11.9999L19.1362 17.8635C19.4877 18.2149 19.4877 18.7848 19.1362 19.1363C18.7848 19.4877 18.2149 19.4877 17.8634 19.1363L11.9999 13.2727L6.13628 19.1363C5.78481 19.4877 5.21496 19.4877 4.86349 19.1363C4.51202 18.7848 4.51202 18.2149 4.86349 17.8635L10.7271 11.9999L4.86349 6.13625C4.51202 5.78478 4.51202 5.21493 4.86349 4.86346Z",
    fill: "currentColor"
  })))));
}
Object.assign(__ds_scope, { SectionMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SectionMessage.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Transient confirmation. Dark, frosted, 356-420px wide, self-dismissing. */
function Toast({
  icon,
  children,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-wds": "toast",
    role: "status"
  }, rest, {
    style: {
      borderRadius: 12,
      backdropFilter: 'blur(32px)',
      minWidth: 356,
      maxWidth: 420,
      overflow: 'hidden',
      position: 'relative',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'color-mix(in srgb, var(--semantic-inverse-background) 52%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(var(--semantic-primary-normal-rgb),0.05)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '11px 16px',
      fontSize: 20
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0,
      color: 'var(--semantic-primary-normal)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 auto',
      minWidth: 0,
      padding: '5px 2px',
      color: 'var(--semantic-inverse-label)',
      opacity: 0.88,
      fontSize: 15,
      lineHeight: '22px',
      letterSpacing: '0.0096em',
      wordBreak: 'keep-all'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, action)));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  medium: {
    radius: 8,
    padding: '8px 10px',
    font: 14,
    line: '20px',
    ls: '0.0145em'
  },
  small: {
    radius: 6,
    padding: '5px 8px',
    font: 11,
    line: '14px',
    ls: '0.0311em'
  }
};

/** Hover/focus hint. Dark frosted surface, max 280px wide. */
function Tooltip({
  size = 'medium',
  children,
  shortcut,
  arrow = 'bottom',
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const arrowSize = size === 'small' ? 4 : 5;
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-wds": "tooltip"
  }, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      maxWidth: 280,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: s.radius,
      padding: s.padding,
      backdropFilter: 'blur(32px)',
      backgroundColor: 'color-mix(in srgb, var(--semantic-inverse-background) 88%, transparent)',
      color: 'var(--semantic-inverse-label)',
      fontFamily: 'var(--font-family-core)',
      fontSize: s.font,
      lineHeight: s.line,
      letterSpacing: s.ls,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      backgroundColor: 'rgba(var(--semantic-primary-normal-rgb),0.05)'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      padding: size === 'small' ? 0 : '0 2px'
    }
  }, children), shortcut && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flexShrink: 0,
      color: 'rgba(var(--semantic-inverse-label-rgb),0.61)'
    }
  }, shortcut)), arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '50%',
      [arrow === 'bottom' ? 'bottom' : 'top']: -arrowSize,
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: `${arrowSize}px solid transparent`,
      borderRight: `${arrowSize}px solid transparent`,
      [arrow === 'bottom' ? 'borderTop' : 'borderBottom']: `${arrowSize}px solid color-mix(in srgb, var(--semantic-inverse-background) 88%, transparent)`
    }
  }));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = () => typeof window !== 'undefined' && window.__WDS_ICON_BASE__ || 'assets/icons';

/**
 * Montage icons are 24x24 outlined SVGs drawn on a 0.9px-rounded geometry and
 * always filled with currentColor. They are recolored here through a CSS mask so
 * the file on disk stays the single source of truth.
 */
function Icon({
  name,
  size = 24,
  src,
  style,
  ...rest
}) {
  const url = src || `${BASE()}/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      flexShrink: 0,
      width: size,
      height: size,
      backgroundColor: 'currentColor',
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Icon.jsx", error: String((e && e.message) || e) }); }

// components/navigations/BottomNavigation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mobile tab bar. 56px tall, icons only, active item in primary. */
function BottomNavigation({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "data-wds": "bottom-navigation"
  }, rest, {
    style: {
      display: 'flex',
      width: '100%',
      height: 56,
      borderTop: '1px solid var(--semantic-line-normal-alternative)',
      backgroundColor: 'color-mix(in srgb, var(--semantic-background-elevated-normal) 88%, transparent)',
      backdropFilter: 'blur(32px)',
      transition: 'border-color 0.2s ease, background-color 0.2s ease',
      boxSizing: 'border-box',
      ...style
    }
  }), items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      "aria-current": on ? 'page' : undefined,
      "aria-label": it.label,
      onClick: () => onChange && onChange(it.value),
      style: {
        flex: '1 1 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        padding: '9px 0',
        background: 'transparent',
        fontSize: 24,
        cursor: 'pointer',
        color: on ? 'var(--semantic-primary-normal)' : 'var(--semantic-interaction-inactive)'
      }
    }, it.icon, it.label && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        lineHeight: '14px',
        letterSpacing: '0.0311em',
        fontWeight: 500
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNavigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigations/BottomNavigation.jsx", error: String((e && e.message) || e) }); }

// components/navigations/Tab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  small: {
    padY: 9,
    padX: 12,
    font: 15,
    line: '22px',
    ls: '0.0096em'
  },
  medium: {
    padY: 12,
    padX: 12,
    font: 17,
    line: '24px',
    ls: '0em'
  },
  large: {
    padY: 14,
    padX: 12,
    font: 17,
    line: '24px',
    ls: '0em'
  }
};

/** Underline tab bar. The 2px selected rule is the only selection cue. */
function Tab({
  items = [],
  value,
  size = 'medium',
  resize = 'hug',
  onChange,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const fill = resize === 'fill';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    "data-wds": "tab"
  }, rest, {
    style: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      gap: fill ? 0 : s.padX * 2,
      boxShadow: 'inset 0 -1px 0 0 var(--semantic-line-normal-alternative)',
      ...style
    }
  }), items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      role: "tab",
      "aria-selected": on,
      disabled: it.disabled,
      onClick: () => onChange && onChange(it.value),
      style: {
        position: 'relative',
        flex: fill ? '1 1 0' : 'initial',
        padding: `${s.padY}px 0`,
        background: 'none',
        cursor: it.disabled ? 'default' : 'pointer',
        fontFamily: 'var(--font-family-core)',
        fontSize: s.font,
        lineHeight: s.line,
        letterSpacing: s.ls,
        fontWeight: 600,
        textAlign: fill ? 'center' : 'initial',
        color: it.disabled ? 'var(--semantic-label-disable)' : on ? 'var(--semantic-label-strong)' : 'var(--semantic-label-assistive)',
        transition: 'color 0.2s ease'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: 'nowrap'
      }
    }, it.label), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: 2,
        backgroundColor: on ? it.disabled ? 'var(--semantic-fill-alternative)' : 'var(--semantic-label-strong)' : 'transparent',
        transition: 'background-color 0.2s ease'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigations/Tab.jsx", error: String((e && e.message) || e) }); }

// components/navigations/TopNavigation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Top app bar. normal centers a title between icon slots; display left-aligns a
 * title3; search puts a SearchField in the title slot. */
function TopNavigation({
  variant = 'normal',
  title,
  leftContent,
  rightContent,
  background = true,
  style,
  ...rest
}) {
  const frost = background ? {
    backgroundColor: 'color-mix(in srgb, var(--semantic-background-elevated-normal) 88%, transparent)',
    backdropFilter: 'blur(32px)'
  } : {};
  const base = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '16px',
    position: 'relative',
    boxSizing: 'border-box'
  };
  if (variant === 'display') {
    return /*#__PURE__*/React.createElement("div", _extends({
      "data-wds": "top-navigation"
    }, rest, {
      style: {
        ...base,
        gap: 20,
        ...frost,
        ...style
      }
    }), leftContent && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexShrink: 0
      }
    }, leftContent), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 auto',
        minWidth: 0,
        padding: '0 4px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 24,
        lineHeight: '32px',
        letterSpacing: '-0.023em',
        fontWeight: 700,
        color: 'var(--semantic-label-normal)',
        wordBreak: 'keep-all'
      }
    }, title)), rightContent && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexShrink: 0,
        gap: 4
      }
    }, rightContent));
  }
  if (variant === 'search') {
    return /*#__PURE__*/React.createElement("div", _extends({
      "data-wds": "top-navigation"
    }, rest, {
      style: {
        ...base,
        gap: 12,
        ...frost,
        ...style
      }
    }), leftContent && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexShrink: 0
      }
    }, leftContent), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 auto',
        minWidth: 0
      }
    }, title), rightContent && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexShrink: 0,
        gap: 4
      }
    }, rightContent));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-wds": "top-navigation"
  }, rest, {
    style: {
      ...base,
      minHeight: 56,
      justifyContent: 'center',
      ...frost,
      ...style
    }
  }), leftContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 16,
      display: 'flex'
    }
  }, leftContent), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      maxHeight: 24,
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      width: '80%',
      textAlign: 'center',
      fontSize: 17,
      lineHeight: '24px',
      fontWeight: 600,
      color: 'var(--semantic-label-normal)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title)), rightContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      display: 'flex',
      gap: 4
    }
  }, rightContent));
}
Object.assign(__ds_scope, { TopNavigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigations/TopNavigation.jsx", error: String((e && e.message) || e) }); }

// components/selection-and-input/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  medium: {
    box: 24,
    pad: 3,
    icon: 16,
    font: 15,
    line: '22px',
    ls: '0.0096em'
  },
  small: {
    box: 20,
    pad: 2,
    icon: 14,
    font: 14,
    line: '20px',
    ls: '0.0145em'
  }
};
function Checkbox({
  size = 'medium',
  checked = false,
  indeterminate = false,
  disabled = false,
  bold = false,
  label,
  onChange,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    "data-wds": "checkbox",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.43 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: s.box,
      height: s.box,
      padding: s.pad,
      borderRadius: 5,
      boxSizing: 'border-box',
      backgroundColor: on ? 'var(--semantic-primary-normal)' : 'var(--semantic-background-normal-normal)',
      boxShadow: on ? 'inset 0 0 0 1.5px var(--semantic-primary-normal)' : 'inset 0 0 0 1.5px var(--semantic-line-normal-normal)',
      color: 'var(--semantic-static-white)',
      transition: 'background-color 0.2s ease, box-shadow 0.2s ease'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: s.icon,
    height: s.icon,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? 'scale(1)' : 'scale(0.75)',
      transition: 'opacity 0.15s ease, transform 0.2s ease'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("path", {
    d: "M5 11.1h14v1.8H5z",
    fill: "currentColor"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M19.3863 6.86346C19.7378 7.21493 19.7378 7.78478 19.3863 8.13625L10.3863 17.1362C10.0349 17.4877 9.46503 17.4877 9.11356 17.1362L4.61358 12.6362C4.26211 12.2848 4.26211 11.7149 4.61358 11.3635C4.96505 11.012 5.5349 11.012 5.88637 11.3635L9.74995 15.2271L18.1135 6.86346C18.465 6.51199 19.0348 6.51199 19.3863 6.86346Z",
    fill: "currentColor"
  }))), label != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: disabled ? 'var(--semantic-label-disable)' : 'var(--semantic-label-normal)',
      fontSize: s.font,
      lineHeight: s.line,
      letterSpacing: s.ls,
      fontWeight: bold ? 600 : 400
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection-and-input/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/selection-and-input/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  medium: {
    box: 24,
    font: 15,
    line: '22px'
  },
  small: {
    box: 20,
    font: 14,
    line: '20px'
  }
};

/** Radio group — one choice from a short, visible list. */
function RadioGroup({
  options = [],
  value,
  size = 'medium',
  disabled = false,
  direction = 'column',
  onChange,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    "data-wds": "radio-group"
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 12,
      ...style
    }
  }), options.map(o => {
    const on = o.value === value;
    const off = disabled || o.disabled;
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        cursor: off ? 'default' : 'pointer',
        opacity: off ? 0.43 : 1
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      checked: on,
      disabled: off,
      onChange: () => onChange && onChange(o.value),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: s.box,
        height: s.box,
        borderRadius: 9999,
        boxSizing: 'border-box',
        boxShadow: on ? 'inset 0 0 0 6px var(--semantic-primary-normal)' : 'inset 0 0 0 1.5px var(--semantic-line-normal-normal)',
        backgroundColor: 'var(--semantic-background-normal-normal)',
        transition: 'box-shadow 0.2s ease'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--semantic-label-normal)',
        fontSize: s.font,
        lineHeight: s.line
      }
    }, o.label));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection-and-input/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/selection-and-input/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Search input — flatter than TextField: a fill-tinted 12px shell with no
 * hairline and no elevation. */
function SearchField({
  size = 'medium',
  placeholder = '검색',
  value,
  defaultValue,
  disabled = false,
  width = 'initial',
  leadingContent,
  trailingContent,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-wds": "search-field",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      width,
      padding: size === 'small' ? 8 : 12,
      borderRadius: 12,
      backgroundColor: 'var(--semantic-fill-normal)',
      backdropFilter: 'blur(32px)',
      cursor: disabled ? 'default' : 'text',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0,
      padding: '0 2px',
      fontSize: 20,
      color: disabled ? 'var(--semantic-label-disable)' : 'var(--semantic-label-alternative)'
    }
  }, leadingContent), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange
  }, rest, {
    style: {
      width: '100%',
      minHeight: 24,
      padding: 0,
      margin: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      caretColor: 'var(--semantic-primary-normal)',
      color: disabled ? 'var(--semantic-label-alternative)' : 'var(--semantic-label-normal)',
      fontFamily: 'var(--font-family-core)',
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.0057em'
    }
  })), trailingContent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0,
      padding: '0 2px',
      fontSize: 20,
      color: 'var(--semantic-label-alternative)'
    }
  }, trailingContent));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection-and-input/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/selection-and-input/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  large: {
    h: 48,
    radius: 12,
    pad: 3,
    itemRadius: 10,
    itemPad: '9px 8px',
    font: 17,
    line: '24px',
    ls: '0em',
    icon: 20
  },
  medium: {
    h: 40,
    radius: 10,
    pad: 2,
    itemRadius: 8,
    itemPad: '7px 8px',
    font: 15,
    line: '22px',
    ls: '0.0096em',
    icon: 18
  },
  small: {
    h: 32,
    radius: 8,
    pad: 2,
    itemRadius: 6,
    itemPad: '5px 6px',
    font: 13,
    line: '18px',
    ls: '0.0194em',
    icon: 14
  }
};

/** Mutually exclusive view switch. Solid rides a raised thumb; outlined tints primary. */
function SegmentedControl({
  items = [],
  value,
  size = 'medium',
  variant = 'solid',
  onChange,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const solid = variant !== 'outlined';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    "data-wds": "segmented-control"
  }, rest, {
    style: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: s.h,
      borderRadius: s.radius,
      padding: solid ? s.pad : 0,
      backgroundColor: solid ? 'var(--semantic-fill-normal)' : 'transparent',
      boxShadow: solid ? undefined : 'inset 0 0 0 1px var(--semantic-line-normal-normal)',
      boxSizing: 'border-box',
      ...style
    }
  }), items.map((it, i) => {
    const on = it.value === value;
    const first = i === 0;
    const last = i === items.length - 1;
    const outlinedRadius = first ? `${s.radius}px 0 0 ${s.radius}px` : last ? `0 ${s.radius}px ${s.radius}px 0` : 0;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      role: "tab",
      "aria-selected": on,
      "data-active": on,
      disabled: it.disabled,
      onClick: () => onChange && onChange(it.value),
      style: {
        position: 'relative',
        flex: '1 1 0',
        minWidth: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        height: '100%',
        padding: solid ? s.itemPad : '0 16px',
        borderRadius: solid ? s.itemRadius : outlinedRadius,
        border: solid ? undefined : on ? '1px solid rgba(var(--semantic-primary-normal-rgb),0.43)' : '1px solid transparent',
        borderRight: solid || last || on ? undefined : '1px solid var(--semantic-line-normal-normal)',
        boxShadow: solid && on ? '0px 0px 4px 0px rgba(0,0,0,0.08)' : 'none',
        backgroundColor: solid ? on ? 'var(--semantic-background-elevated-normal)' : 'transparent' : on ? 'rgba(var(--semantic-primary-normal-rgb),0.05)' : 'transparent',
        color: on ? solid ? 'var(--semantic-label-normal)' : 'var(--semantic-primary-normal)' : 'var(--semantic-label-alternative)',
        fontFamily: 'var(--font-family-core)',
        fontSize: s.font,
        lineHeight: s.line,
        letterSpacing: s.ls,
        fontWeight: 500,
        cursor: it.disabled ? 'default' : 'pointer',
        transition: solid ? 'color 0.2s' : 'none',
        boxSizing: 'border-box'
      }
    }, it.leadingContent && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        fontSize: s.icon,
        flexShrink: 0
      }
    }, it.leadingContent), /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection-and-input/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/selection-and-input/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Select — the TextField shell plus a chevron and a floating option list. */
function Select({
  options = [],
  value,
  placeholder = '선택',
  disabled = false,
  invalid = false,
  width = 240,
  onChange,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find(o => o.value === value);
  const ring = disabled ? 'inset 0 0 0 1px var(--semantic-line-normal-alternative)' : open ? 'inset 0 0 0 2px rgba(var(--semantic-primary-normal-rgb),0.43)' : invalid ? 'inset 0 0 0 1px rgba(var(--semantic-status-negative-rgb),0.28)' : 'inset 0 0 0 1px var(--semantic-line-normal-neutral)';
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-wds": "select",
    style: {
      position: 'relative',
      width,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      width: '100%',
      padding: 12,
      borderRadius: 12,
      boxShadow: `${ring}, var(--elevation-shadow-xsmall)`,
      backgroundColor: disabled ? 'var(--semantic-fill-alternative)' : 'var(--semantic-background-transparent-normal)',
      backdropFilter: disabled ? undefined : 'blur(32px)',
      color: selected ? 'var(--semantic-label-normal)' : 'var(--semantic-label-assistive)',
      fontFamily: 'var(--font-family-core)',
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.0057em',
      cursor: disabled ? 'default' : 'pointer',
      transition: 'box-shadow ease 0.2s',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '1 1 auto',
      minWidth: 0,
      padding: '0 4px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0,
      fontSize: 20,
      color: 'var(--semantic-label-alternative)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.2s ease'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.36364 7.36346C3.71511 7.01199 4.28496 7.01199 4.63643 7.36346L12 14.7271L19.3636 7.36346C19.7151 7.01199 20.285 7.01199 20.6364 7.36346C20.9879 7.71493 20.9879 8.28478 20.6364 8.63625L12.6364 16.6362C12.285 16.9877 11.7151 16.9877 11.3636 16.6362L3.36364 8.63625C3.01217 8.28478 3.01217 7.71493 3.36364 7.36346Z",
    fill: "currentColor"
  })))), open && /*#__PURE__*/React.createElement("ul", {
    role: "listbox",
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      left: 0,
      right: 0,
      zIndex: 10,
      margin: 0,
      padding: 6,
      listStyle: 'none',
      borderRadius: 12,
      backgroundColor: 'var(--semantic-background-elevated-normal)',
      boxShadow: 'var(--elevation-shadow-medium), inset 0 0 0 1px var(--semantic-line-normal-alternative)'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("li", {
    key: o.value
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "option",
    "aria-selected": o.value === value,
    onClick: () => {
      setOpen(false);
      onChange && onChange(o.value);
    },
    style: {
      display: 'flex',
      width: '100%',
      padding: '10px 10px',
      borderRadius: 8,
      textAlign: 'left',
      fontFamily: 'var(--font-family-core)',
      fontSize: 15,
      lineHeight: '22px',
      fontWeight: o.value === value ? 600 : 400,
      color: o.value === value ? 'var(--semantic-primary-normal)' : 'var(--semantic-label-normal)',
      backgroundColor: o.value === value ? 'rgba(var(--semantic-primary-normal-rgb),0.05)' : 'transparent',
      cursor: 'pointer'
    }
  }, o.label)))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection-and-input/Select.jsx", error: String((e && e.message) || e) }); }

// components/selection-and-input/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  medium: {
    w: 52,
    pad: 4,
    thumb: 24,
    radius: 100
  },
  small: {
    w: 39,
    pad: 3,
    thumb: 18,
    radius: 75
  }
};
function Switch({
  size = 'medium',
  checked = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: onChange,
    "data-wds": "switch"
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexShrink: 0,
      width: s.w,
      padding: s.pad,
      borderRadius: s.radius,
      backgroundColor: checked ? 'var(--semantic-primary-normal)' : 'var(--semantic-fill-strong)',
      opacity: disabled ? 0.43 : 1,
      cursor: disabled ? 'default' : 'pointer',
      transition: 'background-color 200ms cubic-bezier(0.4,0,0.2,1)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: s.thumb,
      height: s.thumb,
      borderRadius: 1000,
      backgroundColor: 'var(--semantic-static-white)',
      marginLeft: checked ? s.w - s.thumb - s.pad * 2 : 0,
      transition: 'margin-left 200ms cubic-bezier(0.4,0,0.2,1), width 200ms cubic-bezier(0.4,0,0.2,1)'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection-and-input/Switch.jsx", error: String((e && e.message) || e) }); }

// components/selection-and-input/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Montage's text input: a frosted 12px-radius shell with a hairline drawn as an
 * inset shadow, thickening to 2px primary on focus. */
function TextField({
  value,
  defaultValue,
  placeholder,
  invalid = false,
  disabled = false,
  readOnly = false,
  width = 'initial',
  leadingContent,
  trailingContent,
  trailingButton,
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const ring = disabled ? 'inset 0 0 0 1px var(--semantic-line-normal-alternative)' : focused ? invalid ? 'inset 0 0 0 2px rgba(var(--semantic-status-negative-rgb),0.43)' : 'inset 0 0 0 2px rgba(var(--semantic-primary-normal-rgb),0.43)' : invalid ? 'inset 0 0 0 1px rgba(var(--semantic-status-negative-rgb),0.28)' : 'inset 0 0 0 1px var(--semantic-line-normal-neutral)';
  return /*#__PURE__*/React.createElement("div", {
    "data-wds": "text-field",
    style: {
      display: 'flex',
      alignItems: 'center',
      width,
      borderRadius: 12,
      boxShadow: 'var(--elevation-shadow-xsmall)',
      backgroundColor: disabled ? 'var(--semantic-fill-alternative)' : 'var(--semantic-background-transparent-normal)',
      backdropFilter: disabled ? undefined : 'blur(32px)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      flex: '1 1 auto',
      minWidth: 0,
      padding: 12,
      borderRadius: trailingButton ? '12px 0 0 12px' : 12,
      boxShadow: ring,
      cursor: disabled ? 'default' : 'text',
      transition: 'box-shadow ease 0.2s'
    }
  }, leadingContent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0,
      fontSize: 20,
      color: 'var(--semantic-label-alternative)',
      maxHeight: 24
    }
  }, leadingContent), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readOnly,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest, {
    style: {
      padding: '0 4px',
      width: '100%',
      minHeight: 24,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      caretColor: 'var(--semantic-primary-normal)',
      color: disabled ? 'var(--semantic-label-alternative)' : 'var(--semantic-label-normal)',
      fontFamily: 'var(--font-family-core)',
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.0057em'
    }
  })), invalid && !focused && /*#__PURE__*/React.createElement(StatusDot, {
    color: "var(--semantic-status-negative)"
  }), trailingContent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0,
      fontSize: 20,
      color: 'var(--semantic-label-alternative)',
      maxHeight: 24
    }
  }, trailingContent)), trailingButton && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      minWidth: 80,
      padding: '12px 16px',
      borderRadius: '0 12px 12px 0',
      boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)',
      color: 'var(--semantic-label-normal)',
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 600,
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, trailingButton));
}
function StatusDot({
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      width: 20,
      height: 20,
      borderRadius: 9999,
      backgroundColor: color,
      display: 'flex'
    }
  });
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/selection-and-input/TextField.jsx", error: String((e && e.message) || e) }); }

// ui_kits/eduplex-docs/DocPage.jsx
try { (() => {
const {
  Button,
  IconButton,
  TextButton,
  Chip,
  TextField,
  SearchField,
  Select,
  Checkbox,
  RadioGroup,
  Switch,
  SegmentedControl,
  Card,
  ContentBadge,
  Avatar,
  Divider,
  Skeleton,
  SectionMessage,
  Toast,
  Tooltip,
  Tab,
  TopNavigation,
  BottomNavigation,
  Icon
} = window.MontageDesignSystem_4afdc8;
const H1 = ({
  children
}) => /*#__PURE__*/React.createElement("h1", {
  style: {
    margin: 0,
    fontSize: 36,
    lineHeight: '48px',
    letterSpacing: '-0.027em',
    fontWeight: 700,
    color: 'var(--semantic-label-normal)'
  }
}, children);
const Lead = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    margin: '12px 0 0',
    fontSize: 16,
    lineHeight: '26px',
    letterSpacing: '0.0057em',
    color: 'var(--semantic-label-neutral)',
    maxWidth: 640
  }
}, children);
const H2 = ({
  children
}) => /*#__PURE__*/React.createElement("h2", {
  style: {
    margin: '56px 0 0',
    fontSize: 22,
    lineHeight: '30px',
    letterSpacing: '-0.0194em',
    fontWeight: 600,
    color: 'var(--semantic-label-normal)'
  }
}, children);
const P = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    margin: '8px 0 0',
    fontSize: 15,
    lineHeight: '24px',
    letterSpacing: '0.0096em',
    color: 'var(--semantic-label-neutral)',
    maxWidth: 640
  }
}, children);
function Example({
  children,
  code
}) {
  const [showCode, setShowCode] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
      padding: 32,
      backgroundColor: 'var(--semantic-background-normal-alternative)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 12px',
      borderTop: '1px solid var(--semantic-line-normal-alternative)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '0.0252em',
      color: 'var(--semantic-label-assistive)'
    }
  }, "Preview"), /*#__PURE__*/React.createElement(TextButton, {
    size: "small",
    color: "assistive",
    onClick: () => setShowCode(!showCode)
  }, showCode ? 'Hide code' : 'Show code')), showCode && /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 16,
      borderTop: '1px solid var(--semantic-line-normal-alternative)',
      backgroundColor: 'var(--semantic-background-normal-alternative)',
      fontFamily: 'var(--font-family-mono)',
      fontSize: 13,
      lineHeight: '20px',
      color: 'var(--semantic-label-normal)',
      overflowX: 'auto'
    }
  }, code));
}
function PropsTable({
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: '0.0145em'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      backgroundColor: 'var(--semantic-background-normal-alternative)'
    }
  }, ['Prop', 'Type', 'Default'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: '10px 14px',
      fontWeight: 600,
      color: 'var(--semantic-label-normal)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0],
    style: {
      borderTop: '1px solid var(--semantic-line-normal-alternative)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 14px',
      fontFamily: 'var(--font-family-mono)',
      color: 'var(--semantic-label-normal)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 14px',
      fontFamily: 'var(--font-family-mono)',
      color: 'var(--semantic-label-alternative)'
    }
  }, r[1]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 14px',
      fontFamily: 'var(--font-family-mono)',
      color: 'var(--semantic-label-alternative)'
    }
  }, r[2]))))));
}
function ButtonDoc() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H1, null, "Button"), /*#__PURE__*/React.createElement(Lead, null, "\uC0AC\uC6A9\uC790\uAC00 \uD654\uBA74\uC5D0\uC11C \uAC00\uC7A5 \uBA3C\uC800 \uC2E4\uD589\uD560 \uB3D9\uC791\uC744 \uB2F4\uC2B5\uB2C8\uB2E4. \uD55C \uD654\uBA74\uC5D0 solid primary \uBC84\uD2BC\uC740 \uD558\uB098\uB9CC \uB450\uC138\uC694."), /*#__PURE__*/React.createElement(H2, null, "Variant"), /*#__PURE__*/React.createElement(P, null, "solid\uB294 \uC2E4\uD589, outlined\uB294 \uBCF4\uC870 \uB3D9\uC791\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. color\uAC00 assistive\uC77C \uB54C \uB77C\uBCA8 \uB450\uAED8\uB294 medium\uC73C\uB85C \uB0B4\uB824\uAC11\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Example, {
    code: '<Button>신청하기</Button>\n<Button variant="outlined">지점찾기</Button>\n<Button color="assistive">나중에</Button>'
  }, /*#__PURE__*/React.createElement(Button, null, "\uC2E0\uCCAD\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined"
  }, "\uC9C0\uC810\uCC3E\uAE30"), /*#__PURE__*/React.createElement(Button, {
    color: "assistive"
  }, "\uB098\uC911\uC5D0"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    color: "assistive"
  }, "\uCDE8\uC18C")), /*#__PURE__*/React.createElement(H2, null, "Size"), /*#__PURE__*/React.createElement(P, null, "size\uB9C8\uB2E4 radius\xB7padding\xB7\uD0C0\uC774\uD3EC\uAC00 \uD568\uAED8 \uBC14\uB01D\uB2C8\uB2E4. large 12px / 12px 28px / body1, medium 10px / 9px 20px / body2, small 8px / 7px 14px / label2."), /*#__PURE__*/React.createElement(Example, {
    code: '<Button size="large" />\n<Button size="medium" />\n<Button size="small" />'
  }, /*#__PURE__*/React.createElement(Button, {
    size: "large"
  }, "\uC2E0\uCCAD\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    size: "medium"
  }, "\uC2E0\uCCAD\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    size: "small"
  }, "\uC2E0\uCCAD\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    size: "large",
    iconOnly: true,
    "aria-label": "\uBD81\uB9C8\uD06C"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 24
  })), /*#__PURE__*/React.createElement(Button, {
    iconOnly: true,
    "aria-label": "\uBD81\uB9C8\uD06C"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 20
  }))), /*#__PURE__*/React.createElement(H2, null, "State"), /*#__PURE__*/React.createElement(Example, {
    code: '<Button loading />\n<Button disabled />'
  }, /*#__PURE__*/React.createElement(Button, {
    loading: true
  }, "\uC2E0\uCCAD\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    disabled: true
  }, "\uC2E0\uCCAD \uC644\uB8CC"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    disabled: true
  }, "\uC9C0\uC810\uCC3E\uAE30"), /*#__PURE__*/React.createElement(Button, {
    leadingContent: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    })
  }, "\uD6C4\uAE30 \uCD94\uAC00")), /*#__PURE__*/React.createElement(H2, null, "Props"), /*#__PURE__*/React.createElement(PropsTable, {
    rows: [['size', "'small' | 'medium' | 'large'", "'medium'"], ['variant', "'solid' | 'outlined'", "'solid'"], ['color', "'primary' | 'assistive'", "'primary'"], ['fullWidth', 'boolean', 'false'], ['iconOnly', 'boolean', 'false'], ['loading', 'boolean', 'false'], ['disabled', 'boolean', 'false']]
  }));
}
function ColorDoc() {
  const rows = [['primary.normal', 'var(--semantic-primary-normal)', '#0054A7'], ['label.normal', 'var(--semantic-label-normal)', 'coolNeutral.10'], ['label.alternative', 'var(--semantic-label-alternative)', 'coolNeutral.25 @ 61%'], ['line.normal.neutral', 'var(--semantic-line-normal-neutral)', 'coolNeutral.50 @ 16%'], ['fill.normal', 'var(--semantic-fill-normal)', 'coolNeutral.50 @ 8%'], ['status.negative', 'var(--semantic-status-negative)', '#FF4242']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H1, null, "Color"), /*#__PURE__*/React.createElement(Lead, null, "\uC0C9\uC740 atomic \uC2A4\uCF00\uC77C\uACFC semantic \uD1A0\uD070 \uB450 \uCE35\uC73C\uB85C \uB098\uB269\uB2C8\uB2E4. \uC81C\uD488 \uCF54\uB4DC\uB294 semantic \uD1A0\uD070\uB9CC \uC0AC\uC6A9\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(H2, null, "Semantic tokens"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: 12
    }
  }, rows.map(([name, value, note]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      borderRadius: 10,
      background: value,
      boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-alternative)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: '18px',
      fontWeight: 600,
      color: 'var(--semantic-label-normal)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: '16px',
      fontFamily: 'var(--font-family-mono)',
      color: 'var(--semantic-label-assistive)'
    }
  }, note)))), /*#__PURE__*/React.createElement(H2, null, "Accent"), /*#__PURE__*/React.createElement(P, null, "accent.background\uB294 \uCE74\uD14C\uACE0\uB9AC \uC544\uD2B8\uC5D0, accent.foreground\uB294 \uD14D\uC2A4\uD2B8\uC5D0 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uBC18\uB300\uB85C \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Example, {
    code: '<ContentBadge accentColor="violet">추천</ContentBadge>'
  }, ['red', 'redOrange', 'orange', 'lime', 'green', 'cyan', 'lightBlue', 'blue', 'violet', 'purple', 'pink', 'yellow'].map(c => /*#__PURE__*/React.createElement(ContentBadge, {
    key: c,
    accentColor: c
  }, c))));
}
function GalleryDoc({
  page
}) {
  const [seg, setSeg] = React.useState('reco');
  const [tab, setTab] = React.useState('all');
  const [nav, setNav] = React.useState('home');
  const [radio, setRadio] = React.useState('all');
  const [on, setOn] = React.useState(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(H1, null, page), /*#__PURE__*/React.createElement(Lead, null, "\uC5D0\uB4C0\uD50C\uB809\uC2A4 \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uBAA8\uB450 semantic \uD1A0\uD070 \uC704\uC5D0\uC11C \uB3D9\uC791\uD558\uBA70, \uB2E4\uD06C \uBAA8\uB4DC\uB294 \uD1A0\uD070 \uAC12\uB9CC \uBC14\uAFD4 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(H2, null, "Selection & input"), /*#__PURE__*/React.createElement(Example, {
    code: '<TextField /> <Select /> <Checkbox /> <Switch />'
  }, /*#__PURE__*/React.createElement(TextField, {
    placeholder: "\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694",
    width: 220
  }), /*#__PURE__*/React.createElement(Select, {
    width: 160,
    placeholder: "\uC9C0\uC5ED",
    options: [{
      value: 'seoul',
      label: '서울'
    }, {
      value: 'busan',
      label: '부산'
    }]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "\uC804\uCCB4 \uB3D9\uC758"
  }), /*#__PURE__*/React.createElement(RadioGroup, {
    direction: "row",
    value: radio,
    onChange: setRadio,
    options: [{
      value: 'all',
      label: '전체'
    }, {
      value: 'new',
      label: '직영'
    }]
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: on,
    onChange: () => setOn(!on)
  })), /*#__PURE__*/React.createElement(H2, null, "Navigation"), /*#__PURE__*/React.createElement(Example, {
    code: '<Tab /> <SegmentedControl /> <BottomNavigation />'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Tab, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'all',
      label: '전체'
    }, {
      value: 'dev',
      label: '학습하기'
    }, {
      value: 'design',
      label: '나의스크랩'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    value: seg,
    onChange: setSeg,
    items: [{
      value: 'reco',
      label: '추천'
    }, {
      value: 'new',
      label: '최신'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-alternative)'
    }
  }, /*#__PURE__*/React.createElement(BottomNavigation, {
    value: nav,
    onChange: setNav,
    items: [{
      value: 'home',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "home",
        size: 24
      }),
      label: '홈'
    }, {
      value: 'search',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 24
      }),
      label: '탐색'
    }, {
      value: 'saved',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "bookmark",
        size: 24
      }),
      label: '저장'
    }, {
      value: 'me',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "person",
        size: 24
      }),
      label: '마이'
    }]
  }))), /*#__PURE__*/React.createElement(H2, null, "Contents & feedback"), /*#__PURE__*/React.createElement(Example, {
    code: '<Card /> <SectionMessage /> <Toast /> <Tooltip />'
  }, /*#__PURE__*/React.createElement(Card, {
    width: 200,
    title: "\uAC1C\uBCC4\uC9C0\uB3C4 \uB178\uD558\uC6B0",
    caption: "\uAC15\uC0AC\uBA85 \xB7 \uAD50\uC721\uAE30\uAC04",
    badges: /*#__PURE__*/React.createElement(ContentBadge, {
      size: "xsmall"
    }, "\uC804\uCCB4")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: '1 1 260px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(SectionMessage, {
    variant: "info",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "circle-info",
      size: 20
    }),
    title: "\uC704\uD074\uB9AC \uD50C\uB79C\uC744 \uC81C\uCD9C\uD574 \uBCF4\uC138\uC694"
  }, "\uB9C8\uAC10\uC740 \uC6D4\uC694\uC77C \uC624\uD6C4 2\uC2DC\uAE4C\uC9C0 \uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Toast, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 20
    })
  }, "\uC704\uD074\uB9AC\uAC00 \uC800\uC7A5\uB418\uC5C8\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Tooltip, {
    size: "small",
    shortcut: "\u2318K"
  }, "\uAC80\uC0C9"))), /*#__PURE__*/React.createElement(H2, null, "Loading"), /*#__PURE__*/React.createElement(Example, {
    code: '<Skeleton variant="rectangle" /> <Skeleton variant="text" />'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangle",
    width: "100%",
    height: 120
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text",
    width: "80%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text",
    width: "55%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "circle",
    width: 40,
    height: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: 160
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text",
    width: "70%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text",
    width: "45%"
  })))));
}
function DocPage({
  section,
  page
}) {
  if (page === 'Button') return /*#__PURE__*/React.createElement(ButtonDoc, null);
  if (page === 'Color') return /*#__PURE__*/React.createElement(ColorDoc, null);
  return /*#__PURE__*/React.createElement(GalleryDoc, {
    page: page
  });
}
Object.assign(window, {
  DocPage,
  Example,
  PropsTable
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/eduplex-docs/DocPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/eduplex-docs/Gnb.jsx
try { (() => {
const {
  Icon
} = window.MontageDesignSystem_4afdc8;
function Gnb({
  section,
  onSection,
  theme,
  onTheme,
  onSearch
}) {
  const links = [{
    label: 'Getting started',
    slug: 'getting-started'
  }, {
    label: 'Foundations',
    slug: 'foundations'
  }, {
    label: 'Components',
    slug: 'components'
  }, {
    label: 'Utilities',
    slug: 'utilities'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: gnbStyles.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    style: gnbStyles.container
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: gnbStyles.logo,
    "aria-label": "\uC5D0\uB4C0\uD50C\uB809\uC2A4"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/logo/eduplex-main.svg",
    alt: "\uC5D0\uB4C0\uD50C\uB809\uC2A4",
    style: {
      height: 20,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 72
    }
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Quick Navigation Links",
    style: gnbStyles.nav
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.slug,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSection(l.slug);
    },
    "aria-current": section === l.slug ? 'page' : undefined,
    style: {
      ...gnbStyles.link,
      color: section === l.slug ? 'var(--semantic-label-normal)' : 'var(--semantic-label-alternative)'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "search",
    onClick: onSearch,
    style: gnbStyles.action
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    "aria-label": "toggle theme",
    onClick: onTheme,
    style: gnbStyles.action
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'light' ? 'sun' : 'moon',
    size: 22
  }))))));
}
const gnbStyles = {
  wrapper: {
    position: 'sticky',
    top: 0,
    zIndex: 1300,
    width: '100%',
    height: 'var(--gnb-height)',
    padding: '12px var(--layout-padding-inline)',
    boxSizing: 'border-box',
    display: 'flex',
    alignContent: 'center',
    backgroundColor: 'color-mix(in srgb, var(--semantic-background-normal-normal) 88%, transparent)',
    backdropFilter: 'blur(32px)'
  },
  container: {
    width: '100%',
    maxWidth: 'var(--layout-max-width)',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 32
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    height: 22,
    color: 'var(--semantic-label-normal)',
    textDecoration: 'none'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    height: 22
  },
  link: {
    padding: '12px 10px',
    fontSize: 15,
    lineHeight: '22px',
    letterSpacing: '0.0096em',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 22,
    height: 22,
    borderRadius: 12,
    background: 'transparent',
    color: 'var(--semantic-label-normal)',
    cursor: 'pointer'
  }
};
Object.assign(window, {
  Gnb
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/eduplex-docs/Gnb.jsx", error: String((e && e.message) || e) }); }

// ui_kits/eduplex-docs/Lnb.jsx
try { (() => {
const LNB_PAGES = {
  'getting-started': [{
    group: 'Overview',
    items: ['Introduction', 'Installation', 'Theming']
  }],
  foundations: [{
    group: 'Foundations',
    items: ['Overview', 'Color', 'Typography', 'Spacing', 'Elevation', 'Grid']
  }],
  components: [{
    group: 'Actions',
    items: ['Button', 'Icon Button', 'Text Button', 'Chip']
  }, {
    group: 'Selection & input',
    items: ['Text Field', 'Search Field', 'Select', 'Checkbox', 'Radio Group', 'Switch', 'Segmented Control']
  }, {
    group: 'Contents',
    items: ['Card', 'Content Badge', 'Avatar', 'Divider', 'Skeleton']
  }, {
    group: 'Feedback',
    items: ['Section Message', 'Toast', 'Tooltip']
  }, {
    group: 'Navigations',
    items: ['Top Navigation', 'Tab', 'Bottom Navigation']
  }],
  utilities: [{
    group: 'Utilities',
    items: ['Box', 'FlexBox', 'Grid', 'Typography']
  }]
};
function Lnb({
  section,
  page,
  onPage
}) {
  const groups = LNB_PAGES[section] || [];
  return /*#__PURE__*/React.createElement("aside", {
    style: lnbStyles.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    style: lnbStyles.scroll
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.group,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: lnbStyles.group
  }, g.group), g.items.map(item => {
    const on = item === page;
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onPage(item);
      },
      "aria-current": on ? 'page' : undefined,
      style: {
        ...lnbStyles.item,
        color: on ? 'var(--semantic-primary-normal)' : 'var(--semantic-label-alternative)',
        backgroundColor: on ? 'rgba(var(--semantic-primary-normal-rgb),0.05)' : 'transparent',
        fontWeight: on ? 600 : 500
      }
    }, item);
  })))));
}
const lnbStyles = {
  wrapper: {
    width: 190,
    flexShrink: 0,
    position: 'sticky',
    top: 'var(--gnb-height)',
    height: 'calc(100vh - var(--gnb-height))',
    overflow: 'hidden'
  },
  scroll: {
    padding: '56px 10px 20px',
    overflowY: 'auto',
    height: '100%',
    boxSizing: 'border-box'
  },
  group: {
    padding: '6px 10px',
    fontSize: 13,
    lineHeight: '18px',
    letterSpacing: '0.0194em',
    fontWeight: 600,
    color: 'var(--semantic-label-normal)'
  },
  item: {
    padding: '7px 10px',
    borderRadius: 8,
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '0.0145em',
    textDecoration: 'none',
    transition: 'color 0.2s ease, background-color 0.2s ease'
  }
};
Object.assign(window, {
  Lnb,
  LNB_PAGES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/eduplex-docs/Lnb.jsx", error: String((e && e.message) || e) }); }

// ui_kits/eduplex-docs/Sidebar.jsx
try { (() => {
function Sidebar({
  anchors,
  active,
  onAnchor
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 180,
      flexShrink: 0,
      position: 'sticky',
      top: 'var(--gnb-height)',
      height: 'fit-content',
      padding: '56px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: '18px',
      letterSpacing: '0.0194em',
      fontWeight: 600,
      color: 'var(--semantic-label-normal)',
      padding: '0 0 8px'
    }
  }, "On this page"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, anchors.map(a => /*#__PURE__*/React.createElement("a", {
    key: a,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onAnchor(a);
    },
    style: {
      padding: '5px 0',
      fontSize: 13,
      lineHeight: '18px',
      letterSpacing: '0.0194em',
      textDecoration: 'none',
      fontWeight: a === active ? 600 : 400,
      color: a === active ? 'var(--semantic-label-normal)' : 'var(--semantic-label-assistive)',
      transition: 'color 0.2s ease'
    }
  }, a))));
}
function Footer() {
  const links = ['GitHub', 'Figma', 'Changelog', 'Contributing'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: '32px 0',
      marginTop: 120
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: 1,
      backgroundColor: 'var(--semantic-line-normal-alternative)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 14,
      lineHeight: '142.9%',
      letterSpacing: '0.203px',
      fontWeight: 600,
      color: 'var(--semantic-label-neutral)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: '18px',
      letterSpacing: '0.0194em',
      color: 'var(--semantic-label-assistive)'
    }
  }, "\uC5D0\uB4C0\uD50C\uB809\uC2A4 \uB9C8\uCF00\uD305 \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C \xB7 @eduplexmkt/mkt-design-system"));
}
Object.assign(window, {
  Sidebar,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/eduplex-docs/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextButton = __ds_scope.TextButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ContentBadge = __ds_scope.ContentBadge;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.SectionMessage = __ds_scope.SectionMessage;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.BottomNavigation = __ds_scope.BottomNavigation;

__ds_ns.Tab = __ds_scope.Tab;

__ds_ns.TopNavigation = __ds_scope.TopNavigation;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

})();
