
  
    // Criação e inspeção inicial
    const listaDeAfazeres = ["Comprar pão", "Estudar JavaScript", "Lavar louça"];
    console.log("Lista inicial:", listaDeAfazeres);
    console.log("Primeiro item (índice 0):", listaDeAfazeres[0]);
    console.log("Quantidade de itens:", listaDeAfazeres.length);

    // Adicionando novos afazeres
    listaDeAfazeres.push("Fazer exercícios");
    listaDeAfazeres.unshift("Agendar médico");
    console.log("Após push e unshift:", listaDeAfazeres);

    // Removendo afazeres concluídos
    const removidoFinal = listaDeAfazeres.pop();
    console.log(`Afazer removido do final: ${removidoFinal}`);

    const removidoInicio = listaDeAfazeres.shift();
    console.log(`Afazer removido do início: ${removidoInicio}`);

    console.log("Após pop e shift:", listaDeAfazeres);

    // Organizando e invertendo (sem alterar o original)
    const listaOrganizada = [...listaDeAfazeres]; // cópia para não alterar o original
    listaOrganizada.sort();
    console.log("Lista organizada (ordenada):", listaOrganizada);

    listaOrganizada.reverse();
    console.log("Lista organizada (invertida):", listaOrganizada);

    // Confirmação de que o original não foi alterado
    console.log("Lista original (sem alterações pela organização):", listaDeAfazeres);
 
