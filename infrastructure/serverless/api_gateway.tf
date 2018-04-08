resource "aws_api_gateway_rest_api" "backend" {
  name        = "${format("%s-%s", var.app, "Gateway")}"
  description = "RESTful API Gateway for WMD Application"
}

resource "aws_api_gateway_account" "gateway" {
  cloudwatch_role_arn = "${aws_iam_role.api_gateway_cloudwatch.arn}"
}

resource "aws_iam_role" "api_gateway_cloudwatch" {
  name = "api_gateway_cloudwatch"

  assume_role_policy = "${file("../serverless/policies/api_gateway_assume_cloudwatch.json")}"
}

resource "aws_iam_role_policy" "cloudwatch" {
  name = "default"
  role = "${aws_iam_role.api_gateway_cloudwatch.id}"

  policy = "${file("../serverless/policies/cloudwatch_logging.json")}"
}
