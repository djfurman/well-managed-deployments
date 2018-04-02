resource "aws_s3_bucket" "application" {
    bucket = "wmd-web-app"
    acl = "private"

    tags {
        Name = "WMD Web Application"
        Envioronment = ""
    }
}
