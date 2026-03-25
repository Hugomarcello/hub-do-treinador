<script>
    // Objeto para armazenar os dados do seu clube
    const MeuClube = {
        caixa: 100000000, // 100 Milhões iniciais
        distribuicao: {
            estadio: 0.4,      // 40%
            contratacoes: 0.4, // 40%
            reserva: 0.2       // 20%
        }
    };

    // Função para calcular o custo real de um jogador (Padrão 1,5x)
    function calcularCustoReal(valorMercado) {
        return valorMercado * 1.5;
    }

    // Função para atualizar o Dashboard visualmente
    function atualizarDashboard() {
        const formatador = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
        
        // Atualiza o card de caixa principal
        document.getElementById('caixa-valor').innerText = formatador.format(MeuClube.caixa);
        
        console.log("Dashboard atualizado com sucesso!");
    }

    // Função de Planejamento Financeiro Automático
    function planejarOrcamento(valorTotal) {
        const plano = {
            estadio: valorTotal * MeuClube.distribuicao.estadio,
            contratacoes: valorTotal * MeuClube.distribuicao.contratacoes,
            reserva: valorTotal * MeuClube.distribuicao.reserva
        };
        
        return plano;
    }

    // Inicialização ao carregar a página
    window.onload = () => {
        atualizarDashboard();
    };
</script>