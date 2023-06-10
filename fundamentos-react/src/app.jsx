import './app.css'

import Primeiro from './components/basico/Primeiro'
import ComParametro from './components/basico/ComParametro';
import Fragmento from './components/basico/fragmentos';
import Aleatorio from './components/basico/Aleatorio'
import Card from './components/layout/card'
import Familia from './components/basico/Familia'
import Familia2 from './components/basico/Familia2'
import Membro from './components/basico/Membro'
import ListaAluno from './components/lista/Alunos';
import ListaProduto from './components/lista/Produto'
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contator/Contador';
import Mega from './components/mega/Mega';




export default _ =>
<div className="app">
    <h1>Fundamentos React</h1>

    <div className='cards'> 

        <Card titulo="Mega" color="#00a33a" >
            <Mega />
        </Card>    

        <Card titulo="Contator" color="#00a33a" >
            <Contador numeroInicial={10} />
        </Card>    

        <Card titulo="Component Input" color="#00a33a" >
            <Input />
        </Card>    

        <Card titulo="Comunicaçã Indireta" color="#00a33a" >
            <IndiretaPai />
        </Card>    

        <Card titulo="Comunicaçã Direta" color="#00a33a" >
            <DiretaPai />
        </Card>       
        
        <Card titulo="Renderizar Par ou Impar" color="#00a33a" >
            <ParOuImpar numero={20} />
            <UsuarioInfo usuario= {{nome: "Carlos Roberto"}}/>
            <UsuarioInfo usuario= {{email: "teste@teste.com.br"}}/>
            <UsuarioInfo />
        </Card>       

        <Card titulo="Lista de Produtos" color="#00a33a" >
            <ListaProduto />
        </Card>       
        
        <Card titulo="Lista de Alunos" color="#00a33a" >
            <ListaAluno />
        </Card>       

        <Card titulo="Familia de membros 2" color="#00a33a" >
            <Familia2 sobrenome="Silva">
                <Membro nome="Ruthe"  />
                <Membro nome="Raquel" /> 
                <Membro nome="Rebeca" />
            </Familia2>
        </Card>    

        <Card titulo="Familia de membros" color="#00a33a" >
            <Familia sobrenome="Ferreira"/>
        </Card>       

        <Card titulo="Desafio Aleatório" color="#00b33a" >
            <Aleatorio min={2} max={20} />    
        </Card>   

        <Card titulo="Fragmento" color="#00c37c">
            <Fragmento /> 
        </Card>   
        
        <Card titulo="Situação do Aluno" color="#5ad3ca">
            <ComParametro
                titulo="Situação do Aluno" 
                aluno="Pedro"
                nota={9.7}
                />
        </Card>   
        
        <Card titulo="Primeiro Componente" color="#ff6666">
            <Primeiro />
        </Card>   
    </div>
</div>