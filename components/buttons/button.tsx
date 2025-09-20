import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

const button = cva("rounded-full flex-row items-center justify-center", {
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      outline: "border border-gray-400 bg-transparent",
      white: "bg-white",
      subtle: "",
    },
    size: {
      sm: "px-3 py-2",
      md: "px-4 py-3",
      lg: "px-6 py-4",
      xl: "px-8 py-5",
      icons: "p-5 rounded-full",
    },
    disabled: {
      true: "opacity-50",
    },
  },
  compoundVariants: [
    {
      variant: "subtle",
      size: "icons",
      className: "bg-[rgba(0,0,0,0.25)] p-5 rounded-full",
    },
    {
      variant: "subtle",
      size: ["sm", "md", "lg", "xl"],
      className: "bg-[rgba(0,0,0,0.25)]",
    },
  ],
  defaultVariants: {
    variant: "secondary",
    size: "md",
  },
});

type ButtonProps = TouchableOpacityProps &
  VariantProps<typeof button> & {
    children: React.ReactNode;
    isLoading?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

export function Button({
  variant,
  size,
  children,
  disabled,
  isLoading,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) {
  const isSubtle = variant === "subtle";

  return (
    <TouchableOpacity
      disabled={disabled || isLoading}
      {...props}
      className={`${button({
        variant,
        size,
        disabled: disabled ? true : undefined,
      })} ${props.className}`}
    >
      {isLoading ? (
        <ActivityIndicator color={isSubtle ? "#8E97FD" : "#fff"} />
      ) : (
        <View className="flex-row items-center">
          {iconLeft ? <View className="mr-2">{iconLeft}</View> : null}
          <Text
            className={`font-semibold ${
              isSubtle ? "text-primary" : "text-white"
            }`}
          >
            {children}
          </Text>
          {iconRight ? <View className="ml-2">{iconRight}</View> : null}
        </View>
      )}
    </TouchableOpacity>
  );
}
