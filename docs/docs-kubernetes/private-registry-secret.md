---
sidebar_position: 3
---

# Creating Private Registry Secret For Kubernetes

```bash
kubectl create secret docker-registry --dry-run=client $secret_name \
  --docker-server=<DOCKER_REGISTRY_SERVER> \
  --docker-username=<DOCKER_USER> \
  --docker-password=<DOCKER_PASSWORD> \
  --docker-email=<DOCKER_EMAIL> -o yaml > docker-secret.yaml
```