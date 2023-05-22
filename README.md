# My Web Application

## Instructions

1. Clonez ce dépôt en utilisant la commande suivante :

    ```bash
    git clone https://github.com/<username>/my-website-k8s.git
    ```

2. Assurez-vous d'avoir Docker installé sur votre machine. Construisez l'image Docker à partir du Dockerfile avec la commande :

    ```bash
    docker build -t <username>/<image-name>:<tag> .
    ```

    Et puis poussez l'image Docker sur Docker Hub avec la commande :

    ```bash
    docker push <username>/<image-name>:<tag>
    ```

3. Assurez-vous d'avoir kubectl et Minikube installés sur votre machine. Démarrez Minikube avec la commande :

    ```bash
    minikube start
    ```

4. Déployez l'application sur Kubernetes en utilisant le fichier de configuration avec la commande :

    ```bash
    kubectl apply -f my-app-deployment.yaml
    ```

5. Vous pouvez maintenant accéder à votre application via le tunnel LoadBalancer sur Minikube avec la commande :

    ```bash
    minikube service my-app-service
    ```

    Cela ouvrira votre navigateur sur l'URL du service exposé par le LoadBalancer.
