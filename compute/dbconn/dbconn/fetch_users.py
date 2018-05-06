from models.user import User


def lambda_handler(event, context):
    user = User
    all_users = user.all()
    print(all_users)
