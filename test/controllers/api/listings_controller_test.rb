require 'test_helper'

class Api::ListingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_listings_index_url
    assert_response :success
  end

  test "should get new" do
    get api_listings_new_url
    assert_response :success
  end

  test "should get edit" do
    get api_listings_edit_url
    assert_response :success
  end

  test "should get delete" do
    get api_listings_delete_url
    assert_response :success
  end

end
