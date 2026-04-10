---
title: Docker 部署
---

# Docker 部署

## Docker Compose 示例

```yaml
services:
  sillytavern:
    container_name: sillytavern
    hostname: sillytavern
    image: ghcr.io/sillytavern/sillytavern:latest
    environment:
      - NODE_ENV=production
      - FORCE_COLOR=1
    ports:
      - "8000:8000"
    volumes:
      - "./config:/home/node/app/config"
      - "./data:/home/node/app/data"
      - "./plugins:/home/node/app/plugins"
      - "./extensions:/home/node/app/public/scripts/extensions/third-party"
    restart: unless-stopped
```

推荐使用 Docker 部署，方便迁移和使用。打开对应的 `ip:端口` 然后进行相关配置。
