from behave import *

@given('we have behave installed')
def step_impl(context):
    pass

@when('we implement a test')
def step_impl(context):
    assert True is not False

@then('behave will test it for us!')
def step_impl(context):
    assert context.failed is False


@given('an empty test event')
def step_impl(context):
    context.event = {}

@when('a get UUID function is invoked')
def step_impl(context):
    from example.example import fetch_uuid
    context.returns = fetch_uuid(context.event, {})

@then('it returns a UUID v4')
def step_impl(context):
    assert context.returns['uuid'] is not None
    assert len(context.returns['uuid']) == 36
