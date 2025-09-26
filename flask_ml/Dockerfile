# --- Base stage ---
FROM python:3.11-slim AS base
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

# --- Development stage ---
FROM base AS dev
EXPOSE 5001
CMD ["python", "main.py"]

# --- Production stage ---
FROM base AS production
EXPOSE 5001
CMD ["gunicorn", "main:app", "--bind", "0.0.0.0:5001", "--workers", "4"]
