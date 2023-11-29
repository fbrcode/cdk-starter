# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template

## Folder structure

- `bin` - contains the entry point for the CDK app
- `lib` - contains the stack definition (cloudformation) - L1, L2, L3 constructs
- `package.json` - all is a dev dependency because it will run in a pipeline (not production)

## CDK Documentation

- Constructs: <https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html>
- Issues Research: <https://github.com/aws/aws-cdk>

## Udemy Course

- <https://www.udemy.com/course/aws-typescript-cdk-serverless-react>

## Command steps

1. `npm install -g aws-cdk # installs the cdk globally`
2. `cdk init --language=typescript # creates a new project`
3. `aws configure --profile cdk # setup a new aws profile`
4. `cdk bootstrap --profile cdk # start a new cloudformation stack`
5. `cdk synth --profile cdk # generates cloudformation metadata template`
6. `cdk deploy --profile cdk # deploys cloudformation metadata template`
7. `cdk list --profile cdk # lists all stacks locally`
8. `cdk diff --profile cdk # compares local stack with deployed stack`
9. `cdk doctor --profile cdk # checks for any issues with the cdk`
10. `cdk destroy --profile cdk # destroys the stack`
11. `cdk deploy --all --profile cdk # deploys all cloudformation metadata templates`
