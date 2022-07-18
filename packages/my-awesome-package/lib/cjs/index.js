'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var react = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

var styles$1 = {"buttonContainer":"Button-module_buttonContainer__N1wEM","button":"Button-module_button__18Bed","disabled":"Button-module_disabled__UzdWL","default":"Button-module_default__TZZU2","sad":"Button-module_sad__NT00p","joyful":"Button-module_joyful__zaBic"};

const Button = (props) => {
    const { label, onClick, onBlur, disabled, variant = "default" } = props;
    return (jsxRuntime.jsx("div", Object.assign({ className: styles$1.buttonContainer }, { children: jsxRuntime.jsx("button", Object.assign({ className: classNames__default['default'](styles$1.button, disabled && styles$1.disabled, styles$1[variant]), onClick: onClick, onBlur: onBlur, disabled: disabled }, { children: label }), void 0) }), void 0));
};

var styles = {"container":"Container-module_container__exPuE","row":"Container-module_row__FLFIa","col":"Container-module_col__OEsK4","default":"Container-module_default__Qk3Ze","light":"Container-module_light__DysE4","dark":"Container-module_dark__gmd6I","large":"Container-module_large__ppkyo","small":"Container-module_small__9XjQx","noPadding":"Container-module_noPadding__lpIsj"};

const Container = (props) => {
    const { variant = "default", paddings = "noPadding", contentAlignment = "col", onBlur, children } = props;
    return (jsxRuntime.jsx("section", Object.assign({ className: classNames__default['default'](styles.container, styles[variant], styles[paddings], styles[contentAlignment]), onBlur: onBlur }, { children: children }), void 0));
};

const ErrorContext = react.createContext({
    error: "",
    setError: (_) => { },
    clearError: () => { }
});
const ErrorContextProvider = ({ children }) => {
    const [error, setError] = react.useState("");
    const clearError = () => {
        setError("");
    };
    const result = {
        error,
        setError,
        clearError
    };
    return (jsxRuntime.jsx(ErrorContext.Provider, Object.assign({ value: result }, { children: children }), void 0));
};

const useErrorContext = () => {
    return react.useContext(ErrorContext);
};

const GREETING_PERIOD_MS = 3000;
const useHello = () => {
    const intervalRef = react.useRef();
    react.useEffect(() => {
        let mounted = true;
        if (mounted) {
            intervalRef.current = setInterval(() => {
                if (mounted) {
                    console.info("Hello!");
                }
            }, GREETING_PERIOD_MS);
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            mounted = false;
        };
    }, []);
};

const MS_IN_SEC = 1000;
const convertDateToUnixTimestamp = (date) => {
    if (date === undefined || date === null) {
        throw new Error("The data param is nullable!");
    }
    if (typeof date === "object" && !("getTime" in date)) {
        throw new Error("It seems the date param doesn't have 'getTime' method defined");
    }
    return date.getTime() / MS_IN_SEC;
};

exports.Button = Button;
exports.Container = Container;
exports.ErrorContext = ErrorContext;
exports.ErrorContextProvider = ErrorContextProvider;
exports.convertDateToUnixTimestamp = convertDateToUnixTimestamp;
exports.useErrorContext = useErrorContext;
exports.useHello = useHello;
//# sourceMappingURL=index.js.map
