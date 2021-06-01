---
sidebar_position: 1
---

# Install Istio to Docker Desktop (WSL 2)

Istio is an open source service mesh. The documentation for installing it on windows is a bit vague, and the website only provides documentation for nix based systems.

## Install Istio

Download the `istioctl.exe` executable from the official istio [releases][istio-releases] page and extract then place it in a folder your choice. Next will be adding it to your environment variable.

Adding the to environment variable will be straight-forward, add the directory location of the istioctl to `PATH`. 

Install the istio namespace and services in kubernetes.

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

Check if there are any problems presented in `analyze`.

```bash
istioctl analyze
```

Also, check the endpoint if its empty or returning any headers and data.

```bash
curl -H curl -s -I -HHost:keycloak.7f000101.nip.io http://127.0.0.1
```

[istio-releases]: https://github.com/istio/istio/releases