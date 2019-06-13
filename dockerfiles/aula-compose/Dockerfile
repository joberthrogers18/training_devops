# usando versão do python 2.7
FROM python:2.7

# variaveis de ambiente do python
ENV PYTHONUNBUFFERED 1

# criar uma pasta code no container
RUN mkdir /code

# define o diretório de trabalho onde vamos manter nossa aplicação
WORKDIR /code

# adiciona requirements.txtx na pasta code
ADD requirements.txt /code/

# baixa as dependencias da aplicação
RUN pip install -r requirements.txt

# adiciona a pasta do projeto na pasta coide do container
ADD . /code/
