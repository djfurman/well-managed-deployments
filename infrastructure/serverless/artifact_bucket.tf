resource "aws_s3_bucket" "app_artifacts" {
  bucket = "${format("%s.%s-%s", var.app, var.env, "artifacts")}"
  acl    = "private"

  tags {
    Name         = "WMD Web Application"
    Envioronment = "${var.env}"
    "Created By" = "Terraform"
    Supports     = "${var.app}"
    Contact      = "${var.contact}"
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}
