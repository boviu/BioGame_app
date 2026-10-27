// Conteúdo do jogo, extraído do documento "Narrativa".
// 4 níveis x 4 fases. Cada fase tem uma narrativa e 2 perguntas (4 opções, `correta` = índice da certa).
// Depois das 16 fases aparece o nível bônus "O Guardião da Semente"; ao concluí-lo a árvore vira dourada.
// Para editar textos ou perguntas, mexa só neste arquivo.

export const NIVEIS = [
  {
    "id": 1,
    "nome": "Introdução",
    "subtitulo": "A árvore que pede ajuda",
    "fases": [
      {
        "id": "1.1",
        "titulo": "O Encontro",
        "narrativa": "Você encontrou uma pequena árvore solitária em um lugar que já foi uma grande e exuberante floresta. As árvores desapareceram, os animais foram embora e o chão ficou completamente coberto por resíduos esquecidos.",
        "perguntas": [
          {
            "pergunta": "O que você acha que mais contribui para o acúmulo de resíduos plásticos e lixo no meio ambiente atual?",
            "opcoes": [
              "A existência das próprias árvores e plantas.",
              "A chuva e a ação natural dos ventos fortes.",
              "Os animais selvagens que habitavam a floresta.",
              "O uso excessivo de produtos descartáveis no dia a dia."
            ],
            "correta": 3
          },
          {
            "pergunta": "Ao olhar para essa pequena árvore sofrendo, qual deve ser a nossa missão principal no BioGame?",
            "opcoes": [
              "Coletar o lixo para queimá-lo no meio da floresta.",
              "Recuperar o ambiente e descobrir formas sustentáveis de consumir.",
              "Abandonar a árvore e procurar uma floresta que já esteja limpa.",
              "Construir uma fábrica de plástico convencional ao lado dela."
            ],
            "correta": 1
          }
        ]
      },
      {
        "id": "1.2",
        "titulo": "Mar de Descarte",
        "narrativa": "A grande causa desse cenário desolador? Durante muito tempo, as pessoas escolheram produtos descartáveis pela conveniência do minuto, sem pensar no impacto de longo prazo que deixariam para trás.",
        "perguntas": [
          {
            "pergunta": "Quando usamos um copo ou canudo de plástico comum por apenas 5 minutos e o jogamos fora, o que acontece com ele?",
            "opcoes": [
              "Ele se dissolve no ar e some magicamente após algumas horas.",
              "Ele é levado a aterros ou escapa para a natureza, poluindo por séculos.",
              "Ele volta instantaneamente para a fábrica para virar um copo novo.",
              "Ele se transforma em adubo orgânico para as plantas da floresta."
            ],
            "correta": 1
          },
          {
            "pergunta": "Por que os produtos descartáveis de uso único se tornaram um dos maiores vilões da natureza?",
            "opcoes": [
              "Porque eles são muito caros para os consumidores comprarem.",
              "Porque as fábricas produzem muito pouco deles por ano.",
              "Porque seu tempo de uso é curtíssimo, mas seu tempo de descarte é eterno.",
              "Porque os animais gostam de coletá-los para fazer ninhos."
            ],
            "correta": 2
          }
        ]
      },
      {
        "id": "1.3",
        "titulo": "O Tempo Não Para",
        "narrativa": "O maior problema desses resíduos que cobrem o chão é a resistência deles. O tempo passa, as estações mudam, mas as embalagens plásticas continuam intactas, sufocando as raízes da nossa pequena árvore.",
        "perguntas": [
          {
            "pergunta": "Qual destes materiais comuns do nosso dia a dia demora mais tempo para se decompor naturalmente no ecossistema?",
            "opcoes": [
              "Uma folha de papel de caderno.",
              "Uma casca de fruta ou resto de alimento.",
              "Uma garrafa plástica convencional.",
              "Um pedaço de papelão de caixa de sapato."
            ],
            "correta": 2
          },
          {
            "pergunta": "O que significa dizer que um material demora centenas de anos para \"se decompor\"?",
            "opcoes": [
              "Significa que ele purifica o solo enquanto se quebra.",
              "Significa que ele permanece poluindo o ambiente por gerações.",
              "Significa que ele evapora e vira água da chuva limpa.",
              "Significa que ele vira alimento saudável para os microrganismos."
            ],
            "correta": 1
          }
        ]
      },
      {
        "id": "1.4",
        "titulo": "O Pacto com a Natureza",
        "narrativa": "Olhe nos olhos virtuais dessa floresta estragada: ainda existe uma chance real de mudar o destino dela. Mas, para isso, precisamos selar um pacto e mudar nossa mentalidade a partir de agora.",
        "perguntas": [
          {
            "pergunta": "Para iniciarmos a limpeza da floresta, qual é o conceito inicial mais importante que o jogador precisa entender?",
            "opcoes": [
              "Que limpar o lixo uma vez resolve o problema para sempre.",
              "Que o consumo de materiais não tem relação com a saúde da floresta.",
              "Que nossas escolhas diárias de consumo afetam diretamente a natureza.",
              "Que a tecnologia atual já consegue destruir todo o lixo do mundo."
            ],
            "correta": 2
          },
          {
            "pergunta": "Se o jogador aceitar o desafio do BioGame, qual será o indicador de que ele está vencendo o jogo?",
            "opcoes": [
              "O acúmulo de mais objetos descartáveis na tela.",
              "O crescimento da árvore e o sumiço gradual do lixo no cenário.",
              "O aumento do calor e da poluição na fase.",
              "A fuga dos poucos animais que restaram no mapa."
            ],
            "correta": 1
          }
        ]
      }
    ],
    "feedback": "O pacto foi feito! Suas primeiras respostas deram forças para a pequena árvore resistir.",
    "rotulo": "Introdução",
    "arvore": "Árvore quase sem vida",
    "cor": "vermelho"
  },
  {
    "id": 2,
    "nome": "O Início",
    "subtitulo": "Uma escolha aparentemente pequena",
    "fases": [
      {
        "id": "2.1",
        "titulo": "A Sacola Extra",
        "narrativa": "Você começa a caminhar e encontra uma situação que simula o nosso dia a dia urbano. Uma pessoa está saindo de uma loja e recebe uma sacola plástica descartável para carregar apenas uma caixinha de chicletes. Parece uma escolha inofensiva...",
        "perguntas": [
          {
            "pergunta": "Qual atitude o cliente deveria tomar para demonstrar um consumo consciente nessa situação?",
            "opcoes": [
              "Pegar duas sacolas para garantir que a caixinha não caia.",
              "Recusar a sacola e guardar o item na mochila, bolso ou usar ecobag.",
              "Aceitar a sacola plástica e jogá-la na calçada logo em seguida.",
              "Pegar a sacola e depois pedir mais embalagens para embrulhar o produto."
            ],
            "correta": 1
          },
          {
            "pergunta": "Por que recusar uma embalagem plástica desnecessária é considerado o primeiro passo do consumo sustentável?",
            "opcoes": [
              "Porque faz o comércio economizar dinheiro de forma injusta.",
              "Porque evita que um resíduo desnecessário seja gerado e descartado.",
              "Porque as sacolas plásticas deixam as mãos das pessoas sujas.",
              "Porque o papel é o único material que deveria existir no planeta."
            ],
            "correta": 1
          }
        ]
      },
      {
        "id": "2.2",
        "titulo": "O Efeito Multiplicador",
        "narrativa": "Uma única sacolinha de plástico ou um copinho parecem não fazer diferença no planeta, certo? Mas o grande perigo está na matemática oculta: bilhões de pessoas fazendo a mesma escolha errada todos os dias.",
        "perguntas": [
          {
            "pergunta": "O que acontece quando pequenas ações negativas de descarte são multiplicadas por milhões de habitantes na Terra?",
            "opcoes": [
              "O impacto continua sendo imperceptível para a fauna e flora.",
              "A natureza cria um mecanismo mágico de absorção do plástico.",
              "Resulta em catástrofes ambientais, como ilhas de lixo nos oceanos.",
              "As indústrias param de fabricar o plástico por falta de espaço."
            ],
            "correta": 2
          },
          {
            "pergunta": "Pensando no \"efeito multiplicador\", qual frase abaixo melhor define o poder das nossas escolhas individuais?",
            "opcoes": [
              "\"Minha escolha não importa, pois sou apenas uma pessoa no mundo.\"",
              "\"Se eu fizer a minha parte, posso continuar poluindo nos fins de semana.\"",
              "\"Pequenas ações positivas somadas geram grandes transformações.\"",
              "\"O consumidor não tem poder nenhum sobre a poluição do planeta.\""
            ],
            "correta": 2
          }
        ]
      },
      {
        "id": "2.3",
        "titulo": "De Onde Ele Vem?",
        "narrativa": "Para combater a poluição nesta área da floresta, precisamos entender a origem do inimigo. O plástico convencional que está espalhado pelo chão não nasce na natureza; ele vem de um recurso subterrâneo limitado e altamente poluente.",
        "perguntas": [
          {
            "pergunta": "Qual é a principal matéria-prima fóssil utilizada na fabricação do plástico comum de sacolas e garrafas?",
            "opcoes": [
              "Carvão vegetal extraído de florestas replantadas.",
              "Petróleo extraído de reservas não renováveis.",
              "Seiva de árvores seringueiras da Amazônia.",
              "Gás oxigênio concentrado da atmosfera."
            ],
            "correta": 1
          },
          {
            "pergunta": "Qual é o grande problema de usarmos uma fonte não renovável como o petróleo para fazer produtos que usamos por apenas alguns minutos?",
            "opcoes": [
              "O petróleo se regenera muito rápido na natureza, causando excesso dele.",
              "Os produtos de petróleo são macios demais e quebram antes do uso.",
              "Esgotamos recursos do planeta e geramos poluentes difíceis de degradar.",
              "O petróleo é um ingrediente que deveria ser usado apenas na alimentação."
            ],
            "correta": 2
          }
        ]
      },
      {
        "id": "2.4",
        "titulo": "A Virada de Chave",
        "narrativa": "Olhe ao redor! Suas decisões conscientes começaram a surtir efeito. Um pequeno raio de sol conseguiu atravessar a névoa de poluição e tocou o solo desta área do BioGame. O segredo da mudança foi revelado.",
        "perguntas": [
          {
            "pergunta": "Entre as opções abaixo, qual representa a melhor estratégia de gerenciamento de resíduos para o futuro?",
            "opcoes": [
              "Produzir o triplo de plástico e focar apenas em enterrar o lixo.",
              "Esperar que cientistas criem uma máquina que faça o lixo sumir do nada.",
              "Reduzir a produção de resíduos na fonte antes mesmo deles existirem.",
              "Incentivar as pessoas a jogarem lixo nos rios para limpar as ruas."
            ],
            "correta": 2
          },
          {
            "pergunta": "O que a \"Virada de Chave\" nesta fase nos ensina sobre a recuperação ambiental da nossa floresta?",
            "opcoes": [
              "Que a floresta se recuperará apenas se ninguém nunca mais entrar nela.",
              "Que mudar nossos hábitos de consumo é a ferramenta mais poderosa.",
              "Que precisamos de robôs caros para fazer todo o trabalho de limpeza.",
              "Que o plástico convencional é o material mais ecológico se for colorido."
            ],
            "correta": 1
          }
        ]
      }
    ],
    "feedback": "Zona limpa! O solo desta área voltou a respirar e a grama começou a brotar.",
    "rotulo": "O início",
    "arvore": "Árvore em recuperação",
    "cor": "laranja"
  },
  {
    "id": 3,
    "nome": "Bioplásticos",
    "subtitulo": "Uma nova possibilidade",
    "fases": [
      {
        "id": "3.1",
        "titulo": "O Laboratório Perdido",
        "narrativa": "Você caminha mais a fundo e encontra uma antiga estrutura de pesquisa abandonada no meio da floresta. Entrando no laboratório, as telas se acendem com uma mensagem gravada por um cientista: \"E se pudéssemos criar novos materiais usando fontes renováveis?\"",
        "perguntas": [
          {
            "pergunta": "Qual é o nome da categoria de materiais inovadores estudados neste laboratório para substituir o plástico fóssil?",
            "opcoes": [
              "Plásticos Metálicos.",
              "Bioplásticos.",
              "Polímeros de Vidro.",
              "Sintéticos de Petróleo Avançado."
            ],
            "correta": 1
          },
          {
            "pergunta": "Por que a ciência busca criar alternativas ao plástico convencional dentro de laboratórios ecológicos?",
            "opcoes": [
              "Porque o plástico comum ficou fora de moda entre os designers.",
              "Porque os bioplásticos são mais baratos de produzir do que qualquer lixo.",
              "Para diminuir a dependência do petróleo e o impacto do descarte.",
              "Para criar embalagens que durem mais tempo do que as garrafas normais."
            ],
            "correta": 2
          }
        ]
      },
      {
        "id": "3.2",
        "titulo": "Fontes da Natureza",
        "narrativa": "Vasculhando as anotações e tubos de ensaio, você descobre algo fascinante: cientistas aprenderam a extrair compostos de vegetais comuns da agricultura para criar plásticos vegetais!",
        "perguntas": [
          {
            "pergunta": "Quais matérias-primas renováveis podem ser utilizadas na fabricação de diferentes tipos de bioplásticos?",
            "opcoes": [
              "Areia do deserto, rochas graníticas e água salgada.",
              "Cana-de-açúcar, amido de milho, batata e biomassa de algas.",
              "Alumínio reciclado, ferro gusa e folhas secas de outono.",
              "Óleo de motor usado, carvão mineral e plástico velho triturado."
            ],
            "correta": 1
          },
          {
            "pergunta": "Qual é o principal benefício ambiental de usar milho ou cana-de- açúcar em vez de petróleo para fazer embalagens?",
            "opcoes": [
              "As plantas absorvem plástico do ar enquanto estão crescendo no campo.",
              "Utiliza fontes que podem ser plantadas e colhidas anualmente (renováveis).",
              "O bioplástico resultante tem gosto de doce e serve como ração animal.",
              "A produção agrícola não consome nenhum tipo de recurso do planeta."
            ],
            "correta": 1
          }
        ]
      },
      {
        "id": "3.3",
        "titulo": "A Ressalva Científica",
        "narrativa": "Atenção! O diário do pesquisador faz um alerta crucial em letras vermelhas: nem todo material que carrega o nome \"bio\" se comporta da mesma forma na natureza. Um bom Guardião da Floresta precisa conhecer a fundo a ciência.",
        "perguntas": [
          {
            "pergunta": "De acordo com os estudos do laboratório, o que diferencia quimicamente o bioplástico do plástico convencional?",
            "opcoes": [
              "O bioplástico é sempre comestível e dissolve instantaneamente na boca.",
              "Pode ser produzido a partir de fontes renováveis, dependendo do tipo.",
              "Ele nunca pode ser moldado na forma de objetos tridimensionais ou sacolas.",
              "É um material 100% livre de qualquer processo químico ou industrialização."
            ],
            "correta": 1
          },
          {
            "pergunta": "Por que a ressalva de que \"nem todo bioplástico é automaticamente biodegradável\" é tão importante no jogo?",
            "opcoes": [
              "Porque alguns bioplásticos duram tanto na natureza quanto o plástico comum.",
              "Porque significa que os bioplásticos não servem para nada no mundo real.",
              "Porque os plásticos de petróleo são melhores para o solo da floresta.",
              "Porque indica que o amido de milho é tóxico para as árvores nativas."
            ],
            "correta": 0
          }
        ]
      },
      {
        "id": "3.4",
        "titulo": "O Destino Correto",
        "narrativa": "Você reativa a energia do laboratório ecológico! As máquinas voltam a funcionar e a enviar novas diretrizes de descarte correto para as cidades vizinhas. Você aprende que até as melhores soluções precisam de educação.",
        "perguntas": [
          {
            "pergunta": "Para que um bioplástico classificado como \"biodegradável e compostável\" suma sem poluir, onde ele deve idealmente ser descartado?",
            "opcoes": [
              "Jogado diretamente nos rios para alimentar a fauna aquática.",
              "Enterrado no meio de qualquer calçada de concreto urbana.",
              "Em usinas de compostagem industrial com condições controladas.",
              "Misturado no lixo eletrônico junto com pilhas e baterias velhas."
            ],
            "correta": 2
          },
          {
            "pergunta": "O bioplástico resolve 100% do problema global do lixo sozinho se não mudarmos nossas atitudes de consumo?",
            "opcoes": [
              "Sim, agora a humanidade pode usar e descartar quanto lixo quiser no chão.",
              "Não, ele é um aliado técnico, mas a redução do desperdício ainda é vital.",
              "Sim, o bioplástico faz com que as pessoas parem de consumir produtos.",
              "Não, pois o bioplástico polui muito mais do que o plástico de petróleo."
            ],
            "correta": 1
          }
        ]
      }
    ],
    "feedback": "Conhecimento ativado! O laboratório está funcionando e gerando tecnologia verde para salvar o bioma.",
    "rotulo": "Bioplásticos",
    "arvore": "Árvore renascendo",
    "cor": "amarelo"
  },
  {
    "id": 4,
    "nome": "Meio Ambiente",
    "subtitulo": "O ecossistema conectado",
    "fases": [
      {
        "id": "4.1",
        "titulo": "Vozes da Floresta (Inspirado no Lorax)",
        "narrativa": "Saindo do laboratório, você percebe pegadas de animais. Conforme avança, nota que o problema do descarte inadequado não feriu apenas a flora. Os habitats foram modificados e os bichos sofrem em silêncio. Cuidar do meio ambiente é proteger toda a teia da vida.",
        "perguntas": [
          {
            "pergunta": "O descarte incorreto e irresponsável de resíduos plásticos na natureza tem a capacidade de afetar negativamente a quem?",
            "opcoes": [
              "Apenas os seres humanos que vivem nas grandes cidades de pedra.",
              "Exclusivamente as plantas de pequeno porte e os arbustos da floresta.",
              "Somente os peixes e animais marinhos que nadam em oceanos distantes.",
              "Animais, plantas e seres humanos de forma interligada e sistêmica."
            ],
            "correta": 3
          },
          {
            "pergunta": "Em O Lorax, a destruição ocorre porque ninguém pensou nas consequências ecológicas. No BioGame, como evitamos esse desastre?",
            "opcoes": [
              "Ignorando a fauna e focando apenas no lucro das pontuações.",
              "Entendendo que a saúde dos animais e plantas está conectada à nossa.",
              "Removendo todos os animais da floresta para colocá-los em gaiolas.",
              "Substituindo todas as árvores naturais por árvores artificiais de metal."
            ],
            "correta": 1
          }
        ]
      },
      {
        "id": "4.2",
        "titulo": "Rios de Plástico",
        "narrativa": "Um pequeno riacho corta esta área do mapa, mas suas águas estão cinzentas. Garrafas plásticas flutuam na superfície e microplásticos se misturam com a areia do fundo. Os pássaros e peixes locais correm perigo real.",
        "perguntas": [
          {
            "pergunta": "O que acontece quando animais selvagens encontram resíduos plásticos flutuando em seus rios e florestas?",
            "opcoes": [
              "Eles usam os plásticos para construir casas mais seguras e modernas.",
              "Eles confundem com comida, gerando engasgos, desnutrição e morte.",
              "O plástico serve como suplemento vitamínico e melhora a saúde deles.",
              "Os animais aprendem a reciclar o plástico de forma autônoma na mata."
            ],
            "correta": 1
          },
          {
            "pergunta": "Como o plástico jogado incorretamente nas ruas das cidades consegue chegar até os animais dessa floresta distante?",
            "opcoes": [
              "Os animais vão até as cidades para buscar o plástico voluntariamente.",
              "O plástico cria asas através de reações químicas com o sol do meio- dia.",
              "É carregado pelo vento e pelas chuvas através de bueiros e rios.",
              "As pessoas transportam o lixo das calçadas para plantar na floresta."
            ],
            "correta": 2
          }
        ]
      },
      {
        "id": "4.3",
        "titulo": "Escolhendo o Caminho",
        "narrativa": "A floresta está quase limpa, mas o BioGame coloca você diante de uma encruzilhada filosófica definitiva. Na tela do jogo, três caminhos se abrem para o futuro da humanidade. Qual direção nós vamos escolher seguir a partir de hoje?",
        "perguntas": [
          {
            "pergunta": "Diante da encruzilhada do futuro do planeta, qual atitude o jogo espera que você tome?",
            "opcoes": [
              "Continuar gerando resíduos sem restrições, pois a tecnologia limpará tudo.",
              "Reduzir o consumo supérfluo, reutilizar itens e apoiar alternativas verdes.",
              "Coletar o lixo e simplesmente jogá-lo escondido em outro bioma vizinho.",
              "Banir o uso de qualquer objeto e voltar a viver sem nenhuma tecnologia."
            ],
            "correta": 1
          },
          {
            "pergunta": "Por que apenas trocar o plástico convencional por bioplástico não resolve o problema se mantivermos o hábito do desperdício?",
            "opcoes": [
              "Porque o bioplástico é um material tóxico que destrói a camada de ozônio.",
              "Porque as fábricas não possuem capacidade de produzir bioplásticos em massa.",
              "Porque o volume massivo de descarte continuará sobrecarregando o planeta.",
              "Porque os consumidores preferem o design das embalagens antigas de petróleo."
            ],
            "correta": 2
          }
        ]
      },
      {
        "id": "4.4",
        "titulo": "O Renascimento",
        "narrativa": "Impressionante! Olhe para trás e contemple a transformação. As árvores cresceram fortes, flores coloridas desabrocharam e o som dos pássaros ecoa novamente. A floresta não precisava de um super-herói mágico; precisava apenas de humanos dispostos a fazer escolhas diferentes!",
        "perguntas": [
          {
            "pergunta": "Qual foi a lição ecológica mais valiosa e duradoura que a jornada do BioGame gravou no seu painel?",
            "opcoes": [
              "Que os problemas do meio ambiente são impossíveis de serem resolvidos.",
              "Que o plástico convencional desaparecerá sozinho se ignorarmos o problema.",
              "Que as ações coordenadas dos 4Rs (Reduzir, Reutilizar, Reciclar, Repensar) mudam o mundo.",
              "Que as plantas se desenvolvem melhor quando cercadas por lixo industrial."
            ],
            "correta": 2
          },
          {
            "pergunta": "Quem é o verdadeiro responsável por manter essa floresta e o nosso planeta limpos após o término do jogo?",
            "opcoes": [
              "Somente os cientistas que trabalham trancados dentro dos laboratórios.",
              "Exclusivamente os computadores e algoritmos de jogos educativos.",
              "Cada um de nós, através de pequenas e grandes decisões tomadas diariamente.",
              "Ninguém, pois a floresta agora consegue se limpar sozinha sem ajuda."
            ],
            "correta": 2
          }
        ]
      }
    ],
    "feedback": "PARABÉNS! Você concluiu a jornada principal do BioGame! A floresta renasceu graças à sabedoria das suas escolhas!",
    "rotulo": "Meio ambiente",
    "arvore": "Árvore florescendo",
    "cor": "verdeCard"
  }
]

export const BONUS = {
  "nome": "O Guardião da Semente",
  "narrativa": "Um brilho místico surge nas raízes da árvore mestre. O espírito guardião da floresta reconheceu seu conhecimento e depositou em suas mãos a última Semente de Ouro. Para plantá-la e transformar sua árvore comum em uma estrutura dourada eterna, você deve responder ao desafio supremo com precisão absoluta.",
  "perguntas": [
    {
      "pergunta": "Qual combinação de atitudes sistêmicas representa o equilíbrio ecológico ideal para as próximas gerações humanas na Terra?",
      "opcoes": [
        "Comprar apenas descartáveis plásticos e queimar o papel em praças públicas.",
        "Abolir as pesquisas científicas e focar em enterrar resíduos em florestas.",
        "Praticar o consumo consciente, reutilizar insumos e incentivar polímeros renováveis de descarte correto.",
        "Consumir quantidades exageradas de bioplásticos sem realizar a reciclagem."
      ],
      "correta": 2
    },
    {
      "pergunta": "O que a transformação da sua árvore virtual em uma \"Árvore Dourada\" no BioGame simboliza na realidade?",
      "opcoes": [
        "Que você ganhou o direito de consumir produtos plásticos sem culpa na sua casa.",
        "Que você adquiriu a consciência crítica necessária para ser um agente de mudança no planeta.",
        "Que a ciência descobriu uma forma de transformar lixo descartável em ouro real.",
        "Que o jogo acabou e as suas atitudes fora das telas não fazem nenhuma diferença."
      ],
      "correta": 1
    }
  ],
  "efeito": "Ao validar a última resposta correta, a semente de ouro é plantada. Raios dourados cobrem a tela, as folhas da árvore principal ganham uma textura dourada brilhante e o título de \"Guardião Lendário da Biosfera\" é exibido para o jogador!"
}

export const TOTAL_NIVEIS = NIVEIS.length
export const FASES_POR_NIVEL = 4

export function getNivel(n) {
  return NIVEIS.find((x) => x.id === n)
}

export function getFase(n, f) {
  return getNivel(n)?.fases[f - 1]
}
