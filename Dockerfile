# base image  
FROM python:3.8
# install dependencies  
RUN pip install --upgrade pip  
# set environment variables  
ENV PYTHONUNBUFFERED 1  
# where your code lives  
WORKDIR /code  

COPY requirements.txt /code/
# run this command to install all dependencies  
RUN pip install -r requirements.txt 
# copy whole project to your docker home directory. 
COPY . /code/