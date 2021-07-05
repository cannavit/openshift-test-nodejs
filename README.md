## Example 1. Create new-app from one git

    git add .
    git commit -m "Commit Descripcion"
    git tag -a "v1.0.0" -m "Tag descripcion"
    git push --follow-tags

### VARIABLES:
    export OC_GIT=https://github.com/cannavit/openshift-test-nodejs.git
    export OC_BRANCH=master
    export OC_CONTEXT=node-helloworld
    export OC_IMAGE=openshift/nodejs:14-ubi7
    export OC_APP_NAME=node07-helloworld

### CREATE APP

    oc new-app \
        --context-dir=${OC_CONTEXT} \
        --image-stream ${OC_IMAGE}~${OC_GIT}#${OC_BRANCH} \
        --name ${OC_APP_NAME} 

### View build status
    oc logs -f  bc/${OC_APP_NAME}

### View app logs
    oc logs svc/${OC_APP_NAME}

### Expose app
    oc expose svc/${OC_APP_NAME}
    curl $(oc get route -o jsonpath='{..spec.host}{"\n"}' ${OC_APP_NAME})