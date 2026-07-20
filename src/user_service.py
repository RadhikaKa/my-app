def calculate_average(total, count):
    return total / count


def get_user(users, index):
    return users[index]


def is_admin(user):
    return user["role"] == "admin"
