/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BuscarProducto {
        "searchText": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface ProductoBotones {
    }
    interface ProductoCard {
        "categoria": string;
        "nombre": string;
        "precio": number;
    }
}
declare global {
    interface HTMLBuscarProductoElement extends Components.BuscarProducto, HTMLStencilElement {
    }
    var HTMLBuscarProductoElement: {
        prototype: HTMLBuscarProductoElement;
        new (): HTMLBuscarProductoElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLProductoBotonesElement extends Components.ProductoBotones, HTMLStencilElement {
    }
    var HTMLProductoBotonesElement: {
        prototype: HTMLProductoBotonesElement;
        new (): HTMLProductoBotonesElement;
    };
    interface HTMLProductoCardElement extends Components.ProductoCard, HTMLStencilElement {
    }
    var HTMLProductoCardElement: {
        prototype: HTMLProductoCardElement;
        new (): HTMLProductoCardElement;
    };
    interface HTMLElementTagNameMap {
        "buscar-producto": HTMLBuscarProductoElement;
        "my-component": HTMLMyComponentElement;
        "producto-botones": HTMLProductoBotonesElement;
        "producto-card": HTMLProductoCardElement;
    }
}
declare namespace LocalJSX {
    interface BuscarProducto {
        "onSearchWorldNameSelected"?: (event: CustomEvent<string>) => void;
        "searchText"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface ProductoBotones {
    }
    interface ProductoCard {
        "categoria"?: string;
        "nombre"?: string;
        "precio"?: number;
    }
    interface IntrinsicElements {
        "buscar-producto": BuscarProducto;
        "my-component": MyComponent;
        "producto-botones": ProductoBotones;
        "producto-card": ProductoCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "buscar-producto": LocalJSX.BuscarProducto & JSXBase.HTMLAttributes<HTMLBuscarProductoElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "producto-botones": LocalJSX.ProductoBotones & JSXBase.HTMLAttributes<HTMLProductoBotonesElement>;
            "producto-card": LocalJSX.ProductoCard & JSXBase.HTMLAttributes<HTMLProductoCardElement>;
        }
    }
}
