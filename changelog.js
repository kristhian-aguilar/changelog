let Changelog = require('generate-changelog');
let Fs = require('fs');

return Changelog.generate({ patch: true, repoUrl: 'https://github.com/kristhian-aguilar/changelog.git' })
  .then(function (changelog) {
    let version = changelog.slice(4, 10);
    let date = changelog.slice(12, 22);
    changelog_json = 
      `{
        "name": "changelog file",
        "changelog": [
            {
                "header": "v. 1.4.1",
                "header_description": "Novas funcionalidades.",
                "sub_header": "[1.4.1](https://gitlab.com/technicolor-topazio/frontend/compare/1.4.0...1.4.1) (2018-05-04)",
                "field_feature": "Features",
                "list_features": [
                    "PBI_04.17 - Engenheiro da qualidade registrar calendário;",
                    "PBI_06.03 - Engenheiro da qualidade receber alertas automáticos de pendências de tarefas;",
                    "PBI_06.05 - Engenheiro da qualidade gerar relatório de tarefas de acordo com o status;",
                    "PBI_06.07 - Engenheiro da qualidade receber notificações sobre atualização de tarefas;"
                ],
                "field_bugs": "Bug Fixes",
                "list_bugfix": [
                    ""
                ]
            },
            {
                "header": "v. 1.4.0",
                "header_description": "Novas funcionalidades.",
                "sub_header": "[1.4.0](https://gitlab.com/technicolor-topazio/frontend/compare/1.3.0...1.4.0) (2018-05-04)",
                "field_feature": "Features",
                "list_features": [
                    "PBI_04.17 - Engenheiro da qualidade registrar calendário;",
                    "PBI_06.03 - Engenheiro da qualidade receber alertas automáticos de pendências de tarefas;",
                    "PBI_06.05 - Engenheiro da qualidade gerar relatório de tarefas de acordo com o status;"
                ],
                "field_bugs": "Bug Fixes",
                "list_bugfix": [
                    ""
                ]
            },
            {
                "header": "v. 1.3.0",
                "header_description": "Novas funcionalidades e correção de falhas.",
                "sub_header": "[1.3.0](https://gitlab.com/technicolor-topazio/frontend/compare/1.2.0...1.3.0) (2018-04-12)",
                "field_feature": "Features",
                "list_features": [
                    "PBI_06.01 - Usuário registrar uma tarefa;",
                    "PBI_06.04 - Usuário visualizar lista de tarefas classificadas em abas por tipo e situação;",
                    "PBI_06.09 - Usuário realizar comentários na tarefa;",
                    "PBI_06.10 - Usuário atualizar prazo de tarefas;",
                    "PBI_06.02 - Usuário fechar/reabrir tarefa;"
                ],
                "field_bugs": "Bug Fixes",
                "list_bugfix": [
                    "Correções de falhas da versão 1.1.0."
                ]
            },
            {
                "header": "v. 1.2.0",
                "header_description": "Novas funcionalidades e correção de falhas.",
                "sub_header": "[1.2.0](https://gitlab.com/technicolor-topazio/frontend/compare/1.0.1...1.2.0) (2018-04-10)",
                "field_feature": "Features",
                "list_features": [
                    "PBI_06.01 - Usuário registrar uma tarefa;",
                    "PBI_06.04 - Usuário visualizar lista de tarefas classificadas em abas por tipo e situação;",
                    "PBI_06.09 - Usuário realizar comentários na tarefa;",
                    "PBI_06.10 - Usuário atualizar prazo de tarefas;",
                    "PBI_06.02 - Usuário fechar/reabrir tarefa;"
                ],
                "field_bugs": "Bug Fixes",
                "list_bugfix": [
                    "Correções de falhas da versão 1.1.0."
                ]
            },
            {
                "header": "v. 1.1.0",
                "sub_header": "Novas funcionalidades e correção de falhas.",
                "field_feature": "Features",
                "list_features": [
                    "PBI_02.02 - Login;",
                    "PBI_06.06 - Cadastro de equipamentos;",
                    "PBI_06.01 - Usuário registrar uma tarefa;",
                    "PBI_06.04 - Usuário visualizar lista de tarefas classificadas em abas por tipo e situação;",
                    "PBI_02.01 - Integração com sistema de RH;"
                ],
                "field_bugs": "Bug Fixes",
                "list_bugfix": [
                    "Correções de falhas da versão 1.0.0."
                ]
            },
            {
                "header": "v. 1.0.0",
                "sub_header": "Versão inicial do sistema.",
                "field_feature": "Features",
                "list_features": [
                    "PBI_02.02 - Login;Usuários existentes devem informar seu login e senha para acessar a aplicação; Funcionários que têm um usuário associado devem ser identificados na barra de informações;",
                    "PBI_06.06 - Cadastro de equipamentos;",
                    "Manter os dados de cadastro de Modelos de Produtos."
                ],
                "field_bugs": "Bug Fixes",
                "list_bugfix": [
                    ""
                ]
            }
        ]
    }`;
    console.log(changelog)
    Fs.writeFileSync('src/assets/json/changelog.json', changelog_json);
  });
