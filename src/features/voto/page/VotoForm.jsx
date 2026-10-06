import { useState } from "react";
import { IMaskInput } from 'react-imask';
import { toast } from 'react-toastify';
import BackButton from "../../../shared/components/BackButton";
import Breadcrumbs from "../../../shared/components/Breadcrumbs";
import Footer from "../../../shared/components/Footer";
import Menu from "../../../shared/components/Menu";
import SaveButton from "../../../shared/components/SaveButton";
import { cadastrar } from "../../../shared/services/crudService";
import { MAPPING_CONTROLLER_VOTO } from "../../voto/service/VotoService";

export default function VotoForm() {

    const [voto, setVoto] = useState({
        nomeEleitor: "",
        numeroRegistroEleitoral: "",
        dataVotacao: "",
        numeroCandidatoDepFederal: "",
        numeroCandidatoDepEstadual: "",
        numeroCandidatoSenador: "",
        numeroCandidatoGovernador: "",
        numeroCandidatoPresidente: ""
    });

    async function salvar() {
    try {
        await cadastrar(MAPPING_CONTROLLER_VOTO, voto);
        toast.success("Voto cadastrado com sucesso!");
    } catch (erro) {
        toast.error("Erro ao cadastrar voto.");
    }
}

    return (

        <div>
            <Menu />

            <Breadcrumbs items={[
                { label: "Voto" },
                { label: "Cadastrar" }
            ]} />
<div style={{ marginTop: '40px', marginLeft: '10%', marginRight: '10%' }}>

                <div className="overflow-x-auto shadow-sm">

                    <div className="flex items-center justify-between mb-6" style={{marginTop: '20px', marginLeft: '10px', marginRight: '10px'}}>

                        <h1 className="text-3xl font-bold text-gray-800">
                            Votação 2026
                        </h1>

                    </div>

                    <div className="divider divider-info" />

                    <div className="overflow-x-auto" style={{padding: '30px'}}>
                        <form>

                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="nomeEleitor">Nome do Eleitor</label>
                                        <input
                                            type="text"
                                            id="nomeEleitor"
                                            className="input input-bordered w-full"
                                            value={voto.nomeEleitor}
                                            onChange={(e) => 
                                                setVoto({ ...voto, nomeEleitor: e.target.value }) 
                                            }
                                        />
                                    </fieldset>
                                    
                                </div>

                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="numeroRegistroEleitoral">Numero de Registro Eleitoral</label>
                                        <IMaskInput
                                            mask="000000-000"
                                            value={voto.numeroRegistroEleitoral}
                                            onAccept={(value) =>
                                                setVoto({ ...voto, numeroRegistroEleitoral: value })
                                            }
                                            className="input input-bordered w-full"
                                            id="numeroRegistroEleitoral"
                                        />
                                    </fieldset>

                                </div>
                            </div>

                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="numeroCandidatoDepFederal">Deputado Federal</label>
                                        <IMaskInput
                                            mask="000000"
                                            value={voto.numeroCandidatoDepFederal}
                                            onAccept={(value) =>
                                                setVoto({ ...voto, numeroCandidatoDepFederal: value })
                                            }
                                            className="input input-bordered w-full"
                                            id="numeroCandidatoDepFederal"
                                        />
                                    </fieldset>
                                    
                                </div>

                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="numeroCandidatoDepEstadual">Deputado Estadual</label>
                                        <IMaskInput
                                            mask="000000"
                                            value={voto.numeroCandidatoDepEstadual}
                                            onAccept={(value) =>
                                                setVoto({ ...voto, numeroCandidatoDepEstadual: value })
                                            }
                                            className="input input-bordered w-full"
                                            id="numeroCandidatoDepEstadual"
                                        />
                                    </fieldset>
                                    
                                </div>

                            </div>

                                <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="numeroCandidatoSenador">Senador</label>
                                        <IMaskInput
                                            mask="000"
                                            value={voto.numeroCandidatoSenador}
                                            onAccept={(value) =>
                                                setVoto({ ...voto, numeroCandidatoSenador: value })
                                            }
                                            className="input input-bordered w-full"
                                            id="numeroCandidatoSenador"
                                        />
                                    </fieldset>
                                    
                                </div>

                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="numeroCandidatoGovernador">Governador</label>
                                        <IMaskInput
                                            mask="00"
                                            value={voto.numeroCandidatoGovernador}
                                            onAccept={(value) =>
                                                setVoto({ ...voto, numeroCandidatoGovernador: value })
                                            }
                                            className="input input-bordered w-full"
                                            id="numeroCandidatoGovernador"
                                        />
                                    </fieldset>
                                    
                                </div>

                            </div>

                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <fieldset className="fieldset w-full">
                                        <label className="fieldset-legend" htmlFor="numeroCandidatoPresidente">Presidente</label>
                                        <IMaskInput
                                            mask="00"
                                            value={voto.numeroCandidatoPresidente}
                                            onAccept={(value) =>
                                                setVoto({ ...voto, numeroCandidatoPresidente: value })
                                            }
                                            className="input input-bordered w-full"
                                            id="numeroCandidatoPresidente"
                                        />
                                    </fieldset>
                                    
                                </div>
                                
                            </div>

                            <div className="flex w-full" >
                                <div className="card rounded-box grid grow p-8" style={{padding: '30px'}}>

                                    <div style={{marginTop: '50px', textAlign: 'left'}}>
                                        <BackButton destino="/voto" />
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