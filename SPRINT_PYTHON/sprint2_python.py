import pandas as pd

class Quiz:
    def __init__(self, nome_quiz, total_questoes):
        self.nome_quiz = nome_quiz
        self.total_questoes = total_questoes
        self.acertos = 0
        self.erros = 0
        self.duracao_total = 0
        self.user = ''
        self.tentativa = 0
        self.resultados = {}
        self.percentual_acertos = 0
        self.media_tempo_resposta = 0
        self.mensagem = ''

    
    # Função responsável por contabilizar os acertos, os erros e o tempo toda da partida avaliar_desempenho(self)
    def respostas (self, user='',  tentativa=0, resposta_correta=[], tempo_resposta=[]):

        self.tentativa = tentativa
        self.user = user
        self.duracao_total = sum(tempo_resposta)

        for resposta in resposta_correta:
            if resposta:
                self.acertos += 1
            else:
                self.erros += 1
        
        # Calculando desempenho
        self.media_tempo_resposta = self.duracao_total / self.total_questoes
        self.percentual_acertos   = (self.acertos / self.total_questoes) * 100

        # Avaliando o resultado do usuário
        if self.percentual_acertos >= 70 and self.media_tempo_resposta <= 20:
            mensagem = "APROVADO"
        else:
            mensagem = "REPROVADO"

        self.mensagem = mensagem
        

    def armazenando_dados (self):

        self.resultados[self.user,f"Tentativa {self.tentativa}"]= {
                'Quiz':                   self.nome_quiz,
                'Acertos':                self.acertos,
                'Erros':                  self.erros,
                'Acertos(%)':             f"{self.percentual_acertos} %",
                'Média tempo resposta':   f"{self.media_tempo_resposta} s",
                'Duração do quiz':        f"{(self.duracao_total/60):.2f} min",
                'Status':                 self.mensagem
            }
        
        data_resutados = pd.DataFrame(self.resultados).T

        self.acertos = 0
        self.erros = 0
        self.percentual_acertos = 0
        self.media_tempo_resposta = 0
        self.duracao_total = 0
        self.mensagem = 0

        return data_resutados
            
# Função responsável por  filtrar as informações do DataFrame
def analise_tentativa (user, data, tentativa):

        # Filtrando o DataFrame
        data_filtrado =  data.loc[(data['User_ID'] == user) & (data['Tentativa'] == f'Tentativa_{tentativa}'), 'Respostas'].iloc[0]

        respostas = []
        tempo     = []

        for questao in range(total_questoes):
                        
                respostas.append(data_filtrado[questao][0])
                tempo.append(data_filtrado[questao][1])
                
        quiz.armazenando_dados()        
        quiz.respostas(user, tentativa, respostas, tempo)
        
def consulta(user, df):
    
    tentativas = df.loc[(df['User_ID'] == user)]

    for vez in range(1, len(tentativas) + 1):
        analise_tentativa(user, df, vez)
    
    data_user = quiz.armazenando_dados().loc[user]
    df.to_excel('dados_user.xlsx')
    
    #  Mostrando as informações coletadas sobre o usuário
    print(f" PROGRESSO DO USER: {user}")
    display(data_user)


quizzes = {
            'Q1': {'Nome': 'Exame - hemograma', 'Qtd': 10},
            'Q2': {'Nome': 'Exame - urina',     'Qtd': 10},
            'Q3': {'Nome': 'Exame - fezes',     'Qtd': 10}, 
        }

df_quizzes = pd.DataFrame(quizzes).T

import random

# Função para gerar tentativas aleatórias
def gerar_tentativa():
    tentativa = []
    for _ in range(10):  # 10 questões no quiz
        resultado = random.choice([True, False])  # Escolhe aleatoriamente se a resposta está correta ou não
        tempo = random.randint(10, 30)  # Tempo aleatório entre 10 e 30 segundos
        tentativa.append((resultado, tempo))
    return pd.Series(tentativa)

# Dicionário para armazenar as respostas dos usuários
respostas = {}

# Gerar 10 novos usuários com 4 tentativas diferentes cada
for i in range(1, 11):
    user_id = f'User_{i}'
    tentativas_usuario = {}
    for j in range(1, 5):
        nome_tentativa = f'Tentativa_{j}'
        tentativa = gerar_tentativa()
        tentativas_usuario[nome_tentativa] = tentativa
    respostas[user_id] = tentativas_usuario

# Criar DataFrame com os resultados das tentativas dos usuários
data = []
for user_id, tentativas_usuario in respostas.items():
    for tentativa, respostas_tentativa in tentativas_usuario.items():
        data.append([user_id, tentativa, respostas_tentativa])

# Criar DataFrame a partir dos dados coletados
df = pd.DataFrame(data, columns=['User_ID', 'Tentativa', 'Respostas'])

import random

# Função para gerar tentativas aleatórias
def gerar_tentativa():
    tentativa = []
    for _ in range(10):  # 10 questões no quiz
        resultado = random.choice([True, False])  # Escolhe aleatoriamente se a resposta está correta ou não
        tempo = random.randint(10, 30)  # Tempo aleatório entre 10 e 30 segundos
        tentativa.append((resultado, tempo))
    return pd.Series(tentativa)

# Dicionário para armazenar as respostas dos usuários
respostas = {}

# Gerar 10 novos usuários com 4 tentativas diferentes cada
for i in range(1, 11):
    user_id = f'User_{i}'
    tentativas_usuario = {}
    for j in range(1, 5):
        nome_tentativa = f'Tentativa_{j}'
        tentativa = gerar_tentativa()
        tentativas_usuario[nome_tentativa] = tentativa
    respostas[user_id] = tentativas_usuario

# Criar DataFrame com os resultados das tentativas dos usuários
data = []
for user_id, tentativas_usuario in respostas.items():
    for tentativa, respostas_tentativa in tentativas_usuario.items():
        data.append([user_id, tentativa, respostas_tentativa])

# Criar DataFrame a partir dos dados coletados
df = pd.DataFrame(data, columns=['User_ID', 'Tentativa', 'Respostas'])

def mostrar_menu():
    print("------ MENU: Analise de desempenho ------\n")
    print(f"Quiz: {nome_quiz}")
    print("1. Consultar desempenho do usuário")
    print("2. Ver quizzes disponiveis")
    print("3. Ver DataFrame  com dados dos usuários")
    print("4. Sair\n")

def main():
    while True:
        mostrar_menu()
        opcao = input("Escolha uma opção: ")

        if opcao == '1':
            # Coletando dados
            user_id = entrada_dados_consulta()
            # Apresentados dados
            consulta(user_id, df)

        elif opcao == '2':
            print('QUIZZES DISPONIVEIS')
            display(df_quizzes)

        elif opcao == '3':
            print('DATAFRAME')
            display(df)

        elif opcao == '4':
            print("Saindo do jogo...")
            break
        else:
            print("Opção inválida. Escolha novamente.")

if __name__ == "__main__":
    # INPUT INICIAL
    quiz_id = entrada_dados_quiz()
    # Definindo o quiz a ser analisado
    nome_quiz = quizzes[quiz_id]['Nome']
    qtd       = quizzes[quiz_id]['Qtd']
    quiz      = Quiz(nome_quiz,qtd)

    quiz = Quiz(nome_quiz,qtd)
    main()

