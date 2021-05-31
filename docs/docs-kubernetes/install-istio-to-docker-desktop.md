---
sidebar_position: 1
---

# Install Istio to Docker Desktop (WSL 2)

Istio is an open source service mesh.

## Install Istio

```bash
istioctl install --set profile=default -y
```

Also set istio to automatically inject Envoy sidecar proxies when deploying applications and services to default namespace.

```bash
kubectl label namespace default istio-injection=enabled
```

[istio-releases]: https://github.com/istio/istio/releases