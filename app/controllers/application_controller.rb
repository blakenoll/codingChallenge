require 'twitter'

class ApplicationController < ActionController::API
  before_action :set_api_client

  private

  def set_api_client
    @client = Twitter::REST::Client.new do |config|
    config.consumer_key = "ewCqNnE1YBBIJB5a4UzuI9xXw"
    config.consumer_secret = "IL5IHJ1Mh0HrlduToRy8xS2Ua9LVbx27gtMcPBYEOXawr05TlI"
    config.access_token = "2326103119-OlF3vmfutrsKJ1BhYlw7EL4d9NJJjLZDYOwo0Om"
    config.access_token_secret = "K63cNbvcb0gDpOronc7cvxIQwGrtGDn9V77SQnH30jtjq"
    end
  end
  
end
