// Lista Inicial de Participantes
let listaInscritos = [];
console.log('Lista inicial:', listaInscritos);
console.log('Quantidade de inscritos:', listaInscritos.length);

// Adicionando participantes iniciais
listaInscritos.push('João Silva');
listaInscritos.push('Maria Santos');
listaInscritos.push('Pedro Almeida');
console.log('Após adicionar participantes:', listaInscritos);
console.log('Quantidade de inscritos:', listaInscritos.length);

// Nova inscrição: Ana Pereira
console.log('Antes de Ana Pereira:', listaInscritos);
listaInscritos.push('Ana Pereira');
console.log('Depois de Ana Pereira:', listaInscritos);

// Participante VIP: Carlos Mendes
console.log('Antes do VIP Carlos Mendes:', listaInscritos);
listaInscritos.unshift('Carlos Mendes');
console.log('Depois do VIP Carlos Mendes:', listaInscritos);

// Remover o último inscrito (simulando desistência de Pedro Almeida)
console.log('Antes de remover o último:', listaInscritos);
let removidoUltimo = listaInscritos.pop();
console.log('Removido do final:', removidoUltimo);
console.log('Após remoção do último:', listaInscritos);

// Remover o primeiro inscrito (Carlos Mendes para lista especial)
console.log('Antes de remover o primeiro:', listaInscritos);
let removidoPrimeiro = listaInscritos.shift();
console.log('Removido do início:', removidoPrimeiro);
console.log('Após remoção do primeiro:', listaInscritos);

// Organizar para sorteio (ordem alfabética)
console.log('Antes de ordenar:', listaInscritos);
listaInscritos.sort();
console.log('Após ordenar (alfabética):', listaInscritos);

// Inverter ordem para sorteio
console.log('Antes de inverter:', listaInscritos);
listaInscritos.reverse();
console.log('Após inverter (alfabética inversa):', listaInscritos);
