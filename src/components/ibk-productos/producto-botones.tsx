import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'producto-botones'
})

export class ProductoBotones {

    render() {
        return (
            <button type="button">
                agregar producto
            </button>
        )
    }
}