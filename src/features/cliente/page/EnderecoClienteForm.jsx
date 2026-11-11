import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMaskInput } from 'react-imask';
import { toast } from 'react-toastify';
import BackButton from "../../../shared/components/BackButton";
import Breadcrumbs from "../../../shared/components/Breadcrumbs";
import Footer from "../../../shared/components/Footer";
import Menu from "../../../shared/components/Menu";
import SaveButton from "../../../shared/components/SaveButton";
import { buscarPorId, cadastrar } from "../../../shared/services/crudService";
import { MAPPING_CONTROLLER_CLIENTE } from "../../cliente/service/clienteService";
import { useParams } from "react-router-dom";

export default function EnderecoClienteForm() {

    const { idCliente } = useParams();

    const [enderecocliente, setEnderecoCliente] = useState({
        id: "",
        rua: "",
        numero: "",
        bairro: "",
        cep: "",
        cidade: "",
        estado: "",
        complemento: ""
    });

    async function carregarEnderecoCliente() {

       try {

           const data = await buscarPorId(
               MAPPING_CONTROLLER_CLIENTE,
               idCliente
           );

           setCliente({
               id: data.id,
               rua: data.rua ?? "",
               numero: data.numero ?? "",
               bairro: data.bairro ?? "",
               cep: data.cep ?? "",
               cidade: data.cidade ?? "",
               estado: data.estado ?? "",
               complemento: data.complemento ?? ""
           });

       } catch (erro) {
           toast.error("Erro ao carregar endereço do cliente.");
       }
   }


    async function salvar() {
        
        try {
            await cadastrar(MAPPING_CONTROLLER_CLIENTE, enderecocliente);
            toast.success("Endereço do cliente cadastrado com sucesso!");
        } catch (erro) {
            toast.error("Erro ao cadastrar o endereço do cliente.");
        }
    }

    const navigate = useNavigate();

    useEffect(() => {

        if (idCliente) {
           carregarCliente();
       }

   }, [idCliente]);

    return (

        <div>
            <Menu />

            <Breadcrumbs items={[
                { label: "Endereço" },
                { label: "Cadastrar" }
                ]} />
            <div style={{ marginTop: '40px', marginLeft: '10%', marginRight: '10%' }}>

                <div className="overflow-x-auto shadow-sm">

                    <div className="flex items-center justify-between mb-6" style={{marginTop: '20px', marginLeft: '10px', marginRight: '10px'}}>

                        <h1 className="text-3xl font-bold text-gray-800">
                            Cadastro do Endereço
                        </h1>

                    </div>

                    <div className="divider divider-info" />

                    <div className="overflow-x-auto" style={{padding: '30px'}}>
                        <form>

                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="rua">Rua</label>
                                        <input
                                            type="text"
                                            id="rua"
                                            className="input input-bordered w-full"
                                            value={enderecocliente.rua}
                                            onChange={(e) => 
                                                setEnderecoCliente({ ...enderecocliente, rua: e.target.value }) 
                                            }
                                        />
                                    </fieldset>
                                    
                                </div>
            <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="cpf">numero</label>
                                        <IMaskInput
                                            type="text"
                                            value={enderecocliente.numero}
                                            onAccept={(value) =>
                                                setEnderecoCliente({ ...enderecocliente, numero: value })
                                            }
                                            className="input input-bordered w-full"
                                            id="numero"
                                        />
                                    </fieldset>

                                </div>
                            </div>

                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="bairro">Bairro</label>
                                        <IMaskInput
                                            type="text"
                                            value={enderecocliente.bairro}
                                            onAccept={(value) =>
                                                setEnderecoCliente({ ...enderecocliente, bairro: value })
                                            }
                                            className="input input-bordered w-full"
                                            id="bairro"
                                        />
                                    </fieldset>
                                    
                                </div>
            <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="cep">CEP</label>
                                        <IMaskInput
                                            mask="0000-000"
                                            value={enderecocliente.cep}
                                            onAccept={(value) =>
                                                setEnderecoCliente({ ...enderecocliente, cep: value })
                                            }
                                            className="input input-bordered w-full"
                                            id="cep"
                                        />
                                    </fieldset>
                                    
                                </div>
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend" htmlFor="cidade">Cidade</legend>
                                        <input 
                                            type="text"  
                                            id="cidade" 
                                            className="input input-bordered w-full"
                                            value={enderecocliente.cidade} 
                                            onChange={(e) => 
                                                setEnderecoCliente({ ...enderecocliente, cidade: e.target.value }) 
                                            }
                                        />
                                    </fieldset>

                                </div>

                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend" htmlFor="estado">Estado</legend>
                                        <input 
                                            type="text"  
                                            id="estado" 
                                            className="input input-bordered w-full"
                                            value={enderecocliente.estado} 
                                            onChange={(e) => 
                                                setEnderecoCliente({ ...enderecocliente, estado: e.target.value }) 
                                            }
                                        />
                                    </fieldset>

                                </div>

                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <legend className="fieldset-legend" htmlFor="complemento">Complemento</legend>
                                        <input 
                                            type="text"  
                                            id="complemento" 
                                            className="input input-bordered w-full"
                                            value={enderecocliente.complemento} 
                                            onChange={(e) => 
                                                setEnderecoCliente({ ...enderecocliente, complemento: e.target.value }) 
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
