module "setup" {
  source = "../serverless/"
  env    = "${var.env}"
  region = "${var.region}"
}
