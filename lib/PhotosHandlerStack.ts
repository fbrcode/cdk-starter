import * as cdk from "aws-cdk-lib";
import { Fn } from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  Code,
  Function as LambdaFunction,
  Runtime,
} from "aws-cdk-lib/aws-lambda";

interface PhotosHandlerStackProps extends cdk.StackProps {
  targetBucketArn: string;
}

export class PhotosHandlerStack extends cdk.Stack {
  private stackSuffix: string;

  // constructor(scope: Construct, id: string, props?: cdk.StackProps) {
  constructor(scope: Construct, id: string, props: PhotosHandlerStackProps) {
    super(scope, id, props);

    this.initializeSuffix();

    // const targetBucket = Fn.importValue("photos-bucket");

    new LambdaFunction(this, "PhotosHandler", {
      functionName: `ph-handler-${this.stackSuffix}`,
      runtime: Runtime.NODEJS_18_X,
      handler: "index.handler",
      code: Code.fromInline(`
        exports.handler = async (event) => {
          console.log("hello!: " + process.env.TARGET_BUCKET);
        };
      `),
      environment: {
        // TARGET_BUCKET: targetBucket,
        TARGET_BUCKET: props.targetBucketArn,
      },
    });
  }

  private initializeSuffix() {
    const shortStackId = Fn.select(2, Fn.split("/", this.stackId));
    this.stackSuffix = Fn.select(4, Fn.split("-", shortStackId));
  }
}
