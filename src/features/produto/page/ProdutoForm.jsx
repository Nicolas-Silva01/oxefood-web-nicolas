import { useState } from "react";
import { IMaskInput } from 'react-imask';
import { toast } from 'react-toastify';
import BackButton from "../../../shared/components/BackButton";
import Breadcrumbs from "../../../shared/components/Breadcrumbs";
import Footer from "../../../shared/components/Footer";
import Menu from "../../../shared/components/Menu";
import SaveButton from "../../../shared/components/SaveButton";
import { cadastrar } from "../../../shared/services/crudService";
import { MAPPING_CONTROLLER_PRODUTO } from "../../produto/service/produtoService";

export default function ProdutoForm() {

    const [produto, setProduto] = useState({
        codigo: "",
        titulo: "",
        descricao: "",
        valorUnitario: "",
        tempoEntregaMinimo: "",
        tempoEntregaMaximo: ""
    });

    async function salvar() {
        
        try {
            await cadastrar(MAPPING_CONTROLLER_PRODUTO, produto);
            toast.success("Produto cadastrado com sucesso!");
        } catch (erro) {
            toast.error("Erro ao cadastrar produto.");
        }
    }

    return (

        <div>
            <Menu />

            <Breadcrumbs items={[
                { label: "Produto" },
                { label: "Cadastrar" }
            ]} />
<div style={{ marginTop: '40px', marginLeft: '10%', marginRight: '10%' }}>

                <div className="overflow-x-auto shadow-sm">

                    <div className="flex items-center justify-between mb-6" style={{marginTop: '20px', marginLeft: '10px', marginRight: '10px'}}>

                        <h1 className="text-3xl font-bold text-gray-800">
                            Novo Produto
                        </h1>

                    </div>

                    <div className="divider divider-info" />

                    <div className="overflow-x-auto" style={{padding: '30px'}}>
                        <form>

                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="titulo">Título</label>
                                        <input
                                            type="text"
                                            id="titulo"
                                            className="input input-bordered w-full"
                                            value={produto.titulo}
                                            onChange={(e) => 
                                                setProduto({ ...produto, titulo: e.target.value }) 
                                            }
                                        />
                                    </fieldset>
                                    
                                </div>

<div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="codigo">Código</label>
                                        <IMaskInput
                                            mask="0000-0000"
                                            value={produto.codigo}
                                            onAccept={(value) =>
                                                setProduto({ ...produto, codigo: value })
                                            }
                                            className="input input-bordered w-full"
                                            id="codigo"
                                        />
                                    </fieldset>

                                </div>
                            </div>

                            <div>
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="descricao">Descrição</label>
                                        <IMaskInput
                                        type="text"
                                        id="descricao"
                                            value={produto.descricao}
                                            onAccept={(value) =>
                                                setProduto({ ...produto, descricao: value })
                                            }
                                            className="input input-bordered w-full"
                                        />
                                    </fieldset>
                                    
                                </div>
                            </div>

                            <div className="flex w-full" >

<div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="valorUnitario">Valor Unitário</label>
                                        <IMaskInput
                                            type="value"
                                            value={produto.valorUnitario}
                                            onAccept={(value) =>
                                                setProduto({ ...produto, valorUnitario: value })
                                            }
                                            className="input input-bordered w-full"
                                            id="valorUnitario"
                                        />
                                    </fieldset>
                                    
                                </div>
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend" htmlFor="tempoEntregaMinimo">Tempo de Entrega Mínimo</legend>
                                        <input 
                                            type="time"  
                                            id="tempoEntregaMinimo" 
                                            className="input input-bordered w-full"
                                            value={produto.tempoEntregaMinimo} 
                                            onChange={(e) => 
                                                setProduto({ ...produto, tempoEntregaMinimo: e.target.value }) 
                                            }
                                        />
                                    </fieldset>

                                </div>

                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend" htmlFor="tempoEntregaMaximo">Tempo de Entrega Máximo</legend>
                                        <input 
                                            type="time"  
                                            id="tempoEntregaMaximo" 
                                            className="input input-bordered w-full"
                                            value={produto.tempoEntregaMaximo} 
                                            onChange={(e) => 
                                                setProduto({ ...produto, tempoEntregaMaximo: e.target.value }) 
                                            }
                                        />
                                    </fieldset>

                                </div>
                            </div>

<div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <div style={{marginTop: '50px', textAlign: 'left'}}>
                                        <BackButton destino="/cliente" />
                                    </div>
                                    
                                </div>
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <div style={{marginTop: '50px', textAlign: 'right'}}>
                                        <SaveButton save={() => salvar()} />
                                    </div>

                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <Footer />

        </div>

    );
}