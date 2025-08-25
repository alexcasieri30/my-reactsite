# --- Base stage ---
FROM python:3.11-slim AS base
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

# --- Development stage ---
FROM base AS dev
EXPOSE 5000
CMD ["python", "main.py"]

# --- Production stage ---
FROM base AS production
EXPOSE 5000
CMD ["gunicorn", "main:app", "--bind", "0.0.0.0:5000", "--workers", "4"]
