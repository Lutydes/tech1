// Dados dos grupos e temas (Hardcoded com base na extração e na sua última confirmação de estrutura)
const gruposEtemas = {
    "Logística": {
        "tema": "Tema não fornecido",
        "grupos": [
            {
                "nome": "Grupo Logística",
                "membros": [
                    "Eric",
                    "Gabriel",
                    "Lucas Israel",
                    "Livia",
                    "Thiago",
                    "Felipe Freitas"
                ]
            }
        ]
    },
    "Auditoria Adm": {
        "tema": "Tema não fornecido",
        "grupos": [
            {
                "nome": "Grupo Auditoria Adm",
                "membros": [
                    "Julia",
                    "Beatriz",
                    "Bianca",
                    "Caio",
                    "Claudio",
                    "Carlos"
                ]
            }
        ]
    },
    "Contabilidade": {
        "tema": "Tema não fornecido",
        "grupos": [
            {
                "nome": "Grupo Contabilidade",
                "membros": [
                    "Guilherme",
                    "Fabricio",
                    "Gustavo S",
                    "Lucas Ramos",
                    "Matheus T"
                ]
            }
        ]
    },
    "Auditoria Cont.": {
        "tema": "Tema não fornecido",
        "grupos": [
            {
                "nome": "Grupo Auditoria Cont.",
                "membros": [
                    "Elaine G",
                    "Bianca",
                    "Nicole N (b)",
                    "Marcella (b)",
                    "Lucas Sá",
                    "Luiz Henrique"
                ]
            }
        ]
    },
    "Marketing": {
        "tema": "Tema não fornecido",
        "grupos": [
            {
                "nome": "Grupo Marketing",
                "membros": [
                    "Fabiane",
                    "Erica",
                    "Caio",
                    "Arthur",
                    "Julia",
                    "Aghata"
                ]
            }
        ]
    },
    "Consultoria": {
        "tema": "Tema não fornecido",
        "grupos": [
            {
                "nome": "Grupo Consultoria",
                "membros": [
                    "Giovanna",
                    "Leivison",
                    "Filipe",
                    "Inara",
                    "Daniele"
                ]
            }
        ]
    },
    "Mercado Financeiro": {
        "tema": "Tema não fornecido",
        "grupos": [
            {
                "nome": "Grupo Mercado Financeiro",
                "membros": [
                    "Luiza",
                    "Giovana",
                    "Fabio",
                    "Guilherme",
                    "Pedro",
                    "Nathalia"
                ]
            }
        ]
    },
    "Controladoria": {
        "tema": "Tema não fornecido",
        "grupos": [
            {
                "nome": "Grupo Controladoria",
                "membros": [
                    "Julio Cesar",
                    "Juliana",
                    "Ana Carolina",
                    "Giovanne",
                    "Lucas Shimoda",
                    "Alice"
                ]
            }
        ]
    },
    "Vendas": {
        "tema": "Tema não fornecido",
        "grupos": [
            {
                "nome": "Grupo Vendas",
                "membros": [
                    "João",
                    "Caryl",
                    "Ester",
                    "Gustavo",
                    "Luiz",
                    "Lucas"
                ]
            }
        ]
    },
    "Comex": {
        "tema": "Tema não fornecido",
        "grupos": [
            {
                "nome": "Grupo Comex",
                "membros": [
                    "Lara",
                    "Victor",
                    "Anna S",
                    "Daniel",
                    "Caio"
                ]
            }
        ]
    },
    "Gestão de Pessoas": {
        "tema": "Tema não fornecido",
        "grupos": [
            {
                "nome": "Grupo Gestão de Pessoas",
                "membros": [
                    "Barbara Garcia",
                    "Gustavo Pinheiro",
                    "Gustavo Aguiar",
                    "Alice Sousa",
                    "Gabriel V",
                    "Julia R"
                ]
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const groupsContainer = document.getElementById('groups-container');

    for (const area in gruposEtemas) {
        if (gruposEtemas.hasOwnProperty(area)) {
            const areaData = gruposEtemas[area];
            const card = document.createElement('div');
            card.className = 'group-card';

            // Título da Área
            const title = document.createElement('h4');
            title.textContent = area;
            card.appendChild(title);


            // Lista de Membros
            areaData.grupos.forEach(grupo => {
                const membersList = document.createElement('ul');
                grupo.membros.forEach(membro => {
                    const listItem = document.createElement('li');
                    listItem.textContent = membro;
                    membersList.appendChild(listItem);
                });
                card.appendChild(membersList);
            });

            groupsContainer.appendChild(card);
        }
    }
});
