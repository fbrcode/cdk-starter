import * as cdk from "aws-cdk-lib";
import { Duration, CfnOutput, RemovalPolicy, CfnParameter } from "aws-cdk-lib";
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

// class L3Bucket extends Construct {
//   constructor(scope: Construct, id: string, expiration: number) {
//     super(scope, id);

//     // create S3 bucket (L3 construct)
//     new Bucket(this, "L3Bucket", {
//       bucketName: "my-l3-bucket",
//       lifecycleRules: [
//         {
//           expiration: Duration.days(expiration),
//         },
//       ],
//     });
//   }
// }

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create S3 bucket (L1 construct)
    // new CfnBucket(this, "MyL1Bucket", {
    //   bucketName: "my-l1-bucket",
    //   lifecycleConfiguration: {
    //     rules: [{ expirationInDays: 1, status: "Enabled" }],
    //   },
    // });

    const duration = new CfnParameter(this, "duration", {
      description: "Number of days to keep the objects in the bucket",
      default: 5,
      minValue: 1,
      maxValue: 10,
      type: "Number",
    });

    // create S3 bucket (L2 construct) - recommended
    const myL2Bucket = new Bucket(this, "MyL2Bucket", {
      // bucketName: "my-l2-bucket",
      lifecycleRules: [
        {
          expiration: Duration.days(duration.valueAsNumber),
        },
      ],
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    new CfnOutput(this, "MyL2BucketName", {
      value: myL2Bucket.bucketName,
    });

    // create S3 bucket (L3 construct)
    // new L3Bucket(this, "MyL3Bucket", 3);
  }
}
