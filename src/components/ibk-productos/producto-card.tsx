import { Component, h, Prop, State } from "@stencil/core";

@Component({
    tag: 'producto-card'
})

export class ProductoCard {
    @Prop() nombre: string = '';
    @Prop() categoria: string = '';
    @Prop() precio: number;
    @State() searchResult: { name: string; marketOpen: string }[] = [];


    buscar() {
        fetch('https://localhost:3000/')
          .then(res => {
            return res.json();
          })
          .then(parsedRes => {
            var metaData = parsedRes['bestMatches'];
            this.searchResult = metaData.map(d => {
              return {
                nombre: d['nombre'],
                categoria: d['categoria'],
                precio: d['precio'],
              };
            });
          });
      }

    render() {
        return (
            <div>
                <div class="card">
                    <h1>{this.nombre}</h1>
                    <h5>{this.categoria}</h5>
                    <h5>{this.precio}xxxxxxx</h5>
                </div>
            </div>
        )
    }
}