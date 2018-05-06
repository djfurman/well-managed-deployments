from behave import *

@given('a valid manual change order')
def fake_change_order(context):
    pass

@when('the change is submitted')
def change_submitted(context):
    pass

@then('the change order should be stored in the database')
def change_in_database(context):
    pass

@then('the response should have a created status code')
def created_status_code(context):
    assert context.status_code == 201

@then('the response should have a location header')
def location_header_present(context):
    pass

@then('the response should include the change order id')
def response_has_change_order_id(context):
    pass
