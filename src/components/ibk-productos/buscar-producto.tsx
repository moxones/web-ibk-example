import { Component, h, Prop, State, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: 'buscar-producto'
})

export class ProductoCard {
    @Prop({ mutable: true }) searchText: string;
    @State() searchResult: { name: string; marketOpen: string }[] = [];
    @State() userInput: string;

    onUserInput(event: Event) {
        this.userInput = (event.target as HTMLInputElement).value;
        this.searchText = this.userInput;
      }

    buscarProducto() {
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

    @Event({ bubbles: true, composed: true }) searchWorldNameSelected: EventEmitter<string>;

    onRowClick(name: string) {
        this.searchWorldNameSelected.emit(name);
    }

    render() {
        return (
            <div class="main-search-div">
                <input class="my-input-textbox" type="text" value={this.searchText} onInput={this.onUserInput.bind(this)}></input>
                <button class="btn-react" onClick={this.buscarProducto.bind(this)}>
                    Busca Producto
                </button>
                <hr></hr>
                <br></br> <br></br>

                <table id="api-table">
                    {this.searchResult.map(r => (
                        <tr onClick={this.onRowClick.bind(this, r.name)}>
                            <td>{r.name}</td>
                            <td>{r.marketOpen}</td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}