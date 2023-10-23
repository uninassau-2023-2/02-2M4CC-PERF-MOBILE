import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AtendimentoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filaSP: [],
      filaSG: [],
      filaSE: [],
      guiches: {
        AS: 'Disponível',
        AA: 'Disponível',
        AC: 'Disponível',
      },
      tempoMedioSP: 15,
      tempoMedioSG: 5,
      tempoMedioSE: 1,
      expedienteAberto: false, // Flag para controlar o expediente
      ultimasSenhasChamadas: [],
    };
  }

  abrirExpediente = () => {
    this.setState({ expedienteAberto: true });
  };

  fecharExpediente = () => {
    this.setState({ expedienteAberto: false });
  };

  // Função para chamar o próximo cliente de acordo com a sequência especificada
  chamarProximoCliente = (agente) => {
    const { guiches, expedienteAberto } = this.state;

    if (!expedienteAberto) {
      alert('Expediente encerrado.');
      return;
    }

    if (agente === 'AA') {
      alert('O Agente Atendente não pode chamar senhas diretamente.');
      return;
    }

    const sequencia = ['SP', 'SE', 'SG'];
    for (const tipoSenha of sequencia) {
      if (this.state[`fila${tipoSenha}`].length > 0) {
        const proximoCliente = this.state[`fila${tipoSenha}`].shift();
        guiches[agente] = `Atendendo ${proximoCliente}`;
        this.state.ultimasSenhasChamadas.unshift(proximoCliente);

        // Manter apenas as últimas 5 senhas chamadas
        if (this.state.ultimasSenhasChamadas.length > 5) {
          this.state.ultimasSenhasChamadas.pop();
        }

        this.setState({ guiches });
        return;
      }
    }

    guiches[agente] = 'Disponível';
    this.setState({ guiches });
  };

  // Função para adicionar um cliente à fila de acordo com o tipo de senha
  adicionarClienteFila = (tipoSenha) => {
    if (!this.state.expedienteAberto) {
      alert('Expediente encerrado.');
      return;
    }

    const novoCliente = this.gerarNumeroSenha(tipoSenha);
    this.state[`fila${tipoSenha}`].push(novoCliente);
    this.setState({ [`fila${tipoSenha}`]: this.state[`fila${tipoSenha}`] });
  };

  // Função para gerar o número da senha no formato YYMMDD-PPSQ
  gerarNumeroSenha = (tipoSenha) => {
    const data = new Date();
    const ano = data.getFullYear().toString().substring(2, 4);
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    const tipo = tipoSenha;
    const sequencial = (this.state[`fila${tipoSenha}`].length + 1).toString().padStart(2, '0');
    return `${ano}${mes}${dia}-${tipo}${sequencial}`;
  };

  render() {
    const { guiches, ultimasSenhasChamadas, expedienteAberto } = this.state;

    return (
      <View>
        <Text>Fila de Atendimento:</Text>
        <Text>Senhas Prioritárias: {this.state.filaSP.join(', ')}</Text>
        <Text>Senhas Gerais: {this.state.filaSG.join(', ')}</Text>
        <Text>Senhas de Exames: {this.state.filaSE.join(', ')}</Text>

        <View style={{ marginTop: 20 }}>
          <Button
            title="Abrir Expediente"
            onPress={this.abrirExpediente}
            disabled={expedienteAberto}
          />
          <Button
            title="Fechar Expediente"
            onPress={this.fecharExpediente}
            disabled={!expedienteAberto}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Button
            title="Adicionar Cliente SP"
            onPress={() => this.adicionarClienteFila('SP')}
          />
          <Button
            title="Adicionar Cliente SG"
            onPress={() => this.adicionarClienteFila('SG')}
          />
          <Button
            title="Adicionar Cliente SE"
            onPress={() => this.adicionarClienteFila('SE')}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Button
            title="Chamar Próximo Cliente (AS)"
            onPress={() => this.chamarProximoCliente('AS')}
          />
          <Text>Agente Sistema: {guiches.AS}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Button
            title="Chamar Próximo Cliente (AA)"
            onPress={() => this.chamarProximoCliente('AA')}
          />
          <Text>Agente Atendente: {guiches.AA}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Button
            title="Chamar Próximo Cliente (AC)"
            onPress={() => this.chamarProximoCliente('AC')}
          />
          <Text>Agente Cliente: {guiches.AC}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>Últimas 5 Senhas Chamadas: {ultimasSenhasChamadas.join(', ')}</Text>
        </View>
      </View>
      
      
      
    );
  }
}

export default AtendimentoApp;