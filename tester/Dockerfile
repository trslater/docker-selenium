FROM python:3.10-slim

WORKDIR /code

COPY ./requirements.txt /code/

RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

COPY ./tester /code/tester

CMD ["python", "-m", "tester"]
