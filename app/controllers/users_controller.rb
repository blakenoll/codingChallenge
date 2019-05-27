require 'twitter'

class UsersController < ApplicationController
  
  def index
    @tweets = @client.user_timeline('casetabs', count: 20)
    render json: @tweets
  end

  def view_mention
    @userinfo = @client.user(params[:username])
    render json: @userinfo
  end

  def view_users_tweets
    @usertweets = @client.user_timeline(params[:username], count: 20)
    render json: @usertweets
  end

end
