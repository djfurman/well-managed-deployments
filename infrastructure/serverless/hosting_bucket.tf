resource "aws_s3_bucket" "web_hosting" {
  bucket = "${format("%s.%s.%s", var.env, var.app, var.domain)}"
  acl    = "public-read"
  region = "${var.region}"

  tags {
    Name         = "WMD Web Application"
    Envioronment = "${var.env}"
    "Created By" = "Terraform"
    Supports     = "${var.app}"
    Contact      = "${var.contact}"
  }

  website {
    index_document = "index.html"
    error_document = "error.html"

    # routing_rules # need to find the redirect for SPA
  }
}
