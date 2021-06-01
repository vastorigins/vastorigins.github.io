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

## Troubleshoot

Determine if Kubernetes cluster is running in an environment that supports external load balancer.

```bash
kubectl get svc istio-ingressgateway -n istio-system
```

```bash
istioctl analyze
```

```bash
curl -H curl -s -I -HHost:keycloak.7f000101.nip.io http://127.0.0.1
```

[istio-releases]: https://github.com/istio/istio/releases