// reference: https://github.com/olup/react-hook-mousetrap
import mousetrap, { ExtendedKeyboardEvent } from "mousetrap";
import { useEffect, useRef } from "react";

/**
 * Use mousetrap hook
 *
 * @param  {(string | string[])} handlerKey - A key, key combo or array of combos according to Mousetrap documentation.
 * @param  { function } handlerCallback - A function that is triggered on key combo catch.
 * @param  { string } evtType - A string that specifies the type of event to listen for. It can be 'keypress', 'keydown' or 'keyup'.
 */
const useMousetrap = (handlerKey: string | string[], handlerCallback: () => void, evtType?: "keypress" | "keydown" | "keyup") => {
  var actionRef: any
  actionRef = useRef(null);
  actionRef.current = handlerCallback;

  useEffect(() => {
    mousetrap.bind(handlerKey, (evt: ExtendedKeyboardEvent, combo: string | string[]) => {
      typeof actionRef.current === "function" && actionRef.current(evt, combo);
    }, evtType);
    return () => {
      mousetrap.unbind(handlerKey, evtType);
    };
  }, [handlerKey, actionRef, evtType]);
};

export default useMousetrap
