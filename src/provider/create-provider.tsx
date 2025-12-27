import React, { createContext, useContext, useMemo } from "react";

/**
 * Generic context value type.
 * Wraps props in an object for React context consumption.
 *
 * @template T - The props type
 */
type GenericContext<T> = {
  props: T;
};

/**
 * Creates a type-safe context with provider and hook.
 * Useful for creating component-level contexts for sharing props.
 *
 * @template T - The type of props to share via context
 * @returns Object containing CTXProvider component and useCTX hook
 *
 * @example
 * ```ts
 * // Define props type
 * type ButtonContextProps = {
 *   size: "sm" | "md" | "lg";
 *   variant: "primary" | "secondary";
 *   disabled?: boolean;
 * };
 *
 * // Create context
 * const { CTXProvider: ButtonProvider, useCTX: useButtonContext } =
 *   createCTX<ButtonContextProps>();
 *
 * // Use in parent component
 * function ButtonGroup({ children }) {
 *   return (
 *     <ButtonProvider props={{ size: "md", variant: "primary" }}>
 *       {children}
 *     </ButtonProvider>
 *   );
 * }
 *
 * // Use in child component
 * function ButtonText() {
 *   const context = useButtonContext();
 *   // context?.size, context?.variant, etc.
 * }
 * ```
 */
export function createCTX<T>() {
  const Context = createContext<GenericContext<T> | undefined>(undefined);

  /**
   * Context Provider component.
   * Wraps children and provides the props value to all descendants.
   *
   * @param children - React children nodes
   * @param props - The props object to provide to context consumers
   */
  function CTXProvider({
    children,
    props,
  }: React.PropsWithChildren<{ props: T }>) {
    const value = useMemo(() => ({ props }), [props]);

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  /**
   * Hook to consume the context value.
   * Returns undefined if used outside of a CTXProvider.
   *
   * @returns The context props or undefined if outside provider
   */
  function useCTX(): T | undefined {
    const context = useContext(Context);

    if (!context) {
      return undefined;
    }

    return context.props;
  }

  /**
   * Hook that requires context to be present.
   * Throws an error if used outside of a CTXProvider.
   *
   * @param componentName - Name of the component using the hook (for error messages)
   * @returns The context props (guaranteed to be defined)
   * @throws Error if used outside of CTXProvider
   */
  function useRequiredCTX(componentName: string = "Component"): T {
    const context = useContext(Context);

    if (!context) {
      throw new Error(
        `${componentName} must be used within a CTXProvider. ` +
        `Make sure to wrap your component tree with the appropriate provider.`
      );
    }

    return context.props;
  }

  return {
    /** Provider component that makes context available to children */
    CTXProvider,
    /** Hook to optionally consume context (returns undefined if outside provider) */
    useCTX,
    /** Hook that requires context (throws if outside provider) */
    useRequiredCTX,
  };
}
