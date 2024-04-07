import type { MDXComponents } from "mdx/types";
import { css } from "./styled-system/css";
import { Link } from "./modules/components/link/Link";
import { hstack, vstack } from "./styled-system/patterns";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        className={css({
          textStyle: "3xl",
        })}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className={css({
          textStyle: "2xl",
        })}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={css({
          textStyle: "xl",
        })}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        className={css({
          textStyle: "lg",
        })}
      >
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5
        className={css({
          textStyle: "base",
        })}
      >
        {children}
      </h5>
    ),
    a: ({ children, href }) => (
      <Link
        href={href ?? "#"}
        className={css({
          color: "primary",
          "&:hover": {
            color: "secondary",
          },
        })}
      >
        {children}
      </Link>
    ),
    Caption: ({ children }) => (
      <p
        className={css({
          textStyle: "sm",
          color: "gray.500",
          pt: 2,
        })}
      >
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className={css({
          padding: 4,
          borderLeft: "2px solid",
          borderColor: "gray.500",
          backgroundColor: "gray.100",
          rounded: "md",
          roundedLeft: "initial",
        })}
      >
        {children}
      </blockquote>
    ),
    pre: ({ children }) => (
      <pre
        className={css({
          backgroundColor: "gray.100",
          padding: 4,
          rounded: "md",
          overflowX: "auto",
          color: "green.800",
        })}
      >
        {children}
      </pre>
    ),
    Block: ({ children, color }) => (
      <div
        className={css({
          padding: 4,
          boxShadow: "sm",
          rounded: "md",
          overflowX: "auto",
          marginBottom: 8,
        })}
        style={{ backgroundColor: color }}
      >
        {children}
      </div>
    ),
    Space: ({ children }) => (
      <div
        className={css({
          marginBottom: 8,
        })}
      >
        {children}
      </div>
    ),
    VStack: ({ children }) => (
      <div
        className={vstack({
          gap: 4,
          alignItems: "stretch",
        })}
      >
        {children}
      </div>
    ),
    HStack: ({ children }) => (
      <div
        className={hstack({
          gap: 4,
          justifyContent: "stretch",
        })}
      >
        {children}
      </div>
    ),
    hr: () => (
      <hr
        className={css({
          border: 0,
          borderBottom: "1px solid",
          borderColor: "gray.200",
          my: 8,
        })}
      />
    ),
    ...components,
  };
}
