# Deploy — NETZSolutions no Ubuntu Server 24

Guia para hospedar o site estático da NETZSolutions em um servidor Ubuntu Server 24.04 com Nginx.

---

## 1. Pré-requisitos no servidor

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx curl
```

### Instalar Node.js 20 LTS (via NodeSource)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Verifique:

```bash
node -v   # v20.x
npm -v    # 10.x
```

---

## 2. Clonar o repositório e fazer build

```bash
cd /opt
sudo git clone https://github.com/felipebandeira23/netz-spark-site.git
cd netz-spark-site
sudo npm install
sudo npm run build
```

Os arquivos estáticos serão gerados em `/opt/netz-spark-site/dist/`.

---

## 3. Configurar o Nginx

Copie a configuração do Nginx:

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/netz-spark-site
```

Se desejar usar um domínio, edite o campo `server_name` no arquivo:

```bash
sudo nano /etc/nginx/sites-available/netz-spark-site
# Altere: server_name _; → server_name seudominio.com.br;
```

Ative o site e desative o default:

```bash
sudo ln -sf /etc/nginx/sites-available/netz-spark-site /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
```

Crie o diretório de publicação e copie os arquivos:

```bash
sudo mkdir -p /var/www/netz-spark-site
sudo cp -r /opt/netz-spark-site/dist/* /var/www/netz-spark-site/
```

Teste e reinicie o Nginx:

```bash
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
```

---

## 4. HTTPS com Let's Encrypt (opcional, recomendado)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d seudominio.com.br
```

O Certbot vai configurar o SSL automaticamente e adicionar a renovação automática via cron.

---

## 5. Firewall (UFW)

```bash
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## 6. Atualizações futuras

Para atualizar o site após mudanças no repositório:

```bash
cd /opt/netz-spark-site
sudo git pull
sudo npm install
sudo npm run build
sudo cp -r dist/* /var/www/netz-spark-site/
```

---

## Estrutura de arquivos no servidor

```
/opt/netz-spark-site/        ← repositório clonado
/var/www/netz-spark-site/    ← arquivos estáticos servidos pelo Nginx
/etc/nginx/sites-available/  ← configuração do Nginx
```
