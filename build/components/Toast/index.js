function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
import toast, { useToaster } from "react-hot-toast";
import { useEventListener } from "usehooks-ts";
import { ToastContainerStyled, ToastStyled } from "./Toast.styles";
export function Toast(props) {
    var _useToaster = useToaster(), toasts = _useToaster.toasts, handlers = _useToaster.handlers;
    var startPause = handlers.startPause, endPause = handlers.endPause;
    useEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            toast.dismiss();
        }
    });
    return /*#__PURE__*/ React.createElement(ToastContainerStyled, _extends({
        onMouseEnter: startPause,
        onMouseLeave: endPause
    }, props), toasts.map(function(t) {
        var _t_message, _t_message1;
        t.duration = 5000;
        return /*#__PURE__*/ React.createElement(ToastStyled, {
            key: t.id,
            animation: t.visible,
            onClick: function() {
                return toast.dismiss(t.id);
            }
        }, ((_t_message = t.message) === null || _t_message === void 0 ? void 0 : _t_message.toString()) || ((_t_message1 = t.message) === null || _t_message1 === void 0 ? void 0 : _t_message1.toString()) || "");
    }));
}
